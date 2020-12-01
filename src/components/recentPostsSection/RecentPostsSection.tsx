import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Button, { ButtonTypes, ComponentAppearance } from '../button/Button';
import PostCard from '../postCard/PostCard';
import {
  Layout,
  Title,
  Subtitle,
  RecentPosts,
  ButtonWrapper
} from './RecentPostsSection.styles';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import RolexSubmariner from '../../assets/images/rolex-submariner.png';
import Link from 'next/link';
import { PrismicBlogPost } from '../../interfaces/prismic';
import BlogCardWrapper from '../blog/blogCardWrapper/BlogCardWrapper';

interface RecentPostsSectionProps {
  posts: PrismicBlogPost[];
}

const RecentPostsSection: FC<RecentPostsSectionProps> = ({ posts }) => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Layout>
      <Title>{t('recentPosts')}</Title>
      <Subtitle dangerouslySetInnerHTML={{ __html: t('recentPostSubtitle') }} />
      <Link href={'/blog'}>
        <ButtonWrapper>
          <Button
            appearance={ComponentAppearance.PRIMARY}
            label={t('readMore')}
            type={ButtonTypes.BUTTON}
            icon={<ArrowRight />}
          />
        </ButtonWrapper>
      </Link>
      <BlogCardWrapper appearance={ComponentAppearance.PRIMARY} posts={posts} />
    </Layout>
  );
};

export default RecentPostsSection;
