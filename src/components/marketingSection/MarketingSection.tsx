import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import CommonSection from '../commonSection/CommonSection';
import Section from '../section/Section';
import MarketingRolex from '../../assets/images/marketing-rolex.png';

const MarketingSection: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Section
      image={MarketingRolex}
      backgroundColor={'dark'}
      backgroundPosition={'left'}
      title={t('history')}
    >
      <CommonSection
        sectionBgColor={'dark'}
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
  );
};

export default MarketingSection;
