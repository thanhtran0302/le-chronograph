import { NextRouter, useRouter } from 'next/router';
import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { Layout, CategoryItem } from './Categories.styles';

enum CategoriesEnum {
  ALL = 'all',
  BRANDING = 'branding',
  MARKETING = 'marketing',
  ROLEX = 'rolex',
  TUDOR = 'tudor'
}

const Categories: FC = () => {
  const { query }: NextRouter = useRouter();
  const { t }: UseTranslationResponse = useTranslation();
  const selectedCategory: string =
    (query.category as string) || CategoriesEnum.ALL;

  return (
    <Layout>
      <Link href={`/?category=${CategoriesEnum.ALL}`}>
        <CategoryItem isSelected={selectedCategory === CategoriesEnum.ALL}>
          {t(CategoriesEnum.ALL)}
        </CategoryItem>
      </Link>
      <Link href={`/?category=${CategoriesEnum.BRANDING}`}>
        <CategoryItem isSelected={selectedCategory === CategoriesEnum.BRANDING}>
          {t(CategoriesEnum.BRANDING)}
        </CategoryItem>
      </Link>
      <Link href={`/?category=${CategoriesEnum.MARKETING}`}>
        <CategoryItem
          isSelected={selectedCategory === CategoriesEnum.MARKETING}
        >
          {t(CategoriesEnum.MARKETING)}
        </CategoryItem>
      </Link>
      <Link href={`/?category=${CategoriesEnum.ROLEX}`}>
        <CategoryItem isSelected={selectedCategory === CategoriesEnum.ROLEX}>
          {t(CategoriesEnum.ROLEX)}
        </CategoryItem>
      </Link>
      <Link href={`/?category=${CategoriesEnum.TUDOR}`}>
        <CategoryItem isSelected={selectedCategory === CategoriesEnum.TUDOR}>
          {t(CategoriesEnum.TUDOR)}
        </CategoryItem>
      </Link>
    </Layout>
  );
};

export default Categories;
