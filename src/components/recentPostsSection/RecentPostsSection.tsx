import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Button, { ButtonTypes, ComponentAppearance } from '../button/Button';
import {
  Layout,
  Title,
  Subtitle,
  ButtonWrapper
} from './RecentPostsSection.styles';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import Link from 'next/link';
import { PrismicBlogPost } from '../../interfaces/prismic';
import BlogCardWrapper from '../blog/blogCardWrapper/BlogCardWrapper';
import Checkbox from '../checkbox/Checkbox';

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
