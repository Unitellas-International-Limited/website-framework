import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government | Unitellas International Limited",
  description:
    "Explore how Unitellas allows government agencies to deliver more services more efficiently.",
  keywords: [
    "Cloud for Government Nigeria",
    "Edge Cloud Services for Government Sectors",
    "Unitellas Infrastructure for Nigerian Government",
    "Cloud Providers Nigeria",
    "Enterprise Cloud Africa",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/solutions/industries/government",
  },
  openGraph: {
    title: "Cloud Solutions for Government | Unitellas",
    description:
      "Explore our powerful edge cloud services and discover the right solution for your government or nation.",
    url: "https://www.unitellas.com.ng/solutions/industries/government",
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
    title:
      "Explore Our Cloud Solutions for Government agencies | Unitellas International Limited",
    description:
      "From storage to computing — discover cloud services tailored to your government.",
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

export default function Government() {
  return (
    <Layout>
      <PageHeader
        title="Government"
        subtitle="Unitellas allows government agencies to deliver services more efficiently."
      />
      <section className="px-4 py-12 sm:p-12">
        <h1 className="mb-5 text-center font-Mongoose text-5xl">
          Unitellas for Government
        </h1>
        <p className="text-center text-base">
          Citizens count on you to provide critical, sometimes lifesaving,
          services. Reliable access to data is critical to fulfilling on your
          mission. The Unitellas Enterprise Data Cloud — available on premises
          or through your chosen cloud provider — enables you to modernize your
          agency’s approach to data storage and management, ensuring greater
          access and availability, lower costs, and an end to data silos and
          migrations.
        </p>
      </section>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/industries/government/image-1.png"
            alt="The web of factors considered in Edge Cloud"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Give citizens greater access to data-driven services.
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Consolidate data, improve efficiency, and free up precious resources
            to meet citizens’ demands for more and improved services.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row-reverse lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/industries/government/image-2.png"
            alt="Unitellas edge cloud aids the finance industry"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Use taxpayer money wisely.
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            Grow (or shrink) as needed, without risk. No need to guess at your
            future capacity requirements. No traditional storage re-purchase
            cycle, no disruptive upgrades or data migrations.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-12 sm:gap-10 sm:p-12 md:flex-row lg:gap-20">
        <div className="h-96 w-full shrink-0 md:h-80 md:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/solutions/industries/government/image-3.png"
            alt="Shield with padlock unlocked in the middle"
            width={2000}
            height={500}
          />
        </div>
        <div>
          <h1 className="mx-auto mb-5 max-w-xs text-center font-Mongoose text-3xl md:mx-0 md:text-left">
            Keep sensitive data safe and secure.
          </h1>
          <p className="max-w-md text-center text-base md:text-left">
            With ISO27001 and SOC-2 compliance, Unitellas meets the stringent
            security requirements of government systems to store, protect, and
            enable sensitive, mission-critical data.
          </p>
        </div>
      </div>
    </Layout>
  );
}
