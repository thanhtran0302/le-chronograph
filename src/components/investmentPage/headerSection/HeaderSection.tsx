import React, { FC } from 'react';
import { Paragraph } from '../../homePage/headerSection/HeaderSection.styles';
import Section from '../../section/Section';
import PatekPhilippeInvestment from '../../../assets/images/patek-philippe-investment.png';
import { UseTranslationResponse, useTranslation } from 'react-i18next';
import { ComponentAppearance } from '../../button/Button';
import NewsletterContent from '../../newsletterContent/NewsletterContent';

const HeaderSection: FC = () => {
  const { t }: UseTranslationResponse<string> = useTranslation();

  return (
    <Section
      backgroundColor={'dark'}
      backgroundPosition={'left'}
      image={PatekPhilippeInvestment}
      title={t('watchInvestment')}
      hasImageOnMobile={false}
    >
      <Paragraph
        dangerouslySetInnerHTML={{ __html: t('investmentDescription') }}
      />
      <NewsletterContent appearance={ComponentAppearance.PRIMARY} />
    </Section>
  );
};

export default HeaderSection;
