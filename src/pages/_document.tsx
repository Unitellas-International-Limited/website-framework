import React from 'react'
import Document, { Html, 
  Head, 
  Main, 
  NextScript,
  DocumentContext,
  DocumentInitialProps, 
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
     ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
     const initialProps = await Document.getInitialProps(ctx);
     return {
        ...initialProps,
        styles: React.Children.toArray([initialProps.styles]),
     };
  }
  render() {
    return (
      <Html lang="en">
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
         />
         <Head>
            <meta name="description" content="Fully-managed enterprise edge cloud services - compute, networking, storage and more - designed for managed service providers and the modern enterprise." key="desc" />
            <link rel="icon" type="image/x-icon" href="https://signaturesbydoyen.org/favicon.ico" />
            <link rel="shortcut icon" type="image/x-icon" href="https://signaturesbydoyen.org/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="https://signaturesbydoyen.org/doyen-signature.png'" />
            <link rel="icon" type="image/png" sizes="16x16" href="https://signaturesbydoyen.org/doyen-signature.png'" />
            <link rel='icon' sizes='192x192' type='image/png' href='https://signaturesbydoyen.org/doyen-signature.png' />
            <link rel='icon' sizes='512x512' type='image/png' href='https://signaturesbydoyen.org/doyen-signature.png' />
            <meta name="apple-mobile-web-app-title" content="Unitellas - THE FIRST HYPER SCALE EDGE CLOUD IN AFRICA" />
            <link rel='apple-touch-icon' type='image/png' href='https://signaturesbydoyen.org/doyen-signature.png' />
            <meta name='msapplication-square310x310logo' content='https://signaturesbydoyen.org/doyen-signature.png' />
            <link rel='manifest' href='https://signaturesbydoyen.org/' />
            <link rel='canonical' href='https://signaturesbydoyen.org/' />

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
            <meta property="og:image" content="https://signaturesbydoyen.org/doyen-signature.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:alt" content="Unitellas" />
            <meta property="og:image:secure_url" content="https://signaturesbydoyen.org/doyen-signature.png" />
            <meta property="og:url" content="https://signaturesbydoyen.org/" />

                {/* twitter cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@doyenyen_" />
            <meta name="twitter:creator" content="@doyenyen_" />
            <meta
              name="twitter:title"
              content="Unitellas - THE FIRST HYPER SCALE EDGE CLOUD IN AFRICA"
            />
            <meta
              name="twitter:description"
              content="Fully-managed enterprise edge cloud services - compute, networking, storage and more - designed for managed service providers and the modern enterprise."
            />
            <meta name="twitter:image" content="https://signaturesbydoyen.org/doyen-signature.png" />
            <meta name="twitter:image:alt" content="Unitellas" />
        </Head>
        <body>
            <Main />
            <NextScript />
         </body>
      </Html>
    );
  }
}

export default MyDocument