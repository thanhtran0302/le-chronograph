import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import PricesContent from './pricesContent/PricesContent';
import {
  Layout,
  Content,
  WordingContainer,
  TitleContainer,
  DateContainer,
  RedSpan
} from './PricesPage.styles';
import Sidebar from './sidebar/Sidebar';

const PricesPage: FC = () => {
  const { t }: UseTranslationResponse<string> = useTranslation();

  return (
    <Layout>
      <Sidebar />
      <Content>
        <WordingContainer>
          <TitleContainer>
            <RedSpan>One Wave</RedSpan> - {t('weeklyAnalysis')}
          </TitleContainer>
          <DateContainer>28/01/2021</DateContainer>
        </WordingContainer>
        <PricesContent />
      </Content>
    </Layout>
  );
};

export default PricesPage;
