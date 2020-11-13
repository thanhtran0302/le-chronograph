import { NextRouter, useRouter } from 'next/router';
import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { Layout, CategoryItem } from './Categories.styles';
import { PrismicDocument } from '../../interfaces/prismic';

enum CategoriesEnum {
  ALL = 'all',
  BRANDING = 'branding',
  MARKETING = 'marketing',
  ROLEX = 'rolex',
  TUDOR = 'tudor'
}

interface CategoriesProps {
  categories: PrismicDocument[];
}

const Categories: FC<CategoriesProps> = ({ categories }) => {
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
      {categories.map((category: PrismicDocument, key: number) => {
        const cat: string = category.data.category;

        return (
          <Link
            key={`category-${key}`}
            href={`/?category=${category.data.category}`}
          >
            <CategoryItem isSelected={selectedCategory === cat}>
              {cat}
            </CategoryItem>
          </Link>
        );
      })}
    </Layout>
  );
};

export default Categories;
