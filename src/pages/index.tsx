import React, { FC, Fragment } from 'react';
import CardWrapper from '../components/cardWrapper/CardWrapper';
import CatchPhrase from '../components/catchPhrase/CatchPhrase';
import Categories from '../components/categories/Categories';

const Home: FC = () => (
  <Fragment>
    <CatchPhrase />
    <Categories />
    <CardWrapper />
  </Fragment>
);

export default Home;
