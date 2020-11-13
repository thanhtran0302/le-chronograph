import React, { FC } from 'react';
import { PrismicBlogPost, PrismicDocument } from '../../interfaces/prismic';
import { getTextInPrismicArray } from '../../utils/global';
import Card from '../card/Card';
import { Layout } from './CardWrapper.styles';

interface CardWrapperProps {
  posts: PrismicDocument[];
}

const CardWrapper: FC<CardWrapperProps> = ({ posts }) => (
  <Layout>
    {posts.map((post: PrismicDocument, key: number) => {
      const { data }: PrismicDocument = post;
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
          title={getTextInPrismicArray(post_title)}
          previewText={post_preview}
          image={post_main_image.url}
          author={getTextInPrismicArray(author.data.name)}
          date={creation_date}
          slug={post_slug}
          key={key}
        />
      );
    })}
  </Layout>
);

export default CardWrapper;
