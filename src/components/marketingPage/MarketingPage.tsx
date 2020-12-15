import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import {
  BlogName,
  CARTIER_TANK_POST_URL,
  GREY_MARKET_POST,
  TUDOR_POST_URL
} from '../../constants/common';
import Section from '../section/Section';
import CartierTank from '../../assets/images/cartier-tank.jpg';
import TudorBlackBay from '../../assets/images/tudor.jpg';
import GreyMarket from '../../assets/images/marche-gris.jpg';
import CommonSection from '../commonSection/CommonSection';
import { ComponentAppearance } from '../button/Button';
import {
  NewsletterLayout,
  NewsletterWrapper,
  Title
} from '../investmentPage/InvestmentPage.styles';
import NewsletterContent from '../newsletterContent/NewsletterContent';

const MarketingPage: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Fragment>
      <Head>
        <title>{`${BlogName} | ${t('marketing')}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Section
        backgroundColor={'dark'}
        backgroundPosition={'right'}
        image={GreyMarket}
        subtitle={t('greyMarketTitle')}
      >
        <CommonSection
          text={t('greyMarketDescription')}
          link={GREY_MARKET_POST}
          sectionColor={'dark'}
        />
      </Section>
      <Section
        backgroundColor={'light'}
        backgroundPosition={'left'}
        image={CartierTank}
        subtitle={t('cartierTank')}
      >
        <CommonSection
          text={t('cartierTankSection')}
          link={CARTIER_TANK_POST_URL}
          sectionColor={'light'}
        />
      </Section>
      <NewsletterLayout>
        <Title>{t('signUpToOurNewsletter')}</Title>
        <NewsletterWrapper>
          <NewsletterContent
            appearance={ComponentAppearance.SECONDARY}
            hasSubtitle
          />
        </NewsletterWrapper>
      </NewsletterLayout>
      <Section
        backgroundColor={'light'}
        backgroundPosition={'left'}
        image={TudorBlackBay}
        subtitle={t('tudorTitle')}
      >
        <CommonSection
          text={t('tudorSection')}
          link={TUDOR_POST_URL}
          sectionColor={'light'}
        />
      </Section>
    </Fragment>
  );
};

export default MarketingPage;
