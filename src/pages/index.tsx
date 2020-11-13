import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { FC, Fragment } from 'react';
import CardWrapper from '../components/cardWrapper/CardWrapper';
import CatchPhrase from '../components/catchPhrase/CatchPhrase';
import Categories from '../components/categories/Categories';
import { PrismicClient } from '../utils/prismic';
import Prismic from 'prismic-javascript';
import { PrimsicTypes, PrismicDocument } from '../interfaces/prismic';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';
import { Document } from 'prismic-javascript/types/documents';

interface HomeProps {
  posts: PrismicDocument[];
  categories: PrismicDocument[];
}

const Home: FC<HomeProps> = ({ posts, categories }) => (
  <Fragment>
    <CatchPhrase />
    <Categories categories={categories} />
    <CardWrapper posts={posts} />
  </Fragment>
);

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
      (docCategory: Document) => docCategory.data.category === queryCategory
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
        fetchLinks: ['authors.name', 'categories.category']
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
