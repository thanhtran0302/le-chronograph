import { FC } from 'react';
import { PrismicBlogPost } from '../../interfaces/prismic';
import { ComponentAppearance } from '../button/Button';
import { Layout } from './Blog.styles';
import BlogCardWrapper from './blogCardWrapper/BlogCardWrapper';
import BlogCategories from './blogCategories/BlogCategories';
import BlogHeader from './blogHeader/BlogHeader';

interface BlogProps {
  posts: PrismicBlogPost[];
}

const Blog: FC<BlogProps> = ({ posts }) => (
  <Layout>
    <BlogHeader />
    <BlogCategories />
    <BlogCardWrapper appearance={ComponentAppearance.SECONDARY} posts={posts} />
  </Layout>
);

export default Blog;
