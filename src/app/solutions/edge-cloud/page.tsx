import Image from "next/image";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unitellas Edge Cloud | Unitellas International Limited",
  description: "...",
};

export default function EdgeCloud() {
  return (
    <Layout>
      <PageHeader
        title="Unitellas Edge Cloud"
        subtitle="Compute power, data storage, backup, disaster recovery, and
          low-latency edge services - Unitellas Edge Cloud delivers future ready
          infrastructure-as-a-service solutions for global Service Providers and
          Enterprises"
      />
      <section className="px-4 py-12 sm:p-12">
        <h1 className="mb-5 text-center font-Mongoose text-5xl">
          Built to be the Foundation of Your Business
        </h1>
        <p className="text-center text-base">
          The Unitellas Edge Cloud enables you to pivot from managing your
          infrastructure to focus on growing your business. You get secure,
          elastic, robust self service compute, networking and storage -
          everything you have come to expect for enterprise grade IT available
          in a fully managed service with a simple, straight forward and 100%
          OpEx pricing model.
        </p>
      </section>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/edge-cloud/image-1.jpeg"
            alt="The globe with different edge cloud locations"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Accelerate Your App and Cloud Transformation
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Global Service Providers and F100 Enterprises rely on the
            flexibility and reliability of Unitellas Edge Cloud to power the
            growing needs of modern business
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row-reverse lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/edge-cloud/image-2.jpeg"
            alt="Unitellas Edge Cloud Locations around the globe"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Accelerate Your App and Cloud Transformation
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Global Service Providers and F100 Enterprises rely on the
            flexibility and reliability of Unitellas Edge Cloud to power the
            growing needs of modern business
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/edge-cloud/image-3.jpeg"
            alt="The Future - Edge Cloud Computing"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
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

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row-reverse lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/edge-cloud/image-4.jpeg"
            alt="Image of how edge cloud is transforming digital life"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Multi Tenant Environment. Single Tenant Experience.
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            With Unitellas Edge Cloud, multiple tenants are able to run compute
            and storage resources simultaneously on the same physical machines,
            without interfering with one another. You can maintain predictable
            performance, full data privacy and security, and full elasticity,
            regardless of how many users are active at once.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-contain"
            src="/assets/images/solutions/edge-cloud/image-5.png"
            alt="Industry-best NPS rating of 71"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Your Success is How We Measure Our Success.
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Backed by an industry-best NPS rating of 71, Unitellas Edge Cloud
            users are supported by Unitellas’s team of battle-tested cloud
            experts and backed by our 100% SLA guarantee. With Unitellas, you
            can rest assured that you are partnering with a cloud services
            provider that will stop at nothing to deliver best-in-class cloud
            services for your business.
          </p>
        </div>
      </div>
    </Layout>
  );
}
