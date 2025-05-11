import Image from "next/image";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Compute | Unitellas International Limited",
  description: "...",
};

export default function EnterpriseCompute() {
  const features = [
    {
      title: "Easy Provisioning with Predefined Compute Instances",
      text: "Set up your zCompute infrastructure in minutes, using a web based GUI and REST API. Unitellas provides a number of Virtual Machine (VM) images ready to use. Or you can customize your own images, as needed.",
    },
    {
      title: "Large Selection of Instances Types to Match your Workload",
      text: "Standard and Premium Instance Types to match your workload – from small apps to large performance and memory intensive workloads and deployments.",
    },
    {
      title: "Autoscale Groups",
      text: "zCompute auto scaling automatically scales compute resources to ensure high availability, performance, and efficient resource utilization. You define the policy, and zCompute ensures performance and availability while keeping resource utilization optimized to reduce costs.",
    },
    {
      title:
        "Achieve Availability and Performance Goals with Intelligent Load Balancers",
      text: "Application Load Balancers route traffic according to application or network considerations and distributes the amount of compute and/or networking capacity needed.",
    },
    {
      title: "AWS EC2 Compatible APIs",
      text: "zCompute gives enterprise customers the ability to consume services the exact same way they consume in the public cloud using AWS EC2 compatible API.",
    },
    {
      title: "Easy VM backups with Snapshots",
      text: "In concert with Unitellas zStorage, you can create snapshots of the VMs that are in the zCompute cluster, and use these snapshots to restore any VM if needed.",
    },
    {
      title: "Simple VM Management",
      text: "Manage your virtualized infrastructure through an easy to use web based dashboard. Track and manage consumption of your resources with a visualized dashboard, automated monitoring & alerting and detailed reporting.",
    },
    {
      title: "Simple, Straight Forward Pricing Model",
      text: "Simple, predictable, hassle and headache free consumption based pricing. Pay only for what you use. No long-term commitments and no egress or ingress fees.",
    },
  ];
  return (
    <Layout>
      <PageHeader title="Enterprise Compute" />
      <section className="px-4 py-12 sm:p-12">
        <h1 className="mb-5 text-center font-Mongoose text-5xl">zCompute</h1>
        <p className="mx-auto mb-12 max-w-3xl text-center text-base">
          Develop, deploy, run and virtualize any application on zCompute.
          Secure, flexible and wherever you want it – Colocation, Private Data
          Center, or Public Cloud. Whether you want to move to the cloud, leave
          the cloud or just need resources closer to your data, zCompute is for
          you.
        </p>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <li key={encodeURI(feature.title)}>
              <h1 className="mb-2 font-Mongoose text-3xl">{feature.title}</h1>
              <hr className="mb-4 w-28 border-2 border-uni-blue" />
              <p>{feature.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/enterprise-compute/image-1.png"
            alt="companies"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center text-2xl font-medium md:mx-0 md:text-left">
            Patented Software. Commodity Hardware.
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            You get our patented virtualization software and the same hardware
            you can buy from a legacy vendor. (Which leads us to ask: Why would
            you?)
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row-reverse lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/enterprise-compute/image-2.png"
            alt="companies"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center text-2xl font-medium md:mx-0 md:text-left">
            Expert Management 24/7/365
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Why spend your time managing infrastructure? You have more important
            things to do, like finding the source of that squeaking noise in the
            server room.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/enterprise-compute/image-3.png"
            alt="companies"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center text-2xl font-medium md:mx-0 md:text-left">
            Do More. Faster.
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Edge Cloud Services featuring zCompute, zStorage and zNetworking –
            all available on-demand and with robust, enterprise-grade features.
            If you’re looking for secure, highly available, highly performant,
            flexible and reliable infrastructures – we’ve got you covered!
          </p>
        </div>
      </div>
    </Layout>
  );
}
