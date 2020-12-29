import Link from 'next/link';
import React, { FC } from 'react';
import CookieConsent from 'react-cookie-consent';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import colors from '../../constants/colors';
import { COOKIE_CONSENT } from '../../constants/common';
import fonts from '../../constants/fonts';
import radius from '../../constants/radius';
import spaces from '../../constants/spaces';
import { Title } from './CookieConsentBanner.styles';

const CookieConsentBanner: FC = () => {
  const { t }: UseTranslationResponse<string> = useTranslation();

  return (
    <CookieConsent
      location="bottom"
      buttonText={t('acceptCookies')}
      cookieName={COOKIE_CONSENT}
      style={{
        background: colors.mainDark,
        boxShadow: '-10px -10px 24px rgba(51, 51, 51, 0.08)',
        borderRadius: radius[6],
        padding: spaces[12]
      }}
      buttonStyle={{
        background: colors.salmon[100],
        color: colors.mainDark,
        fontWeight: 600,
        fontSize: fonts[16],
        borderRadius: radius[3],
        padding: spaces[12]
      }}
      expires={150}
    >
      <Title>Avant de continuer.</Title>
      <p>
        Ce site utilise des cookies, pour vous garantir son bon fonctionnement,
        établir des statistiques de fréquentation, vous permettre des partages
        sur les réseaux et vous proposer des services et des offres adaptés à
        vos centres d'intérêts. Ces cookies ne sont déposés que si vous y
        consentez en cliquant sur le bouton "<b>J'accepte les cookies</b>
        ". Pour en savoir plus sur les cookies. Rendez-vous{' '}
        <Link href="/mentions-legales">ici</Link>
      </p>
      <p>
        Ces données sont traitées aux fins suivantes : analyse et amélioration
        de l’expérience utilisateur et/ou de notre offre de contenus, produits,
        mesure et analyse d’audience, mesure de performance.
      </p>
      <b style={{ textDecoration: 'underline' }}>
        NOUS NE FAISONS PAS DE PUBLICITÉS SUR NOTRE SITE. NOUS NE VENDONS EN
        AUCUN CAS VOS DONNÉES À QUELCONQUES AGENCES DE PUBS.
      </b>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
