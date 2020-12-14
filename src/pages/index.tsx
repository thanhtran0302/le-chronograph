import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { FC } from 'react';
import Prismic from 'prismic-javascript';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';
import { PrimsicTypes, PrismicBlogPost } from '../interfaces/prismic';
import { PrismicClient } from '../utils/prismic';
import HomePage from '../components/homePage/HomePage';

interface HomeProps {
  posts: PrismicBlogPost[];
}

const Home: FC<HomeProps> = ({ posts }) => <HomePage posts={posts} />;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    const { req }: GetServerSidePropsContext = ctx;
    const prismicQuery: string[] = [
      Prismic.Predicates.at('document.type', PrimsicTypes.BLOG_POSTS)
    ];

    const response: ApiSearchResponse = await PrismicClient(req).query(
      prismicQuery,
      {
        fetchLinks: ['authors.name', 'categories.name'],
        orderings: [`[my.${PrimsicTypes.BLOG_POSTS}.creation_date desc]`],
        pageSize: 3
      }
    );
    const postsResults = response.results.map(
      result => result.data as PrismicBlogPost
    );

    return {
      props: {
        posts: postsResults
      }
    };
  } catch {
    return {
      props: {
        posts: []
      }
    };
  }
};

export default Home;
