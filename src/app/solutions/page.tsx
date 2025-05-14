import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import { truncateString } from "@/helpers/truncateString";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Solutions | Unitellas International Limited",
  description:
    "Explore Unitellas’ comprehensive cloud solutions — from compute and storage to networking, backup and disaster recovery for modern enterprises.",
  keywords: [
    "Cloud Solutions Nigeria",
    "Edge Cloud Services",
    "Unitellas Infrastructure",
    "Cloud Providers Nigeria",
    "Enterprise Cloud Africa",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/solutions",
  },
  openGraph: {
    title: "Cloud Solutions for Business | Unitellas",
    description:
      "Explore our powerful edge cloud services and discover the right solution for your organization.",
    url: "https://www.unitellas.com.ng/solutions",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/assets/images/solutions/sovereign-cloud.jpg",
        width: 1200,
        height: 630,
        alt: "Unitellas Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Our Cloud Solutions | Unitellas International Limited",
    description:
      "From storage to computing — discover cloud services tailored to your enterprise.",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    images: [
      "https://www.unitellas.com.ng/assets/images/solutions/sovereign-cloud.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Solutions() {
  return (
    <Layout>
      <PageHeader
        title="Solutions"
        subtitle="We provide the best Cloud Services"
      />

      <div className="mx-auto max-w-7xl p-6 xl:p-12">
        <h1 className="mb-6 font-Mongoose text-6xl">Deployments</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:gap-8">
          <div className="flex flex-col items-center rounded-xl p-4 text-center shadow-xl">
            <div className="w-full">
              <Image
                className="h-60 w-full rounded-xl object-cover"
                src="/assets/images/solutions/edge-cloud.jpg"
                alt="companies"
                width={1000}
                height={500}
              />
            </div>
            <h2 className="m-3 text-center text-2xl font-semibold">
              Edge Cloud
            </h2>
            <p className="">
              {truncateString(
                `Compute power, data storage, backup, disaster recovery, and
              low-latency edge services - Unitellas Edge Cloud delivers future
              ready infrastructure-as-a-service solutions for global Service
              Providers and Enterprises`,
                200
              )}
              <Link
                href="/solutions/edge-cloud"
                className="ml-2 whitespace-nowrap border-b-2 text-[var(--color-uni-blue)] duration-300 hover:border-uni-blue"
              >
                See More
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl p-4 text-center shadow-xl">
            <div className="w-full">
              <Image
                className="h-60 w-full rounded-xl object-cover"
                src="/assets/images/solutions/sovereign-cloud.jpg"
                alt="companies"
                width={1000}
                height={500}
              />
            </div>
            <h2 className="m-3 text-center text-2xl font-semibold">
              Sovereign Cloud
            </h2>
            <p className="">
              {truncateString(
                `Unitellas global Edge Cloud service provider network is designed
              to give you the greatest possible control over your data and
              customers data, no matter where your business and customers are
              located. Unitellas unique approach reduces dependence on overseas
              cloud service providers who operate under nonresident legislation,
              mitigating potential security risks associated with hosting
              sensitive data outside of the host country.`,
                200
              )}
              <Link
                href="/solutions/sovereign-cloud"
                className="ml-2 whitespace-nowrap border-b-2 text-uni-blue duration-300 hover:border-uni-blue"
              >
                See More
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl p-4 text-center shadow-xl">
            <div className="w-full">
              <Image
                className="h-60 w-full rounded-xl object-cover"
                src="/assets/images/solutions/enterprise-compute.jpg"
                alt="companies"
                width={1000}
                height={500}
              />
            </div>
            <h2 className="m-3 text-center text-2xl font-semibold">
              Enterprise Compute
            </h2>
            <p className="">
              {truncateString(
                `Elastic cloud compute that scales to meet your business demands. Secure, dependable, and available where you need it. Move to the cloud, leave the cloud or simply need compute resources closer to the data source, zCompute delivers access to cloud compute capacity and scale on demand - you pay only for the resources used. `,
                200
              )}
              <Link
                href="/solutions/enterprise-compute"
                className="ml-2 whitespace-nowrap border-b-2 text-uni-blue duration-300 hover:border-uni-blue"
              >
                See More
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl p-6 xl:p-12">
        <h1 className="mb-6 font-Mongoose text-6xl">Industries</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:gap-8">
          <div className="flex flex-col items-center rounded-xl p-4 text-center shadow-xl">
            <div className="w-full">
              <Image
                className="h-60 w-full rounded-xl object-cover"
                src="/assets/images/solutions/edge-cloud.jpg"
                alt="companies"
                width={1000}
                height={500}
              />
            </div>
            <h2 className="m-3 text-center text-2xl font-semibold">Finance</h2>
            <p className="">
              {truncateString(
                `Unitellas powers enterprise-class data storage and management across any financial services environment, whether you use legacy software, cloud applications, online channels, or even new fintech systems. Unitellas’s cloud-native structure, with fully-isolated resources, operates with speed, security, and agility for financial services enterprises of all types, including established institutions, startups, commercial banks, brokerage services, mortgage lenders and more.`,
                200
              )}
              <Link
                href="/solutions/industries/finance"
                className="ml-2 whitespace-nowrap border-b-2 text-uni-blue duration-300 hover:border-uni-blue"
              >
                See More
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl p-4 text-center shadow-xl">
            <div className="w-full">
              <Image
                className="h-60 w-full rounded-xl object-cover"
                src="/assets/images/solutions/government.jpg"
                alt="companies"
                width={1000}
                height={500}
              />
            </div>
            <h2 className="m-3 text-center text-2xl font-semibold">
              Government
            </h2>
            <p className="">
              {truncateString(
                `Citizens count on you to provide critical, sometimes lifesaving, services. Reliable access to data is critical to fulfilling on your mission. The Unitellas Enterprise Data Cloud — available on premises or through your chosen cloud provider — enables you to modernize your agency’s approach to data storage and management, ensuring greater access and availability, lower costs, and an end to data silos and migrations.`,
                200
              )}
              <Link
                href="/solutions/industries/government"
                className="ml-2 whitespace-nowrap border-b-2 text-uni-blue duration-300 hover:border-uni-blue"
              >
                See More
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl p-4 text-center shadow-xl">
            <div className="w-full">
              <Image
                className="h-60 w-full rounded-xl object-cover"
                src="/assets/images/solutions/telecommunications.jpg"
                alt="companies"
                width={1000}
                height={500}
              />
            </div>
            <h2 className="m-3 text-center text-2xl font-semibold">
              Telecommunications
            </h2>
            <p className="">
              {truncateString(
                `Unitellas is developing the future of telecommunications at many of the world’s largest communications service providers (CSPs) – including the two of Africa’s largest. By partnering with Unitellas, CSPs are able to deliver fully-managed Infrastructure-as-a-Service (IaaS) solutions from a single edge cloud provider which means they can realize new revenue streams faster from cutting-edge 5G and edge services.`,
                200
              )}
              <Link
                href="/solutions/industries/telecommunications"
                className="ml-2 whitespace-nowrap border-b-2 text-uni-blue duration-300 hover:border-uni-blue"
              >
                See More
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
