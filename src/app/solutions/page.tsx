import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faNetworkWired,
  faDatabase,
  faScaleBalanced,
  faServer,
  faChartLine,
  faCertificate,
  faShieldHalved,
  faKey,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";

export const metadata: Metadata = {
  title: "Cloud Solutions | Unitellas International Limited",
  description:
    "Explore Unitellas cloud infrastructure services across compute, networking, storage, load balancing, monitoring, protection, identity and more.",
  keywords: [
    "Unitellas Cloud Services",
    "Cloud Infrastructure Nigeria",
    "Edge Cloud Africa",
    "Enterprise Cloud Services",
    "Cloud Compute",
    "Cloud Storage",
    "Cloud Networking",
    "Sovereign Cloud",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/solutions",
  },
  openGraph: {
    title: "Cloud Solutions | Unitellas International Limited",
    description:
      "Cloud infrastructure services for modern enterprises across Africa.",
    url: "https://www.unitellas.com.ng/solutions",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/assets/images/solutions/edge-cloud.jpg",
        width: 1200,
        height: 630,
        alt: "Unitellas Cloud Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Solutions | Unitellas International Limited",
    description:
      "Cloud infrastructure services for modern enterprises across Africa.",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    images: [
      "https://www.unitellas.com.ng/assets/images/solutions/edge-cloud.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const cloudServices = [
  {
    title: "Compute",
    icon: faMicrochip,
    description:
      "Virtual machines and supporting capabilities for running applications and workloads.",
    capabilities: [
      "Virtual Machines",
      "Snapshots",
      "Key Pairs",
      "Auto Scaling",
    ],
  },
  {
    title: "Networking",
    icon: faNetworkWired,
    description:
      "Flexible virtual networking for connecting, routing and securing cloud workloads.",
    capabilities: [
      "VPC & Subnets",
      "Route Tables",
      "VPC Peering",
      "NAT Gateway",
      "DNS",
      "Security Groups",
    ],
  },
  {
    title: "Storage",
    icon: faDatabase,
    description:
      "Cloud storage options designed to support different workload and application requirements.",
    capabilities: [
      "Block Storage",
      "Volume Types",
      "File Shares",
      "Object Storage",
    ],
  },
  {
    title: "Load Balancing",
    icon: faScaleBalanced,
    description:
      "Distribute application traffic across resources to support resilient workloads.",
    capabilities: ["Load Balancers"],
  },
  {
    title: "Machine Images",
    icon: faServer,
    description:
      "Reusable machine images for deploying and managing consistent cloud environments.",
    capabilities: ["Machine Images"],
  },
  {
    title: "Monitoring",
    icon: faChartLine,
    description:
      "Visibility into cloud resources and workloads to support operational awareness.",
    capabilities: ["Monitoring"],
  },
  {
    title: "Certificates",
    icon: faCertificate,
    description:
      "Certificate capabilities for securing cloud-hosted applications and services.",
    capabilities: ["Certificates"],
  },
  {
    title: "Protection & Backup",
    icon: faShieldHalved,
    description:
      "Protection and backup capabilities designed to support data resilience and recovery.",
    capabilities: ["Protection", "Backup"],
  },
  {
    title: "Identity & Access",
    icon: faKey,
    description:
      "Access management capabilities for controlling users, permissions and cloud resources.",
    capabilities: ["Identity", "Access Management"],
  },
];

const deployments = [
  {
    title: "Edge Cloud",
    image: "/assets/images/solutions/edge-cloud.jpg",
    description:
      "Deploy compute, storage, backup and disaster recovery closer to where your workloads and users are located.",
    href: "/solutions/edge-cloud",
  },
  {
    title: "Sovereign Cloud",
    image: "/assets/images/solutions/sovereign-cloud.jpg",
    description:
      "Maintain greater control over where your data and workloads reside while reducing dependence on overseas infrastructure.",
    href: "/solutions/sovereign-cloud",
  },
  {
    title: "Enterprise Compute",
    image: "/assets/images/solutions/enterprise-compute.jpg",
    description:
      "Provision scalable compute infrastructure for demanding enterprise applications and workloads.",
    href: "/solutions/enterprise-compute",
  },
];

const industries = [
  {
    title: "Finance",
    image: "/assets/images/solutions/edge-cloud.jpg",
    description:
      "Cloud infrastructure for financial workloads that require reliability, security and operational resilience.",
    href: "/solutions/industries/finance",
  },
  {
    title: "Government",
    image: "/assets/images/solutions/government.jpg",
    description:
      "Infrastructure designed to support government workloads, digital services and data requirements.",
    href: "/solutions/industries/government",
  },
  {
    title: "Telecommunications",
    image: "/assets/images/solutions/telecommunications.jpg",
    description:
      "Flexible infrastructure for telecom workloads, distributed applications and demanding network environments.",
    href: "/solutions/industries/telecommunications",
  },
];

const platformCharacteristics = [
  "Managed cloud service",
  "Consumption-based model",
  "Public, private, on-premises and edge deployment",
  "AWS-compatible capabilities",
  "Multi-tenant architecture",
  "Data sovereignty",
];

export default function Solutions() {
  return (
    <Layout>
      <PageHeader
        title="Solutions"
        subtitle="Cloud infrastructure designed for modern enterprises across Africa."
      />

      {/* Intro */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="unitellas-eyebrow">Cloud Infrastructure</span>

              <h2 className="unitellas-heading mt-5 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">
                The infrastructure your workloads need.
              </h2>
            </div>

            <div>
              <p className="unitellas-muted max-w-xl text-base leading-8 sm:text-lg">
                From compute and networking to storage, protection and access
                management, Unitellas provides the core cloud infrastructure
                services enterprises need to deploy and operate modern
                workloads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section
        id="cloud-services"
        className="bg-[#F5F8FA] px-6 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="unitellas-eyebrow">Cloud Services</span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              Build on a complete cloud foundation.
            </h2>

            <p className="unitellas-muted mt-6 text-base leading-8">
              Core infrastructure services for deploying, connecting, monitoring
              and protecting your workloads.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cloudServices.map((service) => (
              <article
                key={service.title}
                className="unitellas-card group p-7 sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4FC] text-[#15C9E4] transition group-hover:bg-[#15C9E4] group-hover:text-[#102A43]">
                  <FontAwesomeIcon icon={service.icon} className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#102A43]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#52697F]">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-[#102A43]/10 pt-5">
                  {service.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-2 text-sm text-[#52697F]"
                    >
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="mt-1 h-3 w-3 shrink-0 text-[#15C9E4]"
                      />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platform characteristics */}
      <section className="bg-[#102A43] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="unitellas-eyebrow">Built for flexibility</span>

              <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                Cloud infrastructure without unnecessary constraints.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                Choose infrastructure and deployment options that align with
                your workload, operating model and data requirements.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {platformCharacteristics.map((characteristic) => (
                <div
                  key={characteristic}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#15C9E4]/10 text-[#15C9E4]">
                    <FontAwesomeIcon icon={faCheck} className="h-3 w-3" />
                  </div>

                  <span className="text-sm leading-6 text-slate-200">
                    {characteristic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Models */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="unitellas-eyebrow">Deployment Models</span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
                Deploy where your business needs you to.
              </h2>
            </div>

            <Link href="/demo" className="unitellas-button-secondary shrink-0">
              Discuss your requirements
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 h-3.5 w-3.5"
              />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {deployments.map((deployment) => (
              <Link
                key={deployment.title}
                href={deployment.href}
                className="group overflow-hidden rounded-2xl border border-[#102A43]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#15C9E4]/30 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={deployment.image}
                    alt={deployment.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-[#102A43]/10 to-transparent" />

                  <div className="absolute bottom-5 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white">
                      {deployment.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-7 text-[#52697F]">
                    {deployment.description}
                  </p>

                  <span className="mt-5 inline-flex items-center text-sm font-bold text-[#102A43] transition group-hover:text-[#15C9E4]">
                    Explore solution
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#F5F8FA] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="unitellas-eyebrow">Industries</span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              Infrastructure for critical industries.
            </h2>

            <p className="unitellas-muted mt-6 text-base leading-8">
              Support the workloads, applications and digital services that keep
              your organization operating.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="group relative min-h-[360px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#102A43]/50 transition group-hover:bg-[#102A43]/65" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="text-3xl font-bold text-white">
                    {industry.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
                    {industry.description}
                  </p>

                  <span className="mt-5 inline-flex items-center text-sm font-bold text-[#15C9E4]">
                    Explore industry
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
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
                <span className="unitellas-eyebrow">Talk to Unitellas</span>

                <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl">
                  Let&apos;s design the right infrastructure for your workload.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-300">
                  Tell us what you&apos;re building, where you need to deploy
                  and what your infrastructure needs to support.
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
