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

      <div className="w-full flex flex-wrap px-5 py-5 justify-center gap-14 xl:gap-5">
        <iframe
          className="border-0 w-full xl:w-[650px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4203703315075!2d3.5629625731562733!3d6.468313393523378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf74cc6b40421%3A0xd96ba79020e4b2c1!2sUnitellas%20International%20Limited!5e0!3m2!1sen!2sng!4v1748207956132!5m2!1sen!2sng"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <ContactForm />
      </div>
    </Layout>
  );
}
