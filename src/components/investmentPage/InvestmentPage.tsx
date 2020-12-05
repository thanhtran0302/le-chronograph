import React, { FC, Fragment } from 'react';
import { ComponentAppearance } from '../button/Button';
import NewsletterContent from '../newsletterContent/NewsletterContent';
import GraphSection from './graphSection/GraphSection';
import HeaderSection from './headerSection/HeaderSection';
import WatchPerformanceSection from './watchPerformanceSection/WatchPerformanceSection';
import { NewsletterLayout, NewsletterWrapper } from './Investment.styles';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import EnjoySection from './enjoySection/EnjoySection';

const InvestmentPage: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Fragment>
      <HeaderSection />
      <GraphSection />
      <WatchPerformanceSection />
      <NewsletterLayout>
        <h1>{t('signUpToOurNewsletter')}</h1>
        <NewsletterWrapper>
          <NewsletterContent
            appearance={ComponentAppearance.SECONDARY}
            hasSubtitle
          />
        </NewsletterWrapper>
      </NewsletterLayout>
      <EnjoySection />
    </Fragment>
  );
};

export default InvestmentPage;
