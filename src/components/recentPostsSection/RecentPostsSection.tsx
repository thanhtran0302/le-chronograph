import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { ComponentAppearance } from '../button/Button';
import PostCard from '../postCard/PostCard';
import {
  Layout,
  Title,
  Subtitle,
  RecentPosts
} from './RecentPostsSection.styles';
import RolexSubmariner from '../../assets/images/rolex-submariner.png';

const RecentPostsSection: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Layout>
      <Title>{t('recentPosts')}</Title>
      <Subtitle dangerouslySetInnerHTML={{ __html: t('recentPostSubtitle') }} />
      <RecentPosts>
        <PostCard
          appearance={ComponentAppearance.PRIMARY}
          title={'La Rolex Daytonay est-elle la montre la plus belle ?'}
          image={RolexSubmariner}
          author={'Thanh Tran'}
          date={', 20 Novembre 2020'}
        />
        <PostCard
          appearance={ComponentAppearance.PRIMARY}
          title={'La Rolex Daytonay est-elle la montre la plus belle ?'}
          image={RolexSubmariner}
          author={'Thanh Tran'}
          date={', 20 Novembre 2020'}
        />
        <PostCard
          appearance={ComponentAppearance.PRIMARY}
          title={'La Rolex Daytonay est-elle la montre la plus belle ?'}
          image={RolexSubmariner}
          author={'Thanh Tran'}
          date={', 20 Novembre 2020'}
        />
        <PostCard
          appearance={ComponentAppearance.PRIMARY}
          title={'La Rolex Daytonay est-elle la montre la plus belle ?'}
          image={RolexSubmariner}
          author={'Thanh Tran'}
          date={', 20 Novembre 2020'}
        />
      </RecentPosts>
    </Layout>
  );
};

export default RecentPostsSection;
