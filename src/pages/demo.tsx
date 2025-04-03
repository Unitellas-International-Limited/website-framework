import ComputeDR from "@/components/forms/computeDR";
import Layout from "@/components/UI/Layout";
import Head from "next/head";
import PageHeader from "@/components/UI/PageHeader";

export default function Demo() {
  return (
    <Layout>
      <Head>
        <title>Schedule a Demo | Unitellas International Limited</title>
      </Head>
      <PageHeader title="Schedule a Demo" />
      <ComputeDR serviceName="Demo" />
    </Layout>
  );
}
