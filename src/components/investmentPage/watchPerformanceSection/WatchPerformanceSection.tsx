import React, { FC } from 'react';
import Section from '../../section/Section';
import { Layout, ItemWrapper, Message } from './WatchPerformanceSection.styles';
import InvestmentGrow from '../../../assets/images/investment-grow.png';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Money from '../../../assets/icons/money.svg';
import Heritage from '../../../assets/icons/heritage.svg';
import StockGrow from '../../../assets/icons/stock-grow.svg';
import Paper from '../../../assets/icons/paper.svg';

const WatchPerformanceSection: FC = () => {
  const { t }: UseTranslationResponse<string> = useTranslation();

  return (
    <Section
      backgroundColor={'dark'}
      backgroundPosition={'right'}
      image={InvestmentGrow}
      title={t('whyWatchesPerform')}
    >
      <Layout>
        <ItemWrapper>
          <Money />
          <Message>{t('internationalExchange')}</Message>
        </ItemWrapper>
        <ItemWrapper>
          <StockGrow />
          <Message>{t('beatInflation')}</Message>
        </ItemWrapper>
        <ItemWrapper>
          <Heritage />
          <Message>{t('sameHeritageAsRealEstate')}</Message>
        </ItemWrapper>
        <ItemWrapper>
          <Paper />
          <Message>{t('noPaper')}</Message>
        </ItemWrapper>
      </Layout>
    </Section>
  );
};

export default WatchPerformanceSection;
