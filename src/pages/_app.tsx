import '../i18n';
import '../css/nprogress.css';

import React, { FC, Fragment } from 'react';
import { AppProps } from 'next/app';
import { Container } from 'react-grid-system';
import NavBar from '../components/navBar/NavBar';
import spaces from '../constants/spaces';
import Head from 'next/head';
import { BlogLabel, BlogName } from '../constants/common';
import useModal, { UseModalProps } from '../components/modal/Modal';
import NewsletterModalContent from '../components/newsletterModalContent/NewsletterModalContent';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Router, { NextRouter, useRouter } from 'next/router';
import NProgress from 'nprogress';
import Footer from '../components/footer/Footer';
import { useMobileDevice } from '../constants/responsive';
import CookieConsent from 'react-cookie-consent';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import radius from '../constants/radius';
import * as gtag from '../utils/ga';

NProgress.configure({ showSpinner: false, trickleSpeed: 100, minimum: 0.2 });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
  if (window.scrollTo) {
    window.scrollTo(0, 0);
  }
});
Router.events.on('routeChangeError', () => NProgress.done());

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { t }: UseTranslationResponse = useTranslation();
  const { createModal, openModal }: UseModalProps = useModal();
  const isMobile: boolean = useMobileDevice();
  const router: NextRouter = useRouter();

  return (
    <Fragment>
      <Head>
        <title>{`${BlogName} ${BlogLabel}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {createModal({
        title: !isMobile ? t('chooseYourWatch') : '',
        content: <NewsletterModalContent />
      })}
      <Container
        style={{
          paddingTop: spaces[32],
          paddingBottom: spaces[100],
          marginBottom: spaces[100]
        }}
      >
        <NavBar openModal={openModal} />
        <Component {...pageProps} />
      </Container>
      <CookieConsent
        location="bottom"
        buttonText={t('acceptCookies')}
        cookieName={'cookie'}
        style={{
          background: colors.dark[100],
          fontSize: fonts[20]
        }}
        buttonStyle={{
          background: 'white',
          height: spaces[48],
          borderRadius: radius[6],
          color: colors.dark[100],
          fontSize: fonts[16],
          fontWeight: 600
        }}
        expires={150}
        onAccept={() => {
          gtag.event({
            action: 'CLICK_ACCEPT_COOKIES',
            category: 'COOKIES',
            label: router.asPath,
            value: 3
          });
        }}
      >
        <p>{t('siteUseCookies')}</p>
        <p>{t('clickOnAccept')}</p>
      </CookieConsent>
      <Footer />
    </Fragment>
  );
};

export default CustomApp;
