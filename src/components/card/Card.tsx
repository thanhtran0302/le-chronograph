import Link from 'next/link';
import React, { FC } from 'react';
import {
  Layout,
  Image,
  CardPostMetaData,
  CardTitle,
  CardPostPreview,
  CardPostCredit,
  CardPostAuthor,
  CardPostDate
} from './Card.styles';

interface CardProps {
  title: string;
  previewText: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  slug: string;
}

const Card: FC<CardProps> = ({
  title,
  previewText,
  image,
  imageAlt,
  author,
  date,
  slug
}) => (
  <Link href={`/blog/articles/${slug}`}>
    <Layout>
      <Image src={image} alt={imageAlt} />
      <CardPostMetaData>
        <CardTitle>{title}</CardTitle>
        <CardPostPreview>{previewText}</CardPostPreview>
        <CardPostCredit>
          <CardPostAuthor>{author}</CardPostAuthor>
          <CardPostDate>, {date}</CardPostDate>
        </CardPostCredit>
      </CardPostMetaData>
    </Layout>
  </Link>
);

export default Card;
