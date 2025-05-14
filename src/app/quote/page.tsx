import Head from "next/head";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import QuoteForm from "./quoteForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote | Unitellas International Limited",
  description:
    "Request a customized quote for Unitellas edge cloud services. Get pricing tailored to your needs.",
  keywords: [
    "Cloud Pricing",
    "Unitellas Services Quote",
    "Cloud Cost Nigeria",
    "Edge Cloud Quote",
    "IT Services Quote",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/quote",
  },
  openGraph: {
    title: "Get a Quote | Unitellas International Limited",
    description:
      "Receive a custom quote for enterprise-grade cloud services tailored to your goals.",
    url: "https://www.unitellas.com.ng/quote",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/assets/images/solutions/enterprise-compute/image-3.png",
        width: 1200,
        height: 630,
        alt: "Unitellas Quote",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Get a Quote for our Edge Cloud Services | Unitellas International Limited",
    description:
      "Find the right cloud solution for your enterprise. Get a custom quote today.",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    images: [
      "https://www.unitellas.com.ng/assets/images/solutions/enterprise-compute/image-3.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Quote() {
  return (
    <Layout>
      <Head>
        <title>Get a Quote | Unitellas International Limited</title>
      </Head>
      <PageHeader title="Get a Quote" />

      <QuoteForm />
    </Layout>
  );
}
