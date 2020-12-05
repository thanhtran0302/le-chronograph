import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { Layout, Title, Paragraph } from './GraphSection.styles';
import InvestmentGraph from '../../../assets/icons/investment-graph.svg';
import InvestmentGraphMobile from '../../../assets/icons/investment-graph-mobile.svg';
import { useSmartphoneDevice } from '../../../constants/responsive';

const GraphSection: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();
  const isMobile: boolean = useSmartphoneDevice();

  return (
    <Layout>
      <Title>{t('constantYield')}</Title>
      {isMobile ? <InvestmentGraphMobile /> : <InvestmentGraph />}
      <Paragraph dangerouslySetInnerHTML={{ __html: t('rolexVsCac40') }} />
    </Layout>
  );
};

export default GraphSection;
