import { RichText } from 'prismic-reactjs';
import React, { FC, Fragment, useEffect, useRef, useState } from 'react';
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
  PostSideContent,
  PostNewsletterContent,
  PostPublishDate,
  PostTitle,
  PostSidePodcast,
  ApplePodcastIframe
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
  const [postContentWidth, setPostContentWidth] = useState<number>(0);
  const postContentRef = useRef<HTMLDivElement | null>(null);
  const [sidePostContentWidth, setSidePostContentWidth] = useState<number>(0);
  const sidePostContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setPostContentWidth(postContentRef.current.offsetWidth);
    setSidePostContentWidth(sidePostContentRef.current.offsetWidth);
  }, []);

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
            <PostContent ref={postContentRef} contentWidth={postContentWidth}>
              {RichText.render(content)}
            </PostContent>

            <div ref={sidePostContentRef}>
              <PostSideContent>
                <PostNewsletterContent>
                  <Title>{t('signUpToOurNewsletter')}</Title>
                  <NewsletterContent
                    appearance={ComponentAppearance.SECONDARY}
                    hasSubtitle
                  />
                </PostNewsletterContent>
                <PostSidePodcast>
                  <Title>{t('listenOurLatestEpisode')}</Title>
                  <ApplePodcastIframe
                    contentWidth={sidePostContentWidth}
                    src="https://embed.podcasts.apple.com/us/podcast/le-chronograph/id1539187268?itsct=podcast_box&amp;itscg=30200&amp;theme=light"
                    frameBorder="0"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                    allow="autoplay *; encrypted-media *;"
                  />
                </PostSidePodcast>
              </PostSideContent>
            </div>
          </PostContentWrapper>
        </PostContainer>
      </Layout>
    </Fragment>
  );
};

export default SingleBlogPost;
