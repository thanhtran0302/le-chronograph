import React, { FC } from 'react';
import PricesContent from './pricesContent/PricesContent';
import { Layout } from './PricesPage.styles';
import Sidebar from './sidebar/Sidebar';

const PricesPage: FC = () => (
  <Layout>
    <Sidebar />
    <PricesContent />
  </Layout>
);

export default PricesPage;
