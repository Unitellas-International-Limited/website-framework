import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faNetworkWired,
  faDatabase,
  faGaugeHigh,
  faShieldHalved,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";

export const metadata: Metadata = {
  title: "Unitellas Edge Cloud | Unitellas International Limited",
  description:
    "Unitellas Edge Cloud provides managed compute, networking, storage, backup, disaster recovery and low-latency infrastructure for enterprises and service providers.",
  keywords: [
    "Unitellas Edge Cloud",
    "Edge Cloud Africa",
    "Edge Cloud Nigeria",
    "Enterprise Cloud Infrastructure",
    "Managed Cloud Services",
    "Cloud Compute",
    "Cloud Storage",
    "Cloud Networking",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/solutions/edge-cloud",
  },
  openGraph: {
    title: "Unitellas Edge Cloud | Unitellas International Limited",
    description:
      "Managed edge cloud infrastructure for modern enterprises and service providers.",
    url: "https://www.unitellas.com.ng/solutions/edge-cloud",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/assets/images/solutions/edge-cloud/image-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Unitellas Edge Cloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unitellas Edge Cloud",
    description:
      "Managed compute, networking, storage and edge cloud infrastructure.",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    images: [
      "https://www.unitellas.com.ng/assets/images/solutions/edge-cloud/image-1.jpeg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const capabilities = [
  {
    title: "Compute",
    icon: faMicrochip,
    description:
      "Secure, elastic compute resources for running enterprise workloads and applications.",
  },
  {
    title: "Networking",
    icon: faNetworkWired,
    description:
      "Flexible cloud networking designed to connect workloads and support distributed environments.",
  },
  {
    title: "Storage",
    icon: faDatabase,
    description:
      "Cloud storage capabilities for persistent application and enterprise data.",
  },
  {
    title: "Performance",
    icon: faGaugeHigh,
    description:
      "Infrastructure designed to bring cloud resources closer to workloads and users.",
  },
  {
    title: "Protection",
    icon: faShieldHalved,
    description:
      "Backup, protection and disaster recovery capabilities for resilient workloads.",
  },
];

const transformationPoints = [
  "Managed cloud infrastructure",
  "Elastic compute, networking and storage",
  "Self-service infrastructure capabilities",
  "Consumption-based operating model",
  "Edge deployment options",
  "Multi-tenant architecture",
];

const sections = [
  {
    title: "Accelerate Your App and Cloud Transformation",
    description:
      "Global Service Providers and F100 Enterprises rely on the flexibility and reliability of Unitellas Edge Cloud to power the growing needs of modern business.",
    image: "/assets/images/solutions/edge-cloud/image-1.jpeg",
    alt: "The globe with different edge cloud locations",
    reverse: false,
  },
  {
    title: "Cloud Infrastructure Built for Performance",
    description:
      "Unitellas Edge Cloud brings compute, networking and storage capabilities together in a managed cloud environment, helping organizations deploy infrastructure where it is needed.",
    image: "/assets/images/solutions/edge-cloud/image-2.jpeg",
    alt: "Unitellas Edge Cloud locations around the globe",
    reverse: true,
  },
  {
    title: "Do More. Faster.",
    description:
      "Edge Cloud Services featuring zCompute, zStorage and zNetworking are available on-demand with enterprise-grade capabilities. For organizations looking for secure, highly available, highly performant, flexible and reliable infrastructure, Unitellas provides the foundation.",
    image: "/assets/images/solutions/edge-cloud/image-3.jpeg",
    alt: "The future of edge cloud computing",
    reverse: false,
  },
  {
    title: "Multi-Tenant Environment. Single-Tenant Experience.",
    description:
      "With Unitellas Edge Cloud, multiple tenants are able to run compute and storage resources simultaneously on the same physical machines without interfering with one another. This supports predictable performance, data privacy, security and elasticity.",
    image: "/assets/images/solutions/edge-cloud/image-4.jpeg",
    alt: "Edge cloud transforming digital infrastructure",
    reverse: true,
  },
];

export default function EdgeCloud() {
  return (
    <Layout>
      <PageHeader
        title="Unitellas Edge Cloud"
        subtitle="Compute power, data storage, backup, disaster recovery, and low-latency edge services for modern enterprises and service providers."
      />

      {/* Intro */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <span className="unitellas-eyebrow">
                Edge Cloud Infrastructure
              </span>

              <h2 className="unitellas-heading mt-5 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">
                Built to be the foundation of your business.
              </h2>
            </div>

            <div>
              <p className="unitellas-muted text-base leading-8 sm:text-lg">
                The Unitellas Edge Cloud enables you to pivot from managing
                infrastructure to focusing on growing your business. Get secure,
                elastic and robust self-service compute, networking and storage
                in a fully managed service.
              </p>

              <p className="mt-5 text-sm font-semibold text-[#102A43]">
                A simple, straightforward and 100% OpEx pricing model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#F5F8FA] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="unitellas-eyebrow">Core Capabilities</span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              The building blocks of your cloud environment.
            </h2>

            <p className="unitellas-muted mt-6 text-base leading-8">
              Unitellas Edge Cloud brings core infrastructure capabilities
              together so enterprises can build, deploy and operate workloads in
              a managed environment.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="unitellas-card group p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4FC] text-[#15C9E4] transition group-hover:bg-[#15C9E4] group-hover:text-[#102A43]">
                  <FontAwesomeIcon icon={capability.icon} className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#102A43]">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#52697F]">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="bg-[#102A43] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="unitellas-eyebrow">Why Edge Cloud</span>

              <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                Transform infrastructure into an enabler for growth.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                Move beyond infrastructure management and give your teams the
                cloud capabilities they need to support modern applications and
                growing workloads.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {transformationPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#15C9E4]/10 text-[#15C9E4]">
                    <FontAwesomeIcon icon={faCheck} className="h-3 w-3" />
                  </div>

                  <span className="text-sm leading-6 text-slate-200">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation sections */}
      <section className="bg-white">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className={`px-6 py-16 sm:px-8 lg:px-10 lg:py-24 ${
              index % 2 === 1 ? "bg-[#F5F8FA]" : "bg-white"
            }`}
          >
            <div
              className={`mx-auto flex max-w-7xl flex-col items-center gap-10 lg:gap-20 ${
                section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="relative h-[320px] w-full overflow-hidden rounded-2xl lg:h-[420px] lg:w-[52%]">
                <Image
                  src={section.image}
                  alt={section.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover transition duration-500 hover:scale-[1.02]"
                />
              </div>

              <div className="w-full lg:w-[48%]">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#15C9E4]">
                  0{index + 1}
                </span>

                <h2 className="mt-4 font-Mongoose text-4xl leading-none text-[#102A43] sm:text-5xl">
                  {section.title}
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#52697F]">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Customer success */}
      <section className="bg-[#F5F8FA] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm">
              <Image
                src="/assets/images/solutions/edge-cloud/image-5.png"
                alt="Industry-best NPS rating of 71"
                width={2000}
                height={500}
                className="h-auto w-full object-contain"
              />
            </div>

            <div>
              <span className="unitellas-eyebrow">Customer Success</span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
                Your success is how we measure our success.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#52697F]">
                Backed by an industry-best NPS rating of 71, Unitellas Edge
                Cloud users are supported by Unitellas&apos;s team of
                battle-tested cloud experts and backed by our 100% SLA
                guarantee.
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#52697F]">
                With Unitellas, you can rest assured that you are partnering
                with a cloud services provider focused on delivering
                enterprise-grade cloud services for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-[#102A43] px-7 py-14 sm:px-12 lg:px-16 lg:py-16">
            <div
              aria-hidden="true"
              className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#15C9E4]/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[#15C9E4]/5 blur-3xl"
            />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="unitellas-eyebrow">Get Started</span>

                <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl">
                  Bring your workloads closer to the edge.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-300">
                  Talk to Unitellas about the infrastructure your workloads
                  require and how Edge Cloud can fit into your environment.
                </p>
              </div>

              <Link href="/demo" className="unitellas-button-primary shrink-0">
                Schedule a Demo
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 h-3.5 w-3.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
