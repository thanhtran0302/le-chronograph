import '../i18n';
import React, { FC, Fragment } from 'react';
import App, { AppProps } from 'next/app';
import { Container } from 'react-grid-system';
import NavBar from '../components/navBar/NavBar';
import spaces from '../constants/spaces';
import Head from 'next/head';
import { BlogLabel, BlogName } from '../constants/common';
import useModal, { UseModalProps } from '../components/modal/Modal';
import NewsletterModalContent from '../components/newsletterModalContent/NewsletterModalContent';
import { useTranslation, UseTranslationResponse } from 'react-i18next';

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
        subtitle: t('receiveTipsToBuildBrand'),
        content: <NewsletterModalContent />
      })}
      <Container style={{ paddingTop: spaces[32] }}>
        <NavBar openModal={openModal} />
        <Component {...pageProps} />
      </Container>
    </Fragment>
  );
};

export default CustomApp;
