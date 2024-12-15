import { NextResponse } from 'next/server';

interface YouTubeVideo {
  id?: { videoId: string };
  snippet?: {
    title: string;
    description: string;
    thumbnails?: {
      high?: { url: string };
      medium?: { url: string };
      default?: { url: string };
    };
    publishedAt: string;
  };
}

interface YouTubeVideoDetails {
  id: string;
  contentDetails?: {
    duration: string;
  };
  statistics?: {
    viewCount: string;
  };
}

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
// نستخدم اسم المستخدم للقناة
const CHANNEL_USERNAME = '@alkahled_group';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const maxResults = searchParams.get('maxResults') || '6';

  if (!YOUTUBE_API_KEY) {
    console.error('YouTube API key is not configured');
    return NextResponse.json(
      { error: 'YouTube API key is not configured' },
      { status: 500 }
    );
  }

  try {
    // أولاً، نحصل على معرف القناة من اسم المستخدم
    console.log('Fetching channel ID for username:', CHANNEL_USERNAME);
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?key=${YOUTUBE_API_KEY}&forUsername=${CHANNEL_USERNAME.replace('@', '')}&part=id,contentDetails`
    );

    if (!channelResponse.ok) {
      const errorData = await channelResponse.json();
      console.error('YouTube API error (channel):', errorData);
      throw new Error(`YouTube API error: ${channelResponse.statusText}`);
    }

    const channelData = await channelResponse.json();
    console.log('Channel data:', channelData);

    if (!channelData.items?.length) {
      // إذا لم نجد القناة باستخدام اسم المستخدم، نجرب البحث عن طريق المعرف مباشرة
      console.log('Channel not found by username, trying custom URL');
      const customUrlResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${CHANNEL_USERNAME}&type=channel&part=id`
      );

      if (!customUrlResponse.ok) {
        const errorData = await customUrlResponse.json();
        console.error('YouTube API error (custom URL):', errorData);
        throw new Error(`YouTube API error: ${customUrlResponse.statusText}`);
      }

      const customUrlData = await customUrlResponse.json();
      console.log('Custom URL search data:', customUrlData);

      if (!customUrlData.items?.length) {
        throw new Error('Channel not found');
      }

      channelData.items = [{ id: customUrlData.items[0].id.channelId }];
    }

    const channelId = channelData.items[0].id;
    console.log('Found channel ID:', channelId);

    // ثم نحصل على الفيديوهات باستخدام معرف القناة
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`;
    console.log('Search URL:', searchUrl.replace(YOUTUBE_API_KEY, 'API_KEY'));
    
    const searchResponse = await fetch(searchUrl);

    if (!searchResponse.ok) {
      const errorData = await searchResponse.json();
      console.error('YouTube API error (search):', errorData);
      throw new Error(`YouTube API error: ${searchResponse.statusText}`);
    }

    const searchData: { items?: YouTubeVideo[] } = await searchResponse.json();
    console.log('Search response:', searchData);
    
    if (!searchData.items?.length) {
      console.log('No videos found');
      return NextResponse.json({ videos: [] });
    }

    const videoIds = searchData.items
      .map(item => item.id?.videoId)
      .filter(Boolean)
      .join(',');

    console.log('Fetching details for videos:', videoIds);
    
    const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${videoIds}&part=statistics,contentDetails`;
    console.log('Details URL:', detailsUrl.replace(YOUTUBE_API_KEY, 'API_KEY'));
    
    const detailsResponse = await fetch(detailsUrl);

    if (!detailsResponse.ok) {
      const errorData = await detailsResponse.json();
      console.error('YouTube API error (details):', errorData);
      throw new Error(`YouTube API error: ${detailsResponse.statusText}`);
    }

    const detailsData: { items?: YouTubeVideoDetails[] } = await detailsResponse.json();
    console.log('Details response:', detailsData);

    const videos = searchData.items.map((item: YouTubeVideo) => {
      const details = detailsData.items?.find(detail => detail.id === item.id?.videoId);
      return {
        id: item.id?.videoId || '',
        title: item.snippet?.title || '',
        description: item.snippet?.description || '',
        thumbnail: item.snippet?.thumbnails?.high?.url || 
                  item.snippet?.thumbnails?.medium?.url || 
                  item.snippet?.thumbnails?.default?.url || '',
        views: details?.statistics?.viewCount ? 
               Number(details.statistics.viewCount).toLocaleString('ar-SA') : 
               'غير متوفر',
        duration: details?.contentDetails?.duration ? 
                 formatDuration(details.contentDetails.duration) : '',
        publishedAt: item.snippet?.publishedAt || ''
      };
    });

    console.log('Processed videos:', videos.length);
    return NextResponse.json({ videos });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch videos', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

function formatDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  
  if (!match) return '00:00';
  
  const hours = (match[1] || '').replace('H', '');
  const minutes = (match[2] || '').replace('M', '');
  const seconds = (match[3] || '').replace('S', '');

  const parts = [];
  
  if (hours) parts.push(hours.padStart(2, '0'));
  parts.push(minutes ? minutes.padStart(2, '0') : '00');
  parts.push(seconds ? seconds.padStart(2, '0') : '00');

  return parts.join(':');
}
