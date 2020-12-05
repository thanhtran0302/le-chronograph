import React, { FC } from 'react';
import Section from '../../section/Section';
import OmegaSpeedmaster from '../../../assets/images/omega-speedmaster.png';
import CommonSection from '../../commonSection/CommonSection';
import { useTranslation, UseTranslationResponse } from 'react-i18next';

const HistorySection: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Section
      image={OmegaSpeedmaster}
      backgroundColor={'light'}
      backgroundPosition={'right'}
      subtitle={t('history')}
    >
      <CommonSection
        sectionColor={'light'}
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

export default HistorySection;
