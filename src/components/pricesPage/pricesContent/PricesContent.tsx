import React, { FC } from 'react';
import StockCard from '../../stockCard/StockCard';
import { Layout } from './PricesContent.styles';

const PricesContent: FC = () => (
  <Layout>
    <StockCard brand={'Rolex'} nickname={'Daytona'} />
    <StockCard brand={'Rolex'} nickname={'Submariner'} />
    <StockCard brand={'Rolex'} nickname={'Submariner Date'} />
    <StockCard brand={'Rolex'} nickname={'Sky-Dweller'} />
    <StockCard brand={'Patek Philippe'} nickname={'Nautilus'} />
    <StockCard brand={'Audemars Piguet'} nickname={'Royal Oak'} />
  </Layout>
);

export default PricesContent;
