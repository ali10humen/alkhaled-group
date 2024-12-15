declare module 'youtube-api-v3-search' {
  interface SearchOptions {
    part: string;
    type: string;
    maxResults: number;
    channelId: string;
    order?: 'date' | 'rating' | 'relevance' | 'title' | 'viewCount';
  }

  interface Thumbnail {
    url: string;
    width: number;
    height: number;
  }

  interface Thumbnails {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  }

  interface VideoSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
  }

  interface VideoId {
    kind: string;
    videoId: string;
  }

  interface SearchResult {
    kind: string;
    etag: string;
    id: VideoId;
    snippet: VideoSnippet;
  }

  interface SearchResponse {
    kind: string;
    etag: string;
    nextPageToken?: string;
    prevPageToken?: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
    items: SearchResult[];
  }

  function searchYoutube(
    apiKey: string,
    options: SearchOptions
  ): Promise<SearchResponse>;

  export default searchYoutube;
}
