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
import Router from 'next/router';
import NProgress from 'nprogress';
import Footer from '../components/footer/Footer';

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

  return (
    <Fragment>
      <Head>
        <title>{`${BlogName} ${BlogLabel}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {createModal({
        title: t('createBrandThatPeopleLove'),
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
      <Footer />
    </Fragment>
  );
};

export default CustomApp;
