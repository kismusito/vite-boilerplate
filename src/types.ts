export type ErrorMessage = {
  message: string;
  status: number;
};

export type Pagination = {
  totalResults: number;
  resultsPerPage: number;
};

export type Thumbnail = {
  height: number;
  width: number;
  url: string;
};

export type YoutubeResponse = {
  pageInfo: Pagination;
  etag: string;
  king: string;
  nextPageToken: string;
};

export type VideoContentDetails = {
  caption: 'true' | 'false';
  licensedContent: boolean;
  projections: string;
  dimension: string;
  definition: string;
};

export type VideoThumbnails = {
  default: Thumbnail;
  high: Thumbnail;
  maxres: Thumbnail;
  medium: Thumbnail;
  standard: Thumbnail;
};

export type VideLocalized = {
  description: string;
  title: string;
};

export type VideoSnippet = {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultAudioLanguage: string;
  defaultLanguage: string;
  description: string;
  liveBroadcastContent: string;
  tags: string[];
  tittle: string;
  publishedAt: string;
  localized: VideLocalized;
  thumbnails: VideoThumbnails;
};

export interface Video extends Pick<YoutubeResponse, 'etag' | 'king'> {
  id: string;
  contentDetails: VideoContentDetails;
}

// Responses
export interface YoutubeVideoListResponse extends YoutubeResponse {
  items: Video[];
}

// Initial States
export type VideosInitialState = {
  loading: boolean;
  error: string | null;
  items: YoutubeVideoListResponse['items'];
  responseData: Omit<YoutubeVideoListResponse, 'items'> | null;
};
