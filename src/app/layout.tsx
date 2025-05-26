import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import ToasterComponent from "@/components/UI/Toaster";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unitellas - THE FIRST HYPER SCALE EDGE CLOUD IN AFRICA",
  description:
    "Fully-managed enterprise edge cloud services - compute, networking, storage and more - designed for managed service providers and the modern enterprise.",
  keywords: [
    "edge cloud",
    "managed service providers",
    "networking",
    "Unitellas",
    "Cloud computing services in Nigeria",
    "cloud service provider in Africa",
    "Secure cloud integration services",
    "Top cloud computing company in Africa",
  ],
  openGraph: {
    title: "Unitellas - THE FIRST HYPER SCALE EDGE CLOUD IN AFRICA",
    description:
      "Fully-managed enterprise edge cloud services - compute, networking, storage and more - designed for managed service providers and the modern enterprise.",
    url: "https://www.unitellas.com.ng",
    siteName: "Unitellas",
    images: [
      {
        url: "https://www.unitellas.com.ng/unitellasicon.png",
        width: 1200,
        height: 630,
        alt: "Unitellas",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    title: "Unitellas - THE FIRST HYPER SCALE EDGE CLOUD IN AFRICA",
    description:
      "Fully-managed enterprise edge cloud services - compute, networking, storage and more - designed for managed service providers and the modern enterprise.",
    images: ["https://www.unitellas.com.ng/unitellasicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/assets/fonts/mongoose-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
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
        <meta name="theme-color" content="#1f2937" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className={`antialiased`}>
        <GoogleTagManager gtmId="GTM-MRB2FRFG" />
        {children}
        <ToasterComponent />
      </body>
    </html>
  );
}
