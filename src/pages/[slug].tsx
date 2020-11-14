import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Document } from 'prismic-javascript/types/documents';
import React, { FC, Fragment } from 'react';
import { PrismicClient } from '../utils/prismic';
import Prismic from 'prismic-javascript';
import { PrimsicTypes, PrismicBlogPost } from '../interfaces/prismic';
import SinglePost from '../components/singlePost/SinglePost';

interface SlugProps {
  post: PrismicBlogPost;
}

const Slug: FC<SlugProps> = ({ post }) => (
  <Fragment>
    <SinglePost post={post} />
  </Fragment>
);

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const { req, query } = ctx;
  const { slug } = query;
  const postResponse: Document = await PrismicClient(req).queryFirst(
    Prismic.Predicates.at(`my.${PrimsicTypes.BLOG_POSTS}.post_slug`, slug),
    {
      fetchLinks: ['authors.name', 'categories.category']
    }
  );

  return {
    props: {
      post: postResponse.data
    }
  };
};

export default Slug;
