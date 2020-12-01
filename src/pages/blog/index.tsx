import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { FC, Fragment, useEffect } from 'react';
import { PrismicClient } from '../../utils/prismic';
import Prismic from 'prismic-javascript';
import { PrimsicTypes, PrismicBlogPost } from '../../interfaces/prismic';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';
import { Document } from 'prismic-javascript/types/documents';
import { useRouter } from 'next/router';
import * as gtag from '../../utils/ga';
import Blog from '../../components/blog/Blog';

interface HomeProps {
  posts: PrismicBlogPost[];
  categories: Document[];
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

  console.log(posts);
  return (
    <Fragment>
      <Blog posts={posts} />
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
        fetchLinks: ['authors.name', 'categories.name']
      }
    );
    const postsResults = response.results.map(
      (result: Document) => result.data
    );
    const categoriesResults = responseCategories.results.map(
      (result: Document) => result.data
    );

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
