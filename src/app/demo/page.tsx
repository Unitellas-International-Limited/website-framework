import ComputeDR from "@/components/forms/computeDR";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Demo | Unitellas International Limited",
  description:
    "Experience our edge cloud platform in action. Request a free live demo from Unitellas.",
  keywords: [
    "Cloud Demo",
    "Request Cloud Platform Demo",
    "Unitellas Edge Cloud Demo",
    "Edge Compute Nigeria",
    "Tech Demo Nigeria",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/demo",
  },
  openGraph: {
    title: "Schedule a Demo | Unitellas International Limited",
    description:
      "Book a free demo to see how Unitellas' edge cloud solutions can power your business today.",
    url: "https://www.unitellas.com.ng/demo",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/assets/images/solutions/edge-cloud/image-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Schedule a Demo with Unitellas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Try Unitellas Today",
    description:
      "Experience our hyperscale edge cloud platform. Book a free demo.",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    images: [
      "https://www.unitellas.com.ng/assets/images/solutions/edge-cloud/image-1.jpeg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Demo() {
  return (
    <Layout>
      <PageHeader title="Schedule a Demo" />
      <ComputeDR serviceName="Demo" />
    </Layout>
  );
}
