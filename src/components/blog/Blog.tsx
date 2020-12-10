import { NextRouter, useRouter } from 'next/router';
import { FC } from 'react';
import {
  PrismicBlogPost,
  PrismicBlogPostCategory
} from '../../interfaces/prismic';
import { ComponentAppearance } from '../button/Button';
import { BlogContentWrapper, BlogPostsContainer, Layout } from './Blog.styles';
import BlogCardWrapper from './blogCardWrapper/BlogCardWrapper';
import BlogCategories from './blogCategories/BlogCategories';
import BlogHeader from './blogHeader/BlogHeader';
import BlogPagination from './blogPagination/BlogPagination';

interface BlogProps {
  posts: PrismicBlogPost[];
  categories: PrismicBlogPostCategory[];
  totalPages: number;
  totalResultsSize: number;
}

const Blog: FC<BlogProps> = ({
  posts,
  categories,
  totalPages,
  totalResultsSize
}) => {
  const { query }: NextRouter = useRouter();

  console.log(query);
  return (
    <Layout>
      <BlogHeader />
      <BlogPostsContainer>
        <BlogCategories categories={categories} />
        <BlogContentWrapper>
          <BlogCardWrapper
            appearance={ComponentAppearance.SECONDARY}
            posts={posts}
          />
        </BlogContentWrapper>
        <BlogPagination
          totalPages={totalPages}
          totalResultsSize={totalResultsSize}
        />
      </BlogPostsContainer>
    </Layout>
  );
};

export default Blog;
