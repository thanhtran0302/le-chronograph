import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { KnowMore, Layout } from './CommonSection.styles';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import { sectionBgColor } from '../section/Section';

export interface CommonSectionProps {
  text: string;
  sectionColor: sectionBgColor;
}

const CommonSection: FC<CommonSectionProps> = ({ text, sectionColor }) => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Layout>
      <span>{text}</span>
      <KnowMore sectionColor={sectionColor}>
        {t('knowMore')} <ArrowRight />
      </KnowMore>
    </Layout>
  );
};

export default CommonSection;
