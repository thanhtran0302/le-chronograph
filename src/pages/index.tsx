import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { FC, Fragment } from 'react';
import CardWrapper from '../components/cardWrapper/CardWrapper';
import CatchPhrase from '../components/catchPhrase/CatchPhrase';
import Categories from '../components/categories/Categories';
import { PrismicClient } from '../utils/prismic';
import Prismic from 'prismic-javascript';
import {
  PrimsicTypes,
  PrismicDocument,
  PrismicResponse
} from '../interfaces/prismic';

interface HomeProps {
  documents: PrismicDocument[];
}

const Home: FC<HomeProps> = ({ documents }) =>
  (
    <Fragment>
      <CatchPhrase />
      <Categories />
      <CardWrapper documents={documents} />
    </Fragment>
  );

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    const { req }: GetServerSidePropsContext = ctx;
    const response: PrismicResponse = await PrismicClient(req).query(
      Prismic.Predicates.at('document.type', PrimsicTypes.BLOG_POSTS),
      {
        fetchLinks: ['authors.name', 'categories.category']
      }
    );

    return {
      props: {
        documents: response.results
      }
    };
  } catch {
    return {
      props: {
        documents: []
      }
    };
  }
};

export default Home;
