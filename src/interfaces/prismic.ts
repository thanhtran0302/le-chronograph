import { RichTextBlock, RichTextSpan } from 'prismic-reactjs';

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
    name: string;
  };
}

export interface PrismicBlogPostTitle {
  type: PrismicBlogPostTitleEnum;
  text: string;
  spans: RichTextSpan[];
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
  spans?: RichTextSpan[];
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
    name: string;
    description: string;
  };
}

export interface PrismicBlogPost {
  slug: string;
  preview: string;
  title: RichTextBlock[];
  content: RichTextBlock[];
  cover_image: PrismicImage;
  creation_date: string;
  author: PrismicBlogPostAuthor;
  category: PrismicBlogPostCategory;
}
