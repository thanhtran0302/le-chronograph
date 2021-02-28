import React, { FC, Fragment } from 'react';
import { ComponentAppearance } from '../button/Button';
import NewsletterContent from '../newsletterContent/NewsletterContent';
import GraphSection from './graphSection/GraphSection';
import HeaderSection from './headerSection/HeaderSection';
import WatchPerformanceSection from './watchPerformanceSection/WatchPerformanceSection';
import {
  NewsletterLayout,
  NewsletterWrapper,
  Title
} from './InvestmentPage.styles';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import EnjoySection from './enjoySection/EnjoySection';
import Head from 'next/head';
import { BlogName } from '../../constants/common';

const InvestmentPage: FC = () => {
  const { t }: UseTranslationResponse<string> = useTranslation();

  return (
    <Fragment>
      <Head>
        <title>{`${BlogName} | ${t('watchInvestment')}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderSection />
      <GraphSection />
      <WatchPerformanceSection />
      <NewsletterLayout id="investment-newsletter">
        <Title>{t('signUpToOurNewsletter')}</Title>
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
