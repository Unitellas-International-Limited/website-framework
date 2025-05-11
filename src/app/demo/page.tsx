import ComputeDR from "@/components/forms/computeDR";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Demo | Unitellas International Limited",
  description: "...",
};

export default function Demo() {
  return (
    <Layout>
      <PageHeader title="Schedule a Demo" />
      <ComputeDR serviceName="Demo" />
    </Layout>
  );
}
