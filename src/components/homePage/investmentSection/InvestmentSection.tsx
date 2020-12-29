import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import CommonSection from '../../commonSection/CommonSection';
import Section from '../../section/Section';
import PatekPhilippe from '../../../assets/images/patek-philippe.png';

const InvestmentSection: FC = () => {
  const { t }: UseTranslationResponse<string> = useTranslation();

  return (
    <Section
      image={PatekPhilippe}
      backgroundColor={'light'}
      backgroundPosition={'right'}
      subtitle={t('investment')}
    >
      <CommonSection
        sectionColor={'light'}
        link={'/investissement'}
        text={t('investmentSection')}
      />
    </Section>
  );
};

export default InvestmentSection;
