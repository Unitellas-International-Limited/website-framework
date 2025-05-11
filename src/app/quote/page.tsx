import Head from "next/head";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import QuoteForm from "./quoteForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote | Unitellas International Limited",
  description: "...",
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
