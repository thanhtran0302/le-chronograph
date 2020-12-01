import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { Layout, CategoriesContainer, Category } from './BlogCategories.styles';

const BlogCategories: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Layout>
      <CategoriesContainer>
        <Category>{t('all')}</Category>
        <Category>{t('investment')}</Category>
        <Category>{t('marketing')}</Category>
        <Category>{t('history')}</Category>
      </CategoriesContainer>
    </Layout>
  );
};

export default BlogCategories;
