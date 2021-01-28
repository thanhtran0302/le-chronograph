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
import { ApplePodcastIframe } from '../../singleBlogPost/SingleBlogPost.styles';
import { useRouter } from 'next/router';

const Sidebar: FC = () => {
  const { t }: UseTranslationResponse<string> = useTranslation();
  const router = useRouter();

  return (
    <Layout>
      <BackButtonWrapper onClick={() => router.back()}>
        <BackArrow />
        <RetourText>{t('return')}</RetourText>
      </BackButtonWrapper>
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
        <ApplePodcastIframe
          contentWidth={410}
          src="https://embed.podcasts.apple.com/fr/podcast/le-chronograph/id1539187268?itsct=podcast_box&amp;itscg=30200&amp;theme=light"
          frameBorder="0"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          allow="autoplay *; encrypted-media *;"
        />
      </SideSection>
    </Layout>
  );
};

export default Sidebar;
