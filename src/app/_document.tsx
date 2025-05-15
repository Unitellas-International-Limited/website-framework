/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @next/next/no-page-custom-font */

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/mongoose-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta
          name="description"
          content="Fully-managed enterprise edge cloud services - compute, networking, storage and more - designed for managed service providers and the modern enterprise."
          key="desc"
        />
        <meta
          name="keywords"
          content="edge cloud, managed service providers, networking, Unitellas, Cloud computing services in Nigeria, cloud service provider in Africa, Secure cloud integration services, Top cloud computing company in Africa"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/unitellasicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/unitellasicon.png"
        />
        <link
          rel="icon"
          sizes="192x192"
          type="image/png"
          href="/unitellasicon.png"
        />
        <link
          rel="icon"
          sizes="512x512"
          type="image/png"
          href="/unitellasicon.png"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Unitellas - THE FIRST HYPER SCALE EDGE CLOUD IN AFRICA"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/unitellasicon.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="/unitellasicon.png"
        />
        <link rel="manifest" href="/" />

        {/* open graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Unitellas" />
        <meta
          property="og:title"
          content="Unitellas - THE FIRST HYPER SCALE EDGE CLOUD IN AFRICA"
          key="title"
        />
        <meta
          property="og:description"
          content="Fully-managed enterprise edge cloud services - compute, networking, storage and more - designed for managed service providers and the modern enterprise."
        />
        <meta
          property="og:image"
          content="https://www.unitellas.com.ng/unitellasicon.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Unitellas" />
        <meta
          property="og:image:secure_url"
          content="https://www.unitellas.com.ng/unitellasicon.pn"
        />
        <meta
          property="og:url"
          content="https://www.unitellas.com.ng/unitellasicon.png"
        />

        {/* twitter cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Unitellasil" />
        <meta name="twitter:creator" content="@Unitellasil" />
        <meta
          name="twitter:title"
          content="Unitellas - THE FIRST HYPER SCALE EDGE CLOUD IN AFRICA"
        />
        <meta
          name="twitter:description"
          content="Fully-managed enterprise edge cloud services - compute, networking, storage and more - designed for managed service providers and the modern enterprise."
        />
        <meta
          name="twitter:image"
          content="https://www.unitellas.com.ng/unitellasicon.png"
        />
        <meta name="twitter:image:alt" content="Unitellas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
