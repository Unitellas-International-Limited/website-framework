import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import { Metadata } from "next";
import ContactForm from "./contactForm";

export const metadata: Metadata = {
  title: "Contact Us | Unitellas International Limited",
  description: "...",
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
