import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { useMobileDevice } from '../../../constants/responsive';
import { PrismicBlogPostCategory } from '../../../interfaces/prismic';
import { Layout, Category } from './BlogCategories.styles';

interface BlogCategoriesProps {
  categories: PrismicBlogPostCategory[];
}

enum CategoriesEnum {
  ALL = 'all',
  MARKETING = 'Marketing',
  INVESTISSEMENT = 'Investissement'
}

const BlogCategories: FC<BlogCategoriesProps> = ({ categories }) => {
  const { query }: NextRouter = useRouter();
  const { t }: UseTranslationResponse = useTranslation();
  const isMobile: boolean = useMobileDevice();
  const selectedCategory: string =
    (query.category as string) || CategoriesEnum.ALL;

  return (
    <Layout>
      <Link href={`/blog/?category=${CategoriesEnum.ALL}`}>
        <Category
          isSelected={selectedCategory === CategoriesEnum.ALL}
          isMobile={isMobile}
        >
          {t(CategoriesEnum.ALL)}
        </Category>
      </Link>
      {categories.map((category: PrismicBlogPostCategory, key: number) => (
        <Link
          key={`category-${key}`}
          href={`/blog/?category=${category.data.name}`}
        >
          <Category
            isSelected={selectedCategory === category.data.name}
            isMobile={isMobile}
          >
            {category.data.name}
          </Category>
        </Link>
      ))}
    </Layout>
  );
};

export default BlogCategories;
