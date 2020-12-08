import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { FC, Fragment, useEffect } from 'react';
import { PrismicClient } from '../../utils/prismic';
import Prismic from 'prismic-javascript';
import {
  PrimsicTypes,
  PrismicBlogPost,
  PrismicBlogPostCategory
} from '../../interfaces/prismic';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';
import { Document } from 'prismic-javascript/types/documents';
import { useRouter } from 'next/router';
import * as gtag from '../../utils/ga';
import Blog from '../../components/blog/Blog';
import Head from 'next/head';
import { BlogLabel, BlogName } from '../../constants/common';

interface HomeProps {
  posts: PrismicBlogPost[];
  categories: PrismicBlogPostCategory[];
}

const Home: FC<HomeProps> = ({ posts, categories }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
      gtag.event({
        action: 'INDEX_VISITING',
        category: 'VISIT',
        label: 'BLOG_HOMEPAGE',
        value: 1
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <Fragment>
      <Head>
        <title>{`${BlogName} ${BlogLabel}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Blog posts={posts} categories={categories} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    const { req, query }: GetServerSidePropsContext = ctx;
    const queryCategory: string = (query.category as string) || 'all';
    const prismicQuery: string[] = [
      Prismic.Predicates.at('document.type', PrimsicTypes.BLOG_POSTS)
    ];
    const responseCategories: ApiSearchResponse = await PrismicClient(
      req
    ).query(Prismic.Predicates.at('document.type', PrimsicTypes.CATEGORIES));
    const [category] = responseCategories.results.filter(
      (docCategory: Document) => docCategory.data.name === queryCategory
    );

    if (category) {
      prismicQuery.push(
        Prismic.Predicates.at(
          `my.${PrimsicTypes.BLOG_POSTS}.category`,
          category.id
        )
      );
    }
    const response: ApiSearchResponse = await PrismicClient(req).query(
      prismicQuery,
      {
        fetchLinks: ['authors.name', 'categories.name'],
        orderings: ['[document.last_publication_date desc]']
      }
    );
    const postsResults = response.results.map(
      (result: Document) => result.data
    );
    const categoriesResults = (responseCategories.results.map(
      (result: Document) => result
    ) as unknown) as PrismicBlogPostCategory[];

    return {
      props: {
        posts: postsResults,
        categories: categoriesResults
      }
    };
  } catch {
    return {
      props: {
        posts: [],
        categories: []
      }
    };
  }
};

export default Home;
