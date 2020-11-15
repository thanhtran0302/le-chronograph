import React, { FC, Fragment } from 'react';
import {
  BackArrowContainer,
  Layout,
  NewsletterContainer,
  NewsletterTitle,
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

interface SinglePostProps {
  post: PrismicBlogPost;
}

const SinglePost: FC<SinglePostProps> = ({ post }) => {
  const content = RichText.render(post.post_content);
  const title: string = RichText.asText(post.post_title);
  const author: string = RichText.asText(post.author.data.name);
  const creationDate: string = post.creation_date;
  const coverImage: string = post.post_main_image.url;
  const coverImageAlt: string = post.post_main_image.alt;

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <BackArrowContainer onClick={() => Router.back()}>
          <BackArrow />
        </BackArrowContainer>
        <PostTitle>{title}</PostTitle>
        <PostAuthorAndDateContainer>
          <PostAuthor>{author}</PostAuthor>
          <PostCreationDate>, {creationDate}</PostCreationDate>
        </PostAuthorAndDateContainer>
        <PostCoverImageContainer>
          <PostCoverImage src={coverImage} alt={coverImageAlt} />
        </PostCoverImageContainer>
        <PostContent>{content}</PostContent>
        <NewsletterContainer>
          <NewsletterTitle>
            Recevez chaque semaine des astuces pour créer une marque qui inspire
            la confiance.
          </NewsletterTitle>
          <NewsletterModalContent />
        </NewsletterContainer>
      </Layout>
    </Fragment>
  );
};

export default SinglePost;
