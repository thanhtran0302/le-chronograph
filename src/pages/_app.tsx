import '../i18n';
import '../css/nprogress.css';

import React, { FC, Fragment } from 'react';
import { AppProps } from 'next/app';
import NavBar from '../components/navBar/NavBar';
import Head from 'next/head';
import { BlogLabel, BlogName } from '../constants/common';
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

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Fragment>
    <Head>
      <title>{`${BlogName} ${BlogLabel}`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </Fragment>
);

export default CustomApp;
