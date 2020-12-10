import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { BlogName, BlogLabel } from '../../../constants/common';
import { Layout, Title, Subtitle } from './BlogHeader.styles';

const BlogHeader: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Layout>
      <Link href={'/blog'}>
        <Title>
          {BlogName} {BlogLabel}
        </Title>
      </Link>
      <Subtitle dangerouslySetInnerHTML={{ __html: t('recentPostSubtitle') }} />
    </Layout>
  );
};

export default BlogHeader;
