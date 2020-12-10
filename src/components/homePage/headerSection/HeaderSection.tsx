import React, { FC } from 'react';
import Section from '../../section/Section';
import RolexSubmariner from '../../../assets/images/rolex-submariner.png';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { Paragraph } from './HeaderSection.styles';
import NewsletterContent from '../../newsletterContent/NewsletterContent';
import { ComponentAppearance } from '../../button/Button';

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
      <Paragraph>{t('headerSection')}</Paragraph>
      <NewsletterContent appearance={ComponentAppearance.PRIMARY} />
    </Section>
  );
};

export default HeaderSection;
