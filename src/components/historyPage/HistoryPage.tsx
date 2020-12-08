import React, { FC, Fragment } from 'react';
import HansWilsdorf from '../../assets/images/hans-wilsdorf.jpg';
import Apollo13 from '../../assets/images/astronautes-apollo-13.jpg';
import DaytonaPaulNewman from '../../assets/images/daytona-paul-newman.jpg';
import CommonSection from '../commonSection/CommonSection';
import Section from '../section/Section';
import { ComponentAppearance } from '../button/Button';
import {
  NewsletterLayout,
  NewsletterWrapper,
  Title
} from '../investmentPage/InvestmentPage.styles';
import NewsletterContent from '../newsletterContent/NewsletterContent';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Head from 'next/head';
import { BlogName, BlogLabel } from '../../constants/common';

const HistoryPage: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Fragment>
      <Head>
        <title>{`${BlogName} | ${t('history')}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Section
        image={HansWilsdorf}
        backgroundColor={'dark'}
        backgroundPosition={'right'}
        subtitle={t('historyOfRolex')}
      >
        <CommonSection
          sectionColor={'light'}
          link={'/histoire'}
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam`}
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
        image={Apollo13}
        backgroundColor={'light'}
        backgroundPosition={'left'}
        subtitle={t('omegaApollo13Title')}
      >
        <CommonSection
          sectionColor={'dark'}
          link={'/histoire'}
          text={t('omegaApollo13Content')}
        />
      </Section>
      <Section
        image={DaytonaPaulNewman}
        backgroundColor={'dark'}
        backgroundPosition={'right'}
        subtitle={t('mostExpensiveRolexWatch')}
      >
        <CommonSection
          sectionColor={'light'}
          link={'/histoire'}
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam`}
        />
      </Section>
    </Fragment>
  );
};

export default HistoryPage;
