import React, { FC } from 'react';
import Section from '../section/Section';
import RolexSubmariner from '../../assets/images/rolex-submariner.png';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { Layout } from './HeaderSection.styles';
import NewsletterContent from '../newsletterContent/NewsletterContent';

const HeaderSection: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Section
      backgroundColor={'dark'}
      backgroundPosition={'left'}
      image={RolexSubmariner}
      title={t('tagline')}
      hasImageOnMobile={false}
    >
      <Layout>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <NewsletterContent />
      </Layout>
    </Section>
  );
};

export default HeaderSection;
