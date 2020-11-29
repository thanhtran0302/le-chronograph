import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { FC, Fragment, useEffect } from 'react';
import CardWrapper from '../../components/cardWrapper/CardWrapper';
import CatchPhrase from '../../components/catchPhrase/CatchPhrase';
import Categories from '../../components/categories/Categories';
import { PrismicClient } from '../../utils/prismic';
import Prismic from 'prismic-javascript';
import { PrimsicTypes } from '../../interfaces/prismic';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';
import { Document } from 'prismic-javascript/types/documents';
import { useRouter } from 'next/router';
import * as gtag from '../../utils/ga';

interface HomeProps {
  posts: Document[];
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

  return (
    <Fragment>
      <CatchPhrase />
      <Categories categories={categories} />
      <CardWrapper posts={posts} />
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

    return {
      props: {
        posts: response.results,
        categories: responseCategories.results
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
