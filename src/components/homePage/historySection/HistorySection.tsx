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
      backgroundColor={'dark'}
      backgroundPosition={'left'}
      subtitle={t('history')}
    >
      <CommonSection
        sectionColor={'dark'}
        link={'/histoire'}
        text={t('historySection')}
      />
    </Section>
  );
};

export default HistorySection;
