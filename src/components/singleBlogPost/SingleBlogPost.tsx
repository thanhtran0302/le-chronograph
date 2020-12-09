import { RichText } from 'prismic-reactjs';
import React, { FC, Fragment, useEffect } from 'react';
import { PrismicBlogPost } from '../../interfaces/prismic';
import {
  Image,
  ImageContainer,
  Layout,
  PostAuthor,
  PostContainer,
  PostContent,
  PostContentWrapper,
  PostMetaData,
  PostNewsletter,
  PostNewsletterContent,
  PostPublishDate,
  PostTitle
} from './SingleBlogPost.styles';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import NewsletterContent from '../newsletterContent/NewsletterContent';
import { ComponentAppearance } from '../button/Button';
import Head from 'next/head';
import { Title } from '../footer/Footer.styles';
import { useTranslation, UseTranslationResponse } from 'react-i18next';

export interface SingleBlogPostProps {
  post: PrismicBlogPost;
}

const SingleBlogPost: FC<SingleBlogPostProps> = ({ post }) => {
  const { t }: UseTranslationResponse = useTranslation();
  const { cover_image, title, author, creation_date, content, preview } = post;
  const formatTitle: string = RichText.asText(title);
  const creationDate: string = format(new Date(creation_date), 'dd LLLL yyyy', {
    locale: fr
  });

  console.log(preview);
  return (
    <Fragment>
      <Head>
        <title>{formatTitle}</title>
        <meta name="description" content={preview} />
      </Head>
      <Layout>
        <ImageContainer>
          <Image alt={cover_image.alt} src={cover_image.url} />
        </ImageContainer>
        <PostContainer>
          <PostTitle>{formatTitle}</PostTitle>
          <PostMetaData>
            <PostAuthor>{author.data.name}</PostAuthor>
            <PostPublishDate>{`, ${creationDate}`}</PostPublishDate>
          </PostMetaData>
          <PostContentWrapper>
            <PostContent>{RichText.render(content)}</PostContent>
            <PostNewsletter>
              <PostNewsletterContent>
                <Title>{t('signUpToOurNewsletter')}</Title>
                <NewsletterContent
                  appearance={ComponentAppearance.SECONDARY}
                  hasSubtitle
                />
              </PostNewsletterContent>
            </PostNewsletter>
          </PostContentWrapper>
        </PostContainer>
      </Layout>
    </Fragment>
  );
};

export default SingleBlogPost;
