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
import SimpleHeader from '../simpleHeader/SimpleHeader';
import BlogPagination from './blogPagination/BlogPagination';
import { BlogLabel, BlogName } from '../../constants/common';
import { useTranslation, UseTranslationResponse } from 'react-i18next';

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
  const { t }: UseTranslationResponse<string> = useTranslation();

  return (
    <Layout>
      <SimpleHeader
        title={`${BlogName} ${BlogLabel}`}
        subtitle={t('recentPostSubtitle')}
        link={'/blog'}
      />
      <BlogPostsContainer>
        <BlogCategories categories={categories} />
        <BlogContentWrapper>
          <BlogCardWrapper
            appearance={ComponentAppearance.SECONDARY}
            posts={posts}
          />
        </BlogContentWrapper>
        {totalPages !== 1 && (
          <BlogPagination
            totalPages={totalPages}
            totalResultsSize={totalResultsSize}
          />
        )}
      </BlogPostsContainer>
    </Layout>
  );
};

export default Blog;
