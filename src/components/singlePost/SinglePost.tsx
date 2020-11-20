import React, { FC, Fragment } from 'react';
import {
  BackArrowContainer,
  Layout,
  NewsletterContainer,
  PostAuthor,
  PostAuthorAndDateContainer,
  PostContent,
  PostCoverImage,
  PostCoverImageContainer,
  PostCreationDate,
  PostTitle
} from './SinglePost.styles';
import BackArrow from '../../assets/icons/back_arrow.svg';
import { RichText } from 'prismic-reactjs';
import Router from 'next/router';
import { PrismicBlogPost } from '../../interfaces/prismic';
import NewsletterModalContent from '../newsletterModalContent/NewsletterModalContent';
import Head from 'next/head';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useMobileDevice } from '../../constants/responsive';

interface SinglePostProps {
  post: PrismicBlogPost;
}

const SinglePost: FC<SinglePostProps> = ({ post }) => {
  const isMobile: boolean = useMobileDevice();
  const content = RichText.render(post.content);
  const title: string = RichText.asText(post.title);
  const author: string = post.author.data.name;
  const creationDate: string = format(
    new Date(post.creation_date),
    'dd LLLL yyyy',
    { locale: fr }
  );
  const { url, alt } = post.cover_image;

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={post.preview} />
      </Head>
      <Layout isMobile={isMobile}>
        <BackArrowContainer onClick={() => Router.back()}>
          <BackArrow />
        </BackArrowContainer>
        <PostTitle>{title}</PostTitle>
        <PostAuthorAndDateContainer>
          <PostAuthor>{author}</PostAuthor>
          <PostCreationDate>, {creationDate}</PostCreationDate>
        </PostAuthorAndDateContainer>
        <PostCoverImageContainer>
          <PostCoverImage src={url} alt={alt} />
        </PostCoverImageContainer>
        <PostContent>{content}</PostContent>
        <NewsletterContainer>
          <NewsletterModalContent />
        </NewsletterContainer>
      </Layout>
    </Fragment>
  );
};

export default SinglePost;
