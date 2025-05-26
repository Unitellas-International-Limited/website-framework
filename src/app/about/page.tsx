import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import Row from "@/components/UI/Row";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Unitellas International Limited",
  description:
    "Learn about Unitellas International Limited — Africa’s first hyperscale edge cloud provider. Discover who we are, our mission and vision, and what makes us a leading cloud provider in Nigeria and Africa.",
  keywords: [
    "About Unitellas",
    "Unitellas International Company Info",
    "Edge Cloud Africa",
    "Cloud Provider Nigeria",
    "Computing and Storage Nigeria",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/about",
  },
  openGraph: {
    title: "About Us | Unitellas International Limited",
    description:
      "Discover Unitellas’ mission and story as Africa’s leading edge cloud provider.",
    url: "https://www.unitellas.com.ng/about",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/assets/images/about/who-we-are.jpg",
        width: 1200,
        height: 630,
        alt: "About Unitellas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Unitellas International Limited",
    description:
      "Explore our mission and vision as Africa’s first hyperscale edge cloud provider.",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    images: ["https://www.unitellas.com.ng/assets/images/about/who-we-are.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

const awards = [
  [
    "/assets/images/about/award1.png",
    "Cloud Infrastructure Provider of the Year 2022 from Tech Innovation Awards",
  ],
  [
    "/assets/images/about/award2.png",
    "Digital Economy Promoter 2022 award from Government Digital Promotion Awards 2022 (NITDA) ",
  ],
  [
    "/assets/images/about/award3.png",
    "Top 10 Cloud Solutions provider in Africa 2022 awarded by CIO Review",
  ],
];

export default function About() {
  return (
    <Layout>
      <PageHeader
        title="About Unitellas"
        subtitle="Enterprise Edge Cloud Services Provider"
      />

      <Row className="items-center">
        <div className="h-80 w-full shrink-0 xs:w-96">
          <Image
            className="h-full w-full object-cover"
            src="/assets/images/about/who-we-are.jpg"
            alt="Mr. Smith Osemeke, MD of Unitellas, recieving the South West zone - Digital Economy Promoter Award"
            width={1000}
            height={500}
          />
        </div>
        <div className="max-w-2xl">
          <h1 className="mb-2 font-Mongoose text-4xl">Who We Are</h1>
          <h3 className="mb-4 text-xl">
            The first hyper scale edge cloud in Africa
          </h3>
          <p className="text-lg">
            Unitellas International Limited is a leading IT company registered
            in Nigeria that deals with cloud services. We are the official
            distributor for Zadara Edge Cloud in Africa, delivering edge cloud
            infrastructure as a service to telecommunications operators and
            cloud service providers.
            <br />
            We empower african teleco&apos;s and cloud service providers by
            providing access to on-demand, enterprise-grade compute, networking
            and storage as a service (IaaS), designed to lower your costs,
            future-proof your infrastructure, and handle any workload.
          </p>
        </div>
      </Row>

      <Row>
        <div className="w-full lg:w-1/2">
          <h1 className="mb-2 font-Mongoose text-4xl">Our Mission</h1>
          <p className="text-lg">
            We aim to empower organizations move from a huge CAPEX to fully
            optimized OPEX based operations by transitioning to - as a service
            business model; by providing fully featured, fully elastic, full
            stack cloud infrastructure and IT solutions as a service to business
            organizations across Africa.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="mb-2 font-Mongoose text-4xl">Our Vision</h1>
          <p>
            We aim to be a technology leader in Africa, touching lives in the
            most important ways by influencing the way we transact business, are
            entertained and educated through digital solutions.
          </p>
        </div>
      </Row>
      <Row className="items-center">
        <div className="w-full lg:w-1/2">
          <h1 className="text-center text-5xl text-uni-blue font-semibold">
            Why Choose Us?
          </h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:w-1/2">
          <div>
            <h2 className="mb-2 text-lg font-medium">Empower</h2>
            <p className="text-lg">
              We empower our clients to serve their customers better by creating
              meaningful solutions to drive excellence.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-medium">Expand</h2>
            <p className="text-lg">
              We aid our clients in offering conveninece to their customers by
              leveraging new and emerging technologies.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-medium">Attract</h2>
            <p className="text-lg">
              We offer our clients solutions which distinguishes them in their
              industry and enables them to provide attractive and uninterrupted
              services.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-medium">Dominate</h2>
            <p className="text-lg">
              We aim to transform our clients businesses by aiding them with the
              required technologies to dominate their industries.
            </p>
          </div>
        </div>
      </Row>
      <Row className="items-center">
        <div className="flex w-full items-center justify-between gap-2 lg:w-1/2">
          {awards.map((award, index) => (
            <div className="w-1/3 shrink-0" key={index}>
              <Image
                className="h-full w-full object-contain"
                src={award[0]}
                alt={award[1]}
                width={1000}
                height={500}
              />
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="mb-2 font-Mongoose text-4xl">
            Industry Awards and Accolades
          </h1>
          <p className="text-lg">
            Our solutions have been recognized for innovation and leadership.
            The accolades include: Frost & Sullivan New Product Innovation
            Leadership Award; Cloud Computing Backup & Disaster Recovery; the
            Red Herring Global 100; and Dell Founders 50 are among some. We
            don&apos;t do it for the awards, but we appreciate the recognition.
          </p>
        </div>
      </Row>
    </Layout>
  );
}
