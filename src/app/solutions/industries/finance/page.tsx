import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faArrowsRotate,
  faShieldHalved,
  faGaugeHigh,
  faDatabase,
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Solutions for Finance | Unitellas International Limited",
  description:
    "Explore Unitellas cloud infrastructure solutions for financial services organizations modernizing applications, data and digital services.",
  keywords: [
    "Finance Solutions Nigeria",
    "Cloud Solutions for Banks",
    "Financial Services Cloud Africa",
    "Unitellas Infrastructure for Banks",
    "Enterprise Cloud Africa",
    "Cloud Providers Nigeria",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/solutions/industries/finance",
  },
  openGraph: {
    title: "Cloud Solutions for Finance | Unitellas",
    description:
      "Cloud infrastructure designed to help financial services organizations modernize, scale and protect their data.",
    url: "https://www.unitellas.com.ng/solutions/industries/finance",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/assets/images/solutions/industries/finance/image-1.png",
        width: 1200,
        height: 630,
        alt: "Unitellas Cloud Solutions for Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Solutions for Finance | Unitellas",
    description:
      "Cloud infrastructure for financial services organizations across Africa.",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    images: [
      "https://www.unitellas.com.ng/assets/images/solutions/industries/finance/image-1.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const capabilities = [
  {
    icon: faBuildingColumns,
    title: "Financial Services Infrastructure",
    text: "Support established institutions, startups, commercial banks, brokerage services, mortgage lenders and other financial services environments.",
  },
  {
    icon: faArrowsRotate,
    title: "Modernization",
    text: "Connect legacy systems with modern cloud applications and fintech platforms while preserving mission-critical investments.",
  },
  {
    icon: faGaugeHigh,
    title: "Agility",
    text: "Use flexible cloud infrastructure to respond to changing application, data and digital service requirements.",
  },
  {
    icon: faShieldHalved,
    title: "Data Protection",
    text: "Support data governance, quality and protection requirements across financial services environments.",
  },
];

const focusAreas = [
  "Legacy application environments",
  "Modern cloud applications",
  "Fintech platforms",
  "Digital financial services",
  "Data management",
  "Governance and risk initiatives",
];

export default function Finance() {
  return (
    <Layout>
      <PageHeader
        title="Finance"
        subtitle="Cloud infrastructure designed to help financial services organizations modernize, adapt and protect critical data."
      />

      {/* Introduction */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <span className="unitellas-eyebrow">Financial Services</span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Infrastructure for a changing financial landscape.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#52697F] sm:text-lg">
                Unitellas powers enterprise-class data storage and management
                across financial services environments, whether organizations
                operate legacy software, cloud applications, online channels or
                newer fintech systems.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#52697F]">
                Its cloud-native structure and isolated resources are designed
                to support speed, security and agility across different types of
                financial services organizations.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#102A43]/10 bg-[#F5F8FA] px-4 py-2 text-xs font-semibold text-[#102A43]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-[#102A43] p-3 shadow-[0_24px_70px_rgba(16,42,67,0.16)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/assets/images/solutions/industries/finance/image-1.png"
                  alt="Financial services cloud infrastructure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="bg-[#F5F8FA] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="unitellas-eyebrow justify-center">
              Why Unitellas for Finance
            </span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              Infrastructure built around financial services.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#52697F] sm:text-lg">
              Support modernization and digital services without losing sight of
              the infrastructure and data requirements behind them.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <article key={capability.title} className="unitellas-card p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4FC] text-[#15C9E4]">
                  <FontAwesomeIcon icon={capability.icon} className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#102A43]">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#52697F]">
                  {capability.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modernize */}
      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-20">
          <div className="relative h-[340px] w-full overflow-hidden rounded-2xl lg:h-[440px] lg:w-[52%]">
            <Image
              src="/assets/images/solutions/industries/finance/image-1.png"
              alt="Modernizing financial services infrastructure"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-[48%]">
            <span className="unitellas-eyebrow">01 / Modernization</span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              Modernize without abandoning what already works.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#52697F]">
              Financial institutions often have mission-critical systems that
              remain central to their operations. Unitellas helps connect legacy
              environments with modern cloud and fintech applications,
              supporting modernization while preserving important existing
              investments.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Connect legacy systems with modern applications",
                "Support cloud and fintech environments",
                "Preserve mission-critical infrastructure investments",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm font-semibold text-[#102A43]"
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-[#15C9E4]"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stay agile */}
      <section className="bg-[#F5F8FA] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 lg:flex-row lg:gap-20">
          <div className="w-full lg:w-[48%]">
            <span className="unitellas-eyebrow">02 / Agility</span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              Stay ready for what changes next.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#52697F]">
              Financial services continue to evolve through new digital
              channels, open banking initiatives, blockchain and artificial
              intelligence. Flexible infrastructure helps technology teams
              respond as application and data requirements change.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Digital financial services",
                "Open banking environments",
                "Blockchain workloads",
                "AI-driven applications",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#102A43]/10 bg-white p-4 text-sm font-semibold text-[#102A43]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[340px] w-full overflow-hidden rounded-2xl lg:h-[440px] lg:w-[52%]">
            <Image
              src="/assets/images/solutions/industries/finance/image-2.png"
              alt="Cloud infrastructure supporting financial services"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Protect data */}
      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-20">
          <div className="relative h-[340px] w-full overflow-hidden rounded-2xl lg:h-[440px] lg:w-[52%]">
            <Image
              src="/assets/images/solutions/industries/finance/image-3.png"
              alt="Data protection and governance"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-[48%]">
            <span className="unitellas-eyebrow">03 / Data Protection</span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              Protect the data behind every service.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#52697F]">
              Unitellas delivers a data quality and governance framework that
              supports governance, risk and compliance initiatives across
              financial services environments.
            </p>

            <div className="mt-8 rounded-2xl border border-[#102A43]/10 bg-[#F5F8FA] p-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF4FC] text-[#15C9E4]">
                  <FontAwesomeIcon icon={faDatabase} className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-bold text-[#102A43]">Data governance</h3>

                  <p className="mt-2 text-sm leading-6 text-[#52697F]">
                    Build infrastructure around the data quality, governance and
                    protection requirements of your financial environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure foundation */}
      <section className="bg-[#102A43] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20">
            <div>
              <span className="unitellas-eyebrow">Cloud Infrastructure</span>

              <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                Infrastructure that can evolve with your financial services.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                Unitellas provides compute, networking, storage, protection and
                other cloud infrastructure capabilities that can support
                different financial services workloads.
              </p>

              <Link href="/solutions" className="unitellas-button-primary mt-8">
                Explore Cloud Services
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 h-3.5 w-3.5"
                />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {["Compute", "Networking", "Storage", "Protection & Backup"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="h-3.5 w-3.5 text-[#15C9E4]"
                      />

                      <span className="text-sm font-semibold text-white">
                        {item}
                      </span>
                    </div>
                  </div>
                ),
              )}
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
                <span className="unitellas-eyebrow">Financial Services</span>

                <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl">
                  Build the infrastructure behind your next financial service.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-300">
                  Discuss your organization&apos;s infrastructure, modernization
                  and data requirements with Unitellas.
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
