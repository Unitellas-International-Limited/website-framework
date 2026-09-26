import "./globals.css";

import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import ToasterComponent from "@/components/UI/Toaster";
import CookieBanner from "./components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.unitellas.com.ng"),

  title: {
    default: "Unitellas International Limited | Edge Cloud Infrastructure",
    template: "%s | Unitellas International Limited",
  },

  description:
    "Unitellas provides managed cloud infrastructure across compute, networking, storage, protection and more for modern enterprises and service providers.",

  keywords: [
    "Unitellas",
    "Edge Cloud",
    "Cloud Infrastructure Africa",
    "Cloud Computing Nigeria",
    "Enterprise Cloud Services",
    "Managed Cloud Services",
    "Cloud Infrastructure Nigeria",
    "Edge Cloud Africa",
  ],

  alternates: {
    canonical: "https://www.unitellas.com.ng",
  },

  openGraph: {
    title: "Unitellas International Limited | Edge Cloud Infrastructure",
    description:
      "Managed cloud infrastructure across compute, networking, storage, protection and more for modern enterprises and service providers.",
    url: "https://www.unitellas.com.ng",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "/unitellasicon.png",
        width: 1200,
        height: 630,
        alt: "Unitellas International Limited",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    title: "Unitellas International Limited | Edge Cloud Infrastructure",
    description:
      "Managed cloud infrastructure for modern enterprises and service providers.",
    images: ["/unitellasicon.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/unitellasicon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/unitellasicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/unitellasicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/unitellasicon.png",
  },

  appleWebApp: {
    title: "Unitellas International Limited",
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
          href="/assets/fonts/Mongoose-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link rel="preconnect" href="https://maps.googleapis.com" />

        <link rel="dns-prefetch" href="https://maps.googleapis.com" />

        <meta name="theme-color" content="#102A43" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="antialiased">
        <GoogleTagManager gtmId="GTM-MRB2FRFG" />

        {children}

        <CookieBanner />

        <ToasterComponent />

        <SpeedInsights />
      </body>
    </html>
  );
}
