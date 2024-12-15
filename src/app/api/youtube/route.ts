import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';
import { YouTubeVideo } from '@/lib/youtube';

interface YouTubeFeedEntry {
  'yt:videoId': string;
  title: string;
  'media:group'?: {
    'media:description': string;
  };
  published: string;
}

interface YouTubeFeed {
  feed: {
    entry?: YouTubeFeedEntry[];
  };
}

// معرف القناة الصحيح
const CHANNEL_ID = 'UCU8EmZwCmApANjkuSL_Qm4g';
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const maxResults = parseInt(searchParams.get('maxResults') || '6');

  try {
    const response = await fetch(RSS_URL);
    
    if (!response.ok) {
      console.error('Failed to fetch RSS feed:', response.statusText);
      return NextResponse.json(
        { error: 'Failed to fetch videos' },
        { status: response.status }
      );
    }

    const xmlData = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_'
    });
    
    const feed = parser.parse(xmlData) as YouTubeFeed;
    const entries = feed.feed.entry || [];

    const videos: YouTubeVideo[] = entries.slice(0, maxResults).map((entry) => ({
      id: entry['yt:videoId'],
      title: entry.title,
      description: entry['media:group']?.['media:description'] || '',
      thumbnail: {
        url: `https://i.ytimg.com/vi/${entry['yt:videoId']}/hqdefault.jpg`,
        width: 480,
        height: 360
      },
      publishedAt: entry.published,
      url: `https://www.youtube.com/watch?v=${entry['yt:videoId']}`
    }));

    return NextResponse.json({ videos });
  } catch (error) {
    console.error('Error processing YouTube feed:', error);
    return NextResponse.json(
      { error: 'Failed to process videos' },
      { status: 500 }
    );
  }
}
