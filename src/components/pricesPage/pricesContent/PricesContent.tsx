import React, { FC } from 'react';
import { ComponentAppearance } from '../../button/Button';
import NewsletterContent from '../../newsletterContent/NewsletterContent';
import StockCard from '../../stockCard/StockCard';
import { Layout } from './PricesContent.styles';
import Rolex from '../../../assets/icons/rolex.svg';
import PatekPhilippe from '../../../assets/icons/patek-philippe.svg';
import LeChronograph from '../../../assets/icons/lechronograph-logo.svg';
import AudemarsPiguet from '../../../assets/icons/audemars-piguet.svg';

const PricesContent: FC = () => (
  <Layout>
    <StockCard
      brand={'Rolex'}
      nickname={'Daytona'}
      logo={Rolex}
      variationRate={20}
      isGrow={true}
    />
    <StockCard
      brand={'Rolex'}
      nickname={'Submariner Date'}
      logo={Rolex}
      variationRate={15}
      isGrow={true}
    />
    <StockCard
      brand={'Rolex'}
      nickname={'Sky-Dweller'}
      logo={Rolex}
      isGrow={true}
      variationRate={100}
    />
    <StockCard
      brand={'Patek Philippe'}
      nickname={'Nautilus'}
      logo={PatekPhilippe}
      variationRate={50}
      isGrow={true}
    />
    <StockCard
      brand={'Audemars Piguet'}
      nickname={'Royal Oak'}
      logo={AudemarsPiguet}
      variationRate={7}
      isGrow={false}
    />
    <StockCard
      brand={'Le Chronograph'}
      nickname={'Newsletter'}
      logo={LeChronograph}
      variationRate={0}
      isGrow={false}
    >
      <NewsletterContent
        appearance={ComponentAppearance.SECONDARY}
        buttonAppearance={ComponentAppearance.PRIMARY}
        hasSubtitle
      />
    </StockCard>
  </Layout>
);

export default PricesContent;
