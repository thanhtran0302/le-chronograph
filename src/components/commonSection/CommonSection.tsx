import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { KnowMore, Layout, Text } from './CommonSection.styles';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import { sectionBgColor } from '../section/Section';
import Link from 'next/link';

export interface CommonSectionProps {
  text: string;
  sectionColor: sectionBgColor;
  link: string;
}

const CommonSection: FC<CommonSectionProps> = ({
  text,
  sectionColor,
  link
}) => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Layout>
      <Text>{text}</Text>
      <Link href={link}>
        <KnowMore sectionColor={sectionColor}>
          {t('knowMore')} <ArrowRight />
        </KnowMore>
      </Link>
    </Layout>
  );
};

export default CommonSection;
