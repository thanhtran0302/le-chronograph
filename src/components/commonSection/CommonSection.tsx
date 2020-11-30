import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { KnowMore, Layout } from './CommonSection.styles';
import ArrowRight from '../../assets/icons/arrow-right.svg';

interface CommonSectionProps {
  text: string;
}

const CommonSection: FC<CommonSectionProps> = ({ text }) => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Layout>
      <span>{text}</span>
      <KnowMore>
        {t('knowMore')} <ArrowRight />
      </KnowMore>
    </Layout>
  );
};

export default CommonSection;
