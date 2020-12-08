import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import { BlogName } from '../../constants/common';

const MarketingPage: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();

  return (
    <Fragment>
      <Head>
        <title>{`${BlogName} | ${t('marketing')}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>hello</div>
    </Fragment>
  );
};

export default MarketingPage;
