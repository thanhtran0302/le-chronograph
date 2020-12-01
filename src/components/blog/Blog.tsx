import { FC } from 'react';
import { PrismicBlogPost } from '../../interfaces/prismic';
import { Layout } from './Blog.styles';
import BlogCardWrapper from './blogCardWrapper/blogCardWrapper';
import BlogHeader from './blogHeader/BlogHeader';

interface BlogProps {
  posts: PrismicBlogPost[];
}

const Blog: FC<BlogProps> = ({ posts }) => (
  <Layout>
    <BlogHeader />
    <BlogCardWrapper posts={posts} />
  </Layout>
);

export default Blog;
