import {
  AlternateLanguage,
  Document
} from 'prismic-javascript/types/documents';

export enum PrismicBlogPostTitleEnum {
  HEADING1 = 'heading1',
  HEADING2 = 'heading2',
  HEADING3 = 'heading3',
  HEADING4 = 'heading4',
  HEADING5 = 'heading5',
  HEADING6 = 'heading6'
}

export enum PrimsicTypes {
  BLOG_POSTS = 'blog_posts',
  AUTHORS = 'authors',
  CATEGORIES = 'categories'
}

export interface PrismicBlogPostCategory {
  id: string;
  type: string;
  tags: [];
  slug: string;
  lang: string;
  uid: string;
  link_type: string;
  isBroken: boolean;
  data: {
    category: string;
  };
}

export interface PrismicBlogPostTitle {
  type: PrismicBlogPostTitleEnum;
  text: string;
  spans: PrismicSpan[];
}

export interface PrismicSpan {
  start: number;
  end: number;
  type: string;
}

export interface PrismicEmbed {
  type: string;
  embed_url: string;
  title: string;
  provider_name: string;
  thumbnail_url: string;
  provider_url: string;
  author_name: string;
  html: string;
  version: string;
  author_url: string;
  thumbnail_width: number;
  thumbnail_height: number;
  height: number;
  width: number;
}

export interface PrismicBlogPostContent {
  type: string;
  alt: string | null;
  copyright: string | null;
  dimensions?: {
    width: number;
    height: number;
  };
  text?: string;
  spans?: PrismicSpan[];
  oembed?: {};
  url?: string;
}

export interface PrismicImage {
  alt?: string;
  copyright?: string;
  dimensions: {
    width: number;
    height: number;
  };
  url: string;
}

export interface PrismicAuthorText {
  type: string;
  text: string;
  spans: PrismicSpan[];
}

export interface PrismicBlogPostAuthor {
  id: string;
  type: PrimsicTypes;
  tags: string[];
  slug: string;
  lang: string;
  uid: string;
  link_type: string;
  isBroken: boolean;
  data: {
    name: PrismicAuthorText[];
  };
}

export interface PrismicDocument {
  id: string;
  uid?: string;
  url?: string;
  type: string;
  href: string;
  tags: string[];
  slugs: string[];
  lang?: string;
  alternate_languages: AlternateLanguage[];
  first_publication_date: string | null;
  last_publication_date: string | null;
  // tslint:disable-next-line: no-any
  data: any;
}

export interface PrismicResponse {
  page: number;
  results_per_page: number;
  results_size: number;
  total_results_size: number;
  total_pages: number;
  next_page: string;
  prev_page: string;
  results: Document[];
}

export interface PrismicBlogPost {
  post_slug: string;
  post_preview: string;
  post_title: PrismicBlogPostTitle[];
  post_content: PrismicBlogPostContent;
  post_main_image: PrismicImage;
  creation_date: string;
  author: PrismicBlogPostAuthor;
  category: PrismicBlogPostCategory;
}
