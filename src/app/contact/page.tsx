import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import { Metadata } from "next";
import ContactForm from "./contactForm";

export const metadata: Metadata = {
  title: "Contact Us | Unitellas International Limited",
  description:
    "We would love to hear from you. For support or inquiries, contact our team today.",
  keywords: [
    "Unitellas",
    "Contact",
    "Support",
    "Cloud Support Nigeria",
    "Unitellas International Limited",
    "Edge Cloud Services Nigeria",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/contact",
  },
  openGraph: {
    title: "Contact Us | Unitellas International Limited",
    description: "Get in touch with Unitellas for support, services, and more.",
    url: "https://www.unitellas.com.ng/contact",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/unitellasicon.png",
        width: 1200,
        height: 630,
        alt: "Contact Unitellas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Unitellas International Limited",
    description:
      "Need help? Contact Unitellas today and our support team will respond promptly.",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    images: ["https:/www.unitellas.com.ng/unitellasicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Contact() {
  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="We would love to hear from you. For support, reach out to info.unitellas.com.ng"
      />
      <ContactForm />
    </Layout>
  );
}
