import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import CommonSection from '../../commonSection/CommonSection';
import Section from '../../section/Section';
import PatekPhilippe from '../../../assets/images/patek-philippe.png';

const InvestmentSection: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Section
      image={PatekPhilippe}
      backgroundColor={'light'}
      backgroundPosition={'right'}
      subtitle={t('investment')}
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

export default InvestmentSection;
