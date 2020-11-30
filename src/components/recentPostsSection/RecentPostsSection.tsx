import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { Layout, Title, Subtitle } from './RecentPostsSection.styles';

const RecentPostsSection: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Layout>
      <Title>{t('recentPosts')}</Title>
      <Subtitle dangerouslySetInnerHTML={{ __html: t('recentPostSubtitle') }} />
      <div/>
    </Layout>
  );
};

export default RecentPostsSection;
