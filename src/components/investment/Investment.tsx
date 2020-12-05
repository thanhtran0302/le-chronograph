import React, { FC } from 'react';
import { Paragraph } from '../homePage/headerSection/HeaderSection.styles';
import Section from '../section/Section';
import { Layout } from './Investment.styles';
import PatekPhilippeInvestment from '../../assets/images/patek-philippe-investment.png';
import { UseTranslationResponse, useTranslation } from 'react-i18next';
import Button, {
  ButtonIconPosition,
  ButtonTypes,
  ComponentAppearance
} from '../button/Button';
import ArrowRight from '../../assets/icons/arrow-right.svg';

const Investment: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Section
      backgroundColor={'dark'}
      backgroundPosition={'left'}
      image={PatekPhilippeInvestment}
      title={t('investment')}
      hasImageOnMobile={false}
    >
      <Paragraph
        dangerouslySetInnerHTML={{ __html: t('investmentDescription') }}
      />
      <Button
        appearance={ComponentAppearance.PRIMARY}
        type={ButtonTypes.BUTTON}
        label={"Commencer l'investissement"}
        icon={<ArrowRight />}
        iconPosition={ButtonIconPosition.RIGHT}
      />
    </Section>
  );
};

export default Investment;
