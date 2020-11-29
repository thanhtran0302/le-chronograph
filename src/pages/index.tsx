import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { FC } from 'react';

const Home: FC = () => <div>hello</div>;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => ({ props: {} });

export default Home;
