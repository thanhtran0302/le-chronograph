import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { FC, Fragment } from 'react';
import Prismic from 'prismic-javascript';
import HeaderSection from '../components/headerSection/HeaderSection';
import HistorySection from '../components/historySection/HistorySection';
import InvestmentSection from '../components/investmentSection/InvestmentSection';
import MarketingSection from '../components/marketingSection/MarketingSection';
import RecentPostsSection from '../components/recentPostsSection/RecentPostsSection';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';
import { PrimsicTypes, PrismicBlogPost } from '../interfaces/prismic';
import { PrismicClient } from '../utils/prismic';

interface HomeProps {
  posts: PrismicBlogPost[];
}

const Home: FC<HomeProps> = ({ posts }) => (
  <Fragment>
    <HeaderSection />
    <InvestmentSection />
    <MarketingSection />
    <HistorySection />
    <RecentPostsSection posts={posts} />
  </Fragment>
);

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
        orderings: ['[document.last_publication_date desc]'],
        pageSize: 4
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
        posts: [],
        categories: []
      }
    };
  }
};

export default Home;
