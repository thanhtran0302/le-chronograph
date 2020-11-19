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
import { Parallax } from 'react-parallax';
import { fr } from 'date-fns/locale';

interface SinglePostProps {
  post: PrismicBlogPost;
}

const SinglePost: FC<SinglePostProps> = ({ post }) => {
  const content = RichText.render(post.post_content);
  const title: string = RichText.asText(post.post_title);
  const author: string = RichText.asText(post.author.data.name);
  const creationDate: string = format(
    new Date(post.creation_date),
    'dd LLLL yyyy',
    { locale: fr }
  );
  const coverImage: string = post.post_main_image.url;
  const coverImageAlt: string = post.post_main_image.alt;

  console.log(post.post_main_image);

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={post.post_preview} />
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
          <Parallax
            bgImage={coverImage}
            bgImageAlt={coverImageAlt}
            strength={500}
            blur={1}
          >
            <PostCoverImage />
          </Parallax>
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
