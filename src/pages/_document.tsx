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

  render() {
    const { styleTags } = this.props;

    return (
      <Html lang="fr">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Qwigley&family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
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
