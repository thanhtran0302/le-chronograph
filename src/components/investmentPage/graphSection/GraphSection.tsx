import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { Layout, Title, Paragraph } from './GraphSection.styles';
import InvestmentGraph from '../../../assets/icons/investment-graph.svg';

const GraphSection: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Layout>
      <Title>{t('constantYield')}</Title>
      <InvestmentGraph />
      <Paragraph dangerouslySetInnerHTML={{ __html: t('rolexVsCac40') }} />
    </Layout>
  );
};

export default GraphSection;
