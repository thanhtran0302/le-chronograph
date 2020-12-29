import React, { FC } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { KnowMore, Layout, Text } from './CommonSection.styles';
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
  const { t }: UseTranslationResponse<string> = useTranslation();

  return (
    <Layout>
      <Text dangerouslySetInnerHTML={{ __html: text }} />
      <Link href={link}>
        <KnowMore sectionColor={sectionColor}>{t('knowMore')}</KnowMore>
      </Link>
    </Layout>
  );
};

export default CommonSection;
