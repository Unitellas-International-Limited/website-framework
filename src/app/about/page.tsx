import Image from "next/image";
import { Metadata } from "next";

import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";

export const metadata: Metadata = {
  title: "About Us | Unitellas International Limited",
  description:
    "Learn about Unitellas International Limited, our mission, vision, and approach to cloud infrastructure for organizations across Africa.",
  keywords: [
    "About Unitellas",
    "Unitellas International",
    "Edge Cloud Africa",
    "Cloud Provider Nigeria",
    "Cloud Infrastructure Africa",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/about",
  },
  openGraph: {
    title: "About Us | Unitellas International Limited",
    description:
      "Discover Unitellas, our mission, vision, and approach to cloud infrastructure across Africa.",
    url: "https://www.unitellas.com.ng/about",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/assets/images/about/who-we-are.jpg",
        width: 1200,
        height: 630,
        alt: "Unitellas International Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Unitellas International Limited",
    description:
      "Explore Unitellas' mission, vision, and approach to cloud infrastructure across Africa.",
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
  {
    image: "/assets/images/about/award1.png",
    title: "Cloud Infrastructure Provider of the Year 2022",
    organization: "Tech Innovation Awards",
  },
  {
    image: "/assets/images/about/award2.png",
    title: "Digital Economy Promoter 2022",
    organization: "Government Digital Promotion Awards 2022 (NITDA)",
  },
  {
    image: "/assets/images/about/award3.png",
    title: "Top 10 Cloud Solutions Provider in Africa 2022",
    organization: "CIO Review",
  },
];

const principles = [
  {
    number: "01",
    title: "Empower",
    description:
      "We empower our clients to serve their customers better by creating meaningful solutions that drive excellence.",
  },
  {
    number: "02",
    title: "Expand",
    description:
      "We aid our clients in offering convenience to their customers by leveraging new and emerging technologies.",
  },
  {
    number: "03",
    title: "Attract",
    description:
      "We offer our clients solutions that distinguish them in their industry and enable them to provide attractive and uninterrupted services.",
  },
  {
    number: "04",
    title: "Dominate",
    description:
      "We aim to transform our clients' businesses by providing the technologies they need to compete and grow in their industries.",
  },
];

export default function About() {
  return (
    <Layout>
      <PageHeader
        title="About Unitellas"
        subtitle="Enterprise Edge Cloud Services Provider"
      />

      {/* Who We Are */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="unitellas-container">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/assets/images/about/who-we-are.jpg"
                alt="Unitellas International Limited"
                width={1000}
                height={500}
                className="h-[360px] w-full object-cover sm:h-[460px]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102A43]/80 via-[#102A43]/20 to-transparent p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#15C9E4]">
                  Unitellas International
                </span>
              </div>
            </div>

            <div>
              <span className="unitellas-eyebrow">Who we are</span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Infrastructure built for what comes next.
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-[#52697F] sm:text-lg">
                <p>
                  Unitellas International Limited is a leading IT company
                  registered in Nigeria that deals with cloud services.
                </p>

                <p>
                  We are the official distributor for Zadara Edge Cloud in
                  Africa, delivering edge cloud infrastructure as a service to
                  telecommunications operators and cloud service providers.
                </p>

                <p>
                  We empower African telcos and cloud service providers with
                  access to on-demand, enterprise-grade compute, networking and
                  storage as a service (IaaS), designed to lower costs,
                  future-proof infrastructure, and handle demanding workloads.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                {[
                  "Cloud Infrastructure",
                  "Compute",
                  "Networking",
                  "Storage",
                  "Edge Cloud",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#102A43]/10 bg-[#F5F8FA] px-4 py-2 text-xs font-semibold text-[#102A43]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-[#F5F8FA] py-20 sm:py-24 lg:py-28">
        <div className="unitellas-container">
          <div className="mb-14 max-w-3xl">
            <span className="unitellas-eyebrow">Our direction</span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
              Why we exist. Where we are going.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="unitellas-card overflow-hidden p-8 sm:p-10 lg:p-12">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#15C9E4]">
                  Mission
                </span>

                <span className="font-Mongoose text-5xl text-[#102A43]/10">
                  01
                </span>
              </div>

              <h3 className="font-Mongoose text-5xl leading-none text-[#102A43] sm:text-6xl">
                Moving infrastructure forward.
              </h3>

              <p className="mt-7 text-base leading-8 text-[#52697F] sm:text-lg">
                We aim to empower organizations to move from huge CAPEX to fully
                optimized OPEX-based operations by transitioning to an
                as-a-service business model; by providing fully featured, fully
                elastic, full-stack cloud infrastructure and IT solutions as a
                service to business organizations across Africa.
              </p>
            </article>

            <article className="overflow-hidden rounded-2xl bg-[#102A43] p-8 text-white shadow-[0_20px_60px_rgba(16,42,67,0.14)] sm:p-10 lg:p-12">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#15C9E4]">
                  Vision
                </span>

                <span className="font-Mongoose text-5xl text-white/10">02</span>
              </div>

              <h3 className="font-Mongoose text-5xl leading-none text-white sm:text-6xl">
                Technology that touches lives.
              </h3>

              <p className="mt-7 text-base leading-8 text-slate-300 sm:text-lg">
                We aim to be a technology leader in Africa, touching lives in
                the most important ways by influencing the way we transact
                business, are entertained and educated through digital
                solutions.
              </p>

              <div className="mt-10 h-px w-full bg-white/10" />

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
                Our focus is on building the infrastructure that enables
                organizations to deliver digital services and adapt to a
                changing technology landscape.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="unitellas-container">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="unitellas-eyebrow">Our principles</span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
                How we create value.
              </h2>

              <p className="mt-7 max-w-md text-base leading-8 text-[#52697F] sm:text-lg">
                Our approach is centered on helping organizations use technology
                to improve services, create new opportunities and strengthen
                their position in their industries.
              </p>
            </div>

            <div className="divide-y divide-[#102A43]/10 border-y border-[#102A43]/10">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="group grid gap-5 py-8 sm:grid-cols-[72px_1fr] sm:items-start"
                >
                  <span className="text-sm font-bold tracking-[0.12em] text-[#15C9E4]">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="font-Mongoose text-4xl text-[#102A43] transition-colors duration-200 group-hover:text-[#15C9E4] sm:text-5xl">
                      {principle.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-base leading-7 text-[#52697F]">
                      {principle.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Positioning */}
      <section className="relative overflow-hidden bg-[#102A43] py-20 sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#15C9E4]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#15C9E4]/5 blur-3xl"
        />

        <div className="unitellas-container relative">
          <div className="max-w-4xl">
            <span className="unitellas-eyebrow">
              Built for African organizations
            </span>

            <h2 className="mt-6 font-Mongoose text-5xl leading-none text-white sm:text-6xl lg:text-8xl">
              Cloud infrastructure without unnecessary complexity.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Unitellas provides access to cloud infrastructure across compute,
              networking, storage, protection and other core infrastructure
              capabilities, supporting organizations as their technology
              requirements evolve.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Compute",
                text: "Virtual machines and scalable compute resources.",
              },
              {
                title: "Networking",
                text: "Network infrastructure for connected workloads.",
              },
              {
                title: "Storage",
                text: "Block, file and object storage capabilities.",
              },
              {
                title: "Protection",
                text: "Backup and protection capabilities for workloads and data.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#102A43] p-7 transition-colors duration-200 hover:bg-[#163853]"
              >
                <div className="mb-5 h-2 w-2 rounded-full bg-[#15C9E4]" />

                <h3 className="font-Mongoose text-3xl text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-[#F5F8FA] py-20 sm:py-24 lg:py-28">
        <div className="unitellas-container">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <span className="unitellas-eyebrow">Recognition</span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Industry awards &amp; accolades.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#52697F] sm:text-lg">
                Our solutions have been recognized for innovation and
                leadership. Recognition has included awards and industry
                mentions across cloud infrastructure and digital technology.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#71859A]">
                The awards shown here reflect the recognition listed in our
                existing company materials.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {awards.map((award) => (
                <article
                  key={award.title}
                  className="unitellas-card flex min-h-[280px] flex-col items-center justify-between p-6 text-center"
                >
                  <div className="flex h-36 w-full items-center justify-center">
                    <Image
                      src={award.image}
                      alt={`${award.title} — ${award.organization}`}
                      width={300}
                      height={180}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-bold leading-5 text-[#102A43]">
                      {award.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#71859A]">
                      {award.organization}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="unitellas-container">
          <div className="relative overflow-hidden rounded-3xl bg-[#EAF4FC] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#15C9E4]/15 blur-3xl"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="unitellas-eyebrow">Work with Unitellas</span>

                <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
                  Build what your organization needs next.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[#52697F] sm:text-lg">
                  Explore our cloud infrastructure solutions or speak with our
                  team about your requirements.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <a href="/solutions" className="unitellas-button-secondary">
                  Explore Solutions
                </a>

                <a href="/demo" className="unitellas-button-primary">
                  Schedule a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
