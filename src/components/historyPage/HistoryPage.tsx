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
import { BlogName } from '../../constants/common';

const HistoryPage: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Fragment>
      <Head>
        <title>{`${BlogName} | ${t('history')}`}</title>
      </Head>
      <Section
        image={HansWilsdorf}
        backgroundColor={'dark'}
        backgroundPosition={'right'}
        subtitle={t('historyOfRolex')}
      >
        <CommonSection
          sectionColor={'dark'}
          link={'/blog/articles/rolex-roi-garde-toujours-sa-couronne'}
          text={t('rolexHistoryPreview')}
        />
      </Section>
      <NewsletterLayout id="#newsletter">
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
          sectionColor={'light'}
          link={
            '/blog/articles/omega-speedmaster-sauver-vie-astronautes-mission-apollo-13'
          }
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
          sectionColor={'dark'}
          link={
            '/blog/articles/rolex-daytona-paul-newman-comment-a-elle-ete-retrouvee'
          }
          text={t('historySectionPaulNewmanDescription')}
        />
      </Section>
    </Fragment>
  );
};

export default HistoryPage;
