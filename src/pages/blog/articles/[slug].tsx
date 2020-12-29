import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Document } from 'prismic-javascript/types/documents';
import React, { FC, Fragment, useEffect } from 'react';
import { PrismicClient } from '../../../utils/prismic';
import Prismic from 'prismic-javascript';
import { PrimsicTypes, PrismicBlogPost } from '../../../interfaces/prismic';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-reactjs';
import * as gtag from '../../../utils/ga';
import SingleBlogPost from '../../../components/singleBlogPost/SingleBlogPost';

interface SlugProps {
  post: PrismicBlogPost;
}

const SinglePostPage: FC<SlugProps> = ({ post }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
      gtag.event({
        action: 'SINGLE_POST_VISITING',
        category: 'VISIT',
        label: RichText.asText(post.title),
        value: 1
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <Fragment>
      <SingleBlogPost post={post} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const { req, query } = ctx;
  const { slug } = query;

  try {
    const postResponse: Document = await PrismicClient(req).queryFirst(
      Prismic.Predicates.at(`my.${PrimsicTypes.BLOG_POSTS}.slug`, slug),
      {
        fetchLinks: ['authors.name', 'categories.name']
      }
    );

    return {
      props: {
        post: postResponse.data as PrismicBlogPost
      }
    };
  } catch (error) {
    return { props: { post: {} } };
  }
};

export default SinglePostPage;
