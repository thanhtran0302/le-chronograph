import React, { FC, Fragment } from 'react';
import { PrismicBlogPost } from '../../interfaces/prismic';
import HeaderSection from './headerSection/HeaderSection';
import HistorySection from './historySection/HistorySection';
import InvestmentSection from './investmentSection/InvestmentSection';
import MarketingSection from './marketingSection/MarketingSection';
import RecentPostsSection from './recentPostsSection/RecentPostsSection';

interface HomePageProps {
  posts: PrismicBlogPost[];
}

const HomePage: FC<HomePageProps> = ({ posts }) => (
  <Fragment>
    <HeaderSection />
    <InvestmentSection />
    <MarketingSection />
    <HistorySection />
    <RecentPostsSection posts={posts} />
  </Fragment>
);

export default HomePage;
