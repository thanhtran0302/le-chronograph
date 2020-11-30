import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { FC, Fragment } from 'react';
import HeaderSection from '../components/headerSection/HeaderSection';
import HistorySection from '../components/historySection/HistorySection';

const Home: FC = () =>
  (
    <Fragment>
      <HeaderSection />
      <HistorySection />
    </Fragment>
  );

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => ({ props: {} });

export default Home;
