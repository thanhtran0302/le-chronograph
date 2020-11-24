import React, { FC } from 'react';
import { PrismicBlogPost } from '../../interfaces/prismic';
import Card from '../card/Card';
import { Layout, NoPosts } from './CardWrapper.styles';
import { Document } from 'prismic-javascript/types/documents';
import { RichText } from 'prismic-reactjs';
import { useTranslation, UseTranslationResponse } from 'react-i18next';

interface CardWrapperProps {
  posts: Document[];
}

export enum DeviceResolution {
  DESKTOP,
  TABLET,
  SMARTPHONE
}

const CardWrapper: FC<CardWrapperProps> = ({ posts }) => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Layout hasPosts={!!posts.length}>
      {posts.length ? (
        posts.map((post: Document, key: number) => {
          const { data }: Document = post;
          const {
            title,
            preview,
            cover_image,
            slug,
            author,
            creation_date
          } = data as PrismicBlogPost;

          return (
            <Card
              title={RichText.asText(title)}
              previewText={preview}
              image={cover_image.url}
              imageAlt={cover_image.alt}
              author={author.data.name}
              date={creation_date}
              slug={slug}
              key={key}
            />
          );
        })
      ) : (
        <NoPosts>{t('noPosts')}</NoPosts>
      )}
    </Layout>
  );
};

export default CardWrapper;
