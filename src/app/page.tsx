import { Metadata } from "next";

import LowerHome from "./lowerHome";
import Hero from "./hero";
import Nav from "./components/UI/Nav";
import Footer from "./components/UI/Footer";

export const metadata: Metadata = {
  title: "Unitellas International Limited | Edge Cloud Infrastructure",
  description:
    "Unitellas provides managed cloud infrastructure across compute, networking, storage, protection and more for modern enterprises and service providers.",
  keywords: [
    "Unitellas",
    "Edge Cloud Nigeria",
    "Cloud Infrastructure Africa",
    "Enterprise Cloud Services",
    "Unitellas International Limited",
    "Cloud Services Nigeria",
    "Edge Cloud Africa",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/",
  },
  openGraph: {
    title: "Unitellas International Limited | Edge Cloud Infrastructure",
    description:
      "Managed cloud infrastructure across compute, networking, storage, protection and more.",
    url: "https://www.unitellas.com.ng/",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/unitellasicon.png",
        width: 1200,
        height: 630,
        alt: "Unitellas International Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unitellas | Edge Cloud Infrastructure",
    description:
      "Managed cloud infrastructure for modern enterprises and service providers.",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    images: ["https://www.unitellas.com.ng/unitellasicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <LowerHome />
      </main>

      <Footer />
    </>
  );
}
