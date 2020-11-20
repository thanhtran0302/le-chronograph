import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Document } from 'prismic-javascript/types/documents';
import React, { FC } from 'react';
import { PrismicClient } from '../../../utils/prismic';
import Prismic from 'prismic-javascript';
import { PrimsicTypes, PrismicBlogPost } from '../../../interfaces/prismic';
import SinglePost from '../../../components/singlePost/SinglePost';

interface SlugProps {
  post: PrismicBlogPost;
}

const SinglePostPage: FC<SlugProps> = ({ post }) => <SinglePost post={post} />;

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
