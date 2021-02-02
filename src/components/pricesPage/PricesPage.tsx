import React, { FC, Fragment } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import PricesContent from './pricesContent/PricesContent';
import {
  WordingContainer,
  TitleContainer,
  DateContainer,
  RedSpan
} from './PricesPage.styles';

const PricesPage: FC = () => {
  const { t }: UseTranslationResponse<string> = useTranslation();

  return (
    <Fragment>
      <WordingContainer>
        <TitleContainer>
          <RedSpan>One Wave</RedSpan> - {t('weeklyAnalysis')}
        </TitleContainer>
        <DateContainer>28/01/2021</DateContainer>
      </WordingContainer>
      <PricesContent />
    </Fragment>
  );
};

export default PricesPage;
