import React, { FC, Fragment } from 'react';
import { PrismicBlogPost } from '../../interfaces/prismic';
import RecentPostsSection from './recentPostsSection/RecentPostsSection';
import InvestmentPage from '../investmentPage/InvestmentPage';

interface HomePageProps {
  posts: PrismicBlogPost[];
}

const HomePage: FC<HomePageProps> = ({ posts }) => (
  <Fragment>
    <InvestmentPage />
    <RecentPostsSection posts={posts} />
  </Fragment>
);

export default HomePage;
