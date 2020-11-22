import Document, {
  DocumentContext,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';
import React, { Fragment, ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';
import { GA_TRACKING_ID } from '../constants/common';

import { GlobalStyle } from '../utils/styles';

interface OwnProps {
  styleTags: ReactElement<{}>[];
}

type Props = OwnProps & DocumentProps;

export default class CustomDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(
              <Fragment>
                <GlobalStyle />
                <App {...props} />
              </Fragment>
            )
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      const scriptGtag = document.createElement('script');
      const scriptDatalayer = document.createElement('script');

      scriptGtag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      scriptGtag.async = true;
      scriptDatalayer.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
      });
      `;
      document.body.appendChild(scriptGtag);
      document.body.appendChild(scriptDatalayer);
    }
  }

  render() {
    const { styleTags } = this.props;

    return (
      <Html lang="fr">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="shortcut icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Qwigley&family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `
            }}
          /> */}
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
