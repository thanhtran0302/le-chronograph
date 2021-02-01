import React, { FC } from 'react';
import { ComponentAppearance } from '../../button/Button';
import NewsletterContent from '../../newsletterContent/NewsletterContent';
import StockCard from '../../stockCard/StockCard';
import { Layout } from './PricesContent.styles';

const PricesContent: FC = () => (
  <Layout>
    <StockCard
      brand={'Rolex'}
      nickname={'Daytona'}
      variationRate={20}
      isGrow={true}
    />
    <StockCard
      brand={'Rolex'}
      nickname={'Submariner Date'}
      variationRate={15}
      isGrow={true}
    />
    <StockCard
      brand={'Rolex'}
      nickname={'Sky-Dweller'}
      isGrow={true}
      variationRate={100}
    />
    <StockCard
      brand={'Patek Philippe'}
      nickname={'Nautilus'}
      variationRate={50}
      isGrow={true}
    />
    <StockCard
      brand={'Audemars Piguet'}
      nickname={'Royal Oak'}
      variationRate={7}
      isGrow={false}
    />
    <StockCard
      brand={'Le Chronograph'}
      nickname={'Newsletter'}
      variationRate={0}
      isGrow={false}
    >
      <NewsletterContent
        appearance={ComponentAppearance.SECONDARY}
        hasSubtitle
      />
    </StockCard>
  </Layout>
);

export default PricesContent;
