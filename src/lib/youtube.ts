export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  publishedAt: string;
  url: string;
}

export async function getChannelVideos(maxResults = 6): Promise<YouTubeVideo[]> {
  try {
    const response = await fetch(`/api/youtube?maxResults=${maxResults}`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    if (!data.videos) {
      return [];
    }

    return data.videos;
  } catch (err) {
    console.error('Error fetching YouTube videos:', err);
    return [];
  }
}