import { FC } from 'react';
import {
  PrismicBlogPost,
  PrismicBlogPostCategory
} from '../../interfaces/prismic';
import { ComponentAppearance } from '../button/Button';
import { Layout } from './Blog.styles';
import BlogCardWrapper from './blogCardWrapper/BlogCardWrapper';
import BlogCategories from './blogCategories/BlogCategories';
import BlogHeader from './blogHeader/BlogHeader';

interface BlogProps {
  posts: PrismicBlogPost[];
  categories: PrismicBlogPostCategory[];
}

const Blog: FC<BlogProps> = ({ posts, categories }) => (
  <Layout>
    <BlogHeader />
    <BlogCategories categories={categories} />
    <BlogCardWrapper appearance={ComponentAppearance.SECONDARY} posts={posts} />
  </Layout>
);

export default Blog;
