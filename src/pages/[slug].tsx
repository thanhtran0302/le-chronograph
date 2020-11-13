import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { FC, Fragment } from 'react';

const SinglePost: FC = () =>
  <Fragment>single post here</Fragment>;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) =>
  ({ props: {} });

export default SinglePost;
