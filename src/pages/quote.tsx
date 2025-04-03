import React, { useState } from "react";
import Head from "next/head";
import { BaseButton } from "@/components/UI/Buttons";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import ComputeDR from "@/components/forms/computeDR";
import Backup from "@/components/forms/backup";
import AI from "@/components/forms/ai";

export interface QuoteForm {
  service: string; // service they want
}

export interface FormChoices {
  id: number;
  name: string;
}

export default function Quote() {
  const formChoices: FormChoices[] = [
    { id: 1, name: "Compute" },
    { id: 2, name: "Backup" },
    { id: 3, name: "Disaster Recovery" },
    { id: 4, name: "AI Workloads" },
  ];

  const [service, setService] = useState("Compute");

  return (
    <Layout>
      <Head>
        <title>Get a Quote | Unitellas International Limited</title>
      </Head>
      <PageHeader title="Get a Quote" />

      {/* top buttons */}
      <div className=" flex w-full justify-center space-x-3 px-2 pt-8 font-Mongoose text-xl sm:text-3xl">
        {formChoices.map((choice) => (
          <BaseButton
            key={choice.id}
            onClick={(e: any) => {
              e.preventDefault();
              setService(choice.name);
            }}
            text={choice.name}
            className={`${
              choice.name === service
                ? "border border-uni-blue bg-uni-blue "
                : "text-gray-900 "
            } p-2 sm:p-0 `}
          />
        ))}
      </div>

      {service === "Compute" && <ComputeDR serviceName="Compute" />}
      {service === "Disaster Recovery" && (
        <ComputeDR serviceName="Disaster Recovery" />
      )}
      {service === "Backup" && <Backup serviceName="Backup" />}

      {service === "AI Workloads" && <AI serviceName="AI Workloads" />}
    </Layout>
  );
}
