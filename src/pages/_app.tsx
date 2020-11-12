import '../i18n';
import React, { Fragment } from 'react';
import App, { AppProps } from 'next/app';
import { Container } from 'react-grid-system';
import NavBar from '../components/navBar/NavBar';
import spaces from '../constants/spaces';
import Head from 'next/head';
import { BlogLabel, BlogName } from '../constants/common';

export class CustomApp extends App<AppProps> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <Head>
          <title>{`${BlogName} ${BlogLabel}`}</title>
        </Head>
        <Container style={{ paddingTop: spaces[32] }}>
          <NavBar />
          <Component {...pageProps} />
        </Container>
      </Fragment>
    );
  }
}

export default CustomApp;
