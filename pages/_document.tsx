import React, { Children } from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

import { getCssText } from '@/styles/stitches.config';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* next-ui css initialize */}
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          <link rel="manifest" href="/manifest.json" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/OG/apple-touch-icon.png"
          />
          <link rel="apple-touch-icon" sizes="57x57" href="/OG/57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/OG/60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/OG/72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/OG/76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/OG/114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/OG/120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/OG/144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/OG/152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/OG/180.png" />

          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/OG/192.png"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/OG/32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/OG/96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/OG/16.png" />
          {/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}

          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/OG/144.png" />

          <meta name="theme-color" content="#ffffff" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="Content-Type" content="text/xml; charset=utf-8" />

          <meta
            name="format-detection"
            content="telephone=no, address=no, email=no"
          />

          <link rel="shortcut icon" href="/favicon.ico" />

          {/* SUIT fonts */}
          <link
            href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/variable/woff2/SUIT-Variable.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
