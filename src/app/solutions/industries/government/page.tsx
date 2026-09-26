import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faUsers,
  faChartLine,
  faShieldHalved,
  faDatabase,
  faServer,
  faCloudArrowUp,
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Solutions for Government | Unitellas International Limited",
  description:
    "Explore Unitellas cloud infrastructure solutions for government agencies seeking reliable data access, operational efficiency and secure infrastructure.",
  keywords: [
    "Cloud for Government Nigeria",
    "Government Cloud Nigeria",
    "Sovereign Cloud for Government",
    "Unitellas Infrastructure for Government",
    "Cloud Providers Nigeria",
    "Enterprise Cloud Africa",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/solutions/industries/government",
  },
  openGraph: {
    title: "Cloud Solutions for Government | Unitellas",
    description:
      "Cloud infrastructure designed to help government agencies modernize data management and deliver services more efficiently.",
    url: "https://www.unitellas.com.ng/solutions/industries/government",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/assets/images/solutions/industries/government/image-1.png",
        width: 1200,
        height: 630,
        alt: "Unitellas Cloud Solutions for Government",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Solutions for Government | Unitellas",
    description:
      "Cloud infrastructure for government agencies and public-sector organizations.",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    images: [
      "https://www.unitellas.com.ng/assets/images/solutions/industries/government/image-1.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const capabilities = [
  {
    icon: faUsers,
    title: "Citizen Services",
    text: "Support data-driven digital services designed to help government agencies respond to citizens' growing service requirements.",
  },
  {
    icon: faDatabase,
    title: "Data Management",
    text: "Consolidate data and modernize storage and management across government environments.",
  },
  {
    icon: faChartLine,
    title: "Operational Efficiency",
    text: "Use flexible infrastructure to improve resource utilization and reduce the operational burden associated with traditional infrastructure.",
  },
  {
    icon: faShieldHalved,
    title: "Data Protection",
    text: "Support the storage, protection and availability of sensitive and mission-critical government data.",
  },
];

const infrastructureAreas = [
  "Public cloud",
  "Private cloud",
  "On-premises infrastructure",
  "Edge deployments",
  "Data storage",
  "Protection and backup",
];

export default function Government() {
  return (
    <Layout>
      <PageHeader
        title="Government"
        subtitle="Cloud infrastructure designed to help government agencies deliver services more efficiently while maintaining control over critical data."
      />

      {/* Introduction */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <span className="unitellas-eyebrow">Public Sector</span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Infrastructure for services citizens depend on.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#52697F] sm:text-lg">
                Citizens count on government agencies to provide critical
                services. Reliable access to data is therefore an important part
                of fulfilling that mission.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#52697F]">
                Unitellas provides cloud infrastructure that can be deployed
                across different environments, helping government organizations
                modernize their approach to data storage and management.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {infrastructureAreas.map((item) => (
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
                  src="/assets/images/solutions/industries/government/image-1.png"
                  alt="Cloud infrastructure for government services"
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
              Government Infrastructure
            </span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              Build the infrastructure behind better public services.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#52697F] sm:text-lg">
              Bring data, infrastructure and digital services together in an
              environment designed around the operational requirements of
              government organizations.
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

      {/* Citizen services */}
      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-20">
          <div className="relative h-[340px] w-full overflow-hidden rounded-2xl lg:h-[440px] lg:w-[52%]">
            <Image
              src="/assets/images/solutions/industries/government/image-1.png"
              alt="Data-driven government services"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-[48%]">
            <span className="unitellas-eyebrow">01 / Citizen Services</span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              Give citizens greater access to data-driven services.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#52697F]">
              Consolidating data and improving infrastructure efficiency can
              help government agencies free resources to focus on delivering
              more and better services to citizens.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Consolidate data",
                "Improve infrastructure efficiency",
                "Reduce data silos",
                "Support digital public services",
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

      {/* Efficiency */}
      <section className="bg-[#F5F8FA] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 lg:flex-row lg:gap-20">
          <div className="w-full lg:w-[48%]">
            <span className="unitellas-eyebrow">02 / Resource Efficiency</span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              Use infrastructure resources more efficiently.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#52697F]">
              Government workloads can change over time. Flexible cloud
              infrastructure allows organizations to provision resources
              according to their requirements rather than relying exclusively on
              fixed infrastructure capacity.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#52697F]">
              This can reduce the need to anticipate every future capacity
              requirement and help organizations adapt infrastructure as their
              needs change.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Flexible capacity",
                "Consumption-based model",
                "Managed infrastructure",
                "Reduced infrastructure overhead",
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
              src="/assets/images/solutions/industries/government/image-2.png"
              alt="Flexible government cloud infrastructure"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-[#102A43] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-20">
          <div className="relative h-[340px] w-full overflow-hidden rounded-2xl lg:h-[440px] lg:w-[52%]">
            <Image
              src="/assets/images/solutions/industries/government/image-3.png"
              alt="Protection of sensitive government data"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-[48%]">
            <span className="unitellas-eyebrow">03 / Data Protection</span>

            <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl">
              Keep sensitive data protected.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              Government organizations manage sensitive and often
              mission-critical information. Unitellas provides infrastructure
              capabilities for storing, protecting and managing data across
              supported cloud environments.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#15C9E4]/10 text-[#15C9E4]">
                  <FontAwesomeIcon icon={faShieldHalved} className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    Security and compliance
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Your current page states that Unitellas meets ISO 27001 and
                    SOC 2 requirements. Confirm the current certification status
                    before publishing this statement as a current marketing
                    claim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sovereignty / deployment */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
            <div>
              <span className="unitellas-eyebrow">Deployment Flexibility</span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
                Deploy infrastructure where your organization needs it.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#52697F]">
                Unitellas documents support for public, private, on-premises and
                edge deployment models. This gives government organizations
                flexibility in how infrastructure is positioned and operated.
              </p>

              <Link
                href="/solutions/sovereign-cloud"
                className="unitellas-button-secondary mt-8"
              >
                Explore Sovereign Cloud
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 h-3.5 w-3.5"
                />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: faCloudArrowUp,
                  title: "Public",
                },
                {
                  icon: faServer,
                  title: "Private",
                },
                {
                  icon: faLandmark,
                  title: "On-Premises",
                },
                {
                  icon: faDatabase,
                  title: "Edge",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="unitellas-card flex items-center gap-4 p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF4FC] text-[#15C9E4]">
                    <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
                  </div>

                  <span className="font-bold text-[#102A43]">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F8FA] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
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
                <span className="unitellas-eyebrow">
                  Public Sector Infrastructure
                </span>

                <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl">
                  Build infrastructure for the services citizens depend on.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-300">
                  Discuss your agency&apos;s infrastructure, data management and
                  deployment requirements with Unitellas.
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
