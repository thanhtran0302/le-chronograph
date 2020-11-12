import React, { FC } from 'react';
import Card from '../card/Card';
import { Layout } from './CardWrapper.styles';

const CardWrapper: FC = () =>
  (
    <Layout>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Layout>
  );

export default CardWrapper;
