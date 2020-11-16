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
            post_title,
            post_preview,
            post_main_image,
            post_slug,
            author,
            creation_date
          } = data as PrismicBlogPost;

          return (
            <Card
              title={RichText.asText(post_title)}
              previewText={post_preview}
              image={post_main_image.url}
              author={RichText.asText(author.data.name)}
              date={creation_date}
              slug={post_slug}
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
