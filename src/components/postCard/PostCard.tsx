import Link from 'next/link';
import React, { FC } from 'react';
import breakpoints from '../../constants/breakpoints';
import { useMediaQuery } from '../../constants/responsive';
import { ComponentAppearance } from '../button/Button';
import {
  Author,
  Image,
  ImageContainer,
  Layout,
  MetaDataContainer,
  PublishDate,
  Title
} from './PostCard.styles';

export interface PostCardProps {
  appearance: ComponentAppearance;
  title: string;
  image: string;
  author: string;
  date: string;
  slug: string;
}

const PostCard: FC<PostCardProps> = ({
  appearance,
  title,
  image,
  author,
  date,
  slug
}) => {
  const isMobile: boolean = useMediaQuery(
    `(max-width: ${breakpoints.tablet.iPadPro11})`
  );
  return (
    <Link href={`/blog/articles/${slug}`}>
      <Layout appearance={appearance}>
        {!isMobile && (
          <ImageContainer>
            <Image src={image} />
          </ImageContainer>
        )}
        <Title>{title}</Title>
        <MetaDataContainer>
          <Author>{author}</Author>
          <PublishDate>{date}</PublishDate>
        </MetaDataContainer>
      </Layout>
    </Link>
  );
};

export default PostCard;
