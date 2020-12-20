import React, { FC } from 'react';
import Section from '../../section/Section';
import {
  Layout,
  ItemWrapper,
  Message
} from '../watchPerformanceSection/WatchPerformanceSection.styles';
import IWC from '../../../assets/images/iwc.png';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Party from '../../../assets/icons/party.svg';
import Password from '../../../assets/icons/password.svg';
import Storage from '../../../assets/icons/storage.svg';
import Culture from '../../../assets/icons/culture.svg';

const EnjoySection: FC = () => {
  const { t }: UseTranslationResponse<string> = useTranslation();

  return (
    <Section
      backgroundPosition={'left'}
      backgroundColor={'light'}
      image={IWC}
      title={t('assetCanBeEnjoy')}
    >
      <Layout>
        <ItemWrapper>
          <Password />
          <Message>{t('authenticityAndGuarantee')}</Message>
        </ItemWrapper>
        <ItemWrapper>
          <Storage />
          <Message>{t('easyToStore')}</Message>
        </ItemWrapper>
        <ItemWrapper>
          <Party />
          <Message>{t('wearForParties')}</Message>
        </ItemWrapper>
        <ItemWrapper>
          <Culture />
          <Message>{t('culturalPatrimony')}</Message>
        </ItemWrapper>
      </Layout>
    </Section>
  );
};

export default EnjoySection;
