import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { FC, Fragment } from 'react';
import HeaderSection from '../components/headerSection/HeaderSection';
import HistorySection from '../components/historySection/HistorySection';
import InvestmentSection from '../components/investmentSection/InvestmentSection';
import MarketingSection from '../components/marketingSection/MarketingSection';

const Home: FC = () => (
  <Fragment>
    <HeaderSection />
    <HistorySection />
    <MarketingSection />
    <InvestmentSection />
  </Fragment>
);

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => ({ props: {} });

export default Home;
