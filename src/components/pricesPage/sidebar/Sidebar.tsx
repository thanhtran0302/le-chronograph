import React, { FC } from 'react';
import SideSection from '../../sideSection/SideSection';
import {
  LinkWrapper,
  BackButtonWrapper,
  Layout,
  RetourText
} from './Sidebar.styles';
import BackArrow from '../../../assets/icons/back_arrow.svg';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PodcastIframe from '../../podcastIframe/PodcastIframe';
import { useMediaQuery } from '../../../constants/responsive';
import breakpoints from '../../../constants/breakpoints';

const Sidebar: FC = () => {
  const { t }: UseTranslationResponse<string> = useTranslation();
  const router = useRouter();
  const isSmartphone: boolean = useMediaQuery(
    `(max-width: ${breakpoints.smartphone.iPhone11ProMax})`
  );

  return (
    <Layout>
      {!isSmartphone && (
        <BackButtonWrapper onClick={() => router.back()}>
          <BackArrow />
          <RetourText>{t('return')}</RetourText>
        </BackButtonWrapper>
      )}
      <SideSection title={'Articles investissement'}>
        <LinkWrapper>
          <Link href="/blog/articles/modeles-rolex-prendre-la-valeur-partie-1">
            Ces modèles Rolex vintage qui ont pris de la valeur
          </Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="blog/articles/tudor-investissement-montre-vintage-prix-revente-hausse-baisse-prix-marche-gris">
            Tudor un investissement sur le long terme
          </Link>
        </LinkWrapper>
      </SideSection>
      <SideSection title={'Écouter notre podcast'}>
        <PodcastIframe width={380} />
      </SideSection>
    </Layout>
  );
};

export default Sidebar;
