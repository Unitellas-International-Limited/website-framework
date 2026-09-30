import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faLocationDot,
  faGlobeAfrica,
  faSliders,
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sovereign Cloud | Unitellas International Limited",
  description:
    "Explore Unitellas Sovereign Cloud capabilities for organizations that require greater control over data, infrastructure, jurisdiction and deployment.",
  keywords: [
    "Sovereign Cloud for Nigeria",
    "Sovereign Cloud Africa",
    "Unitellas Sovereign Cloud",
    "Data Sovereignty",
    "Secure Cloud Infrastructure",
    "Enterprise Cloud Africa",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/solutions/sovereign-cloud",
  },
  openGraph: {
    title: "Sovereign Cloud | Unitellas",
    description:
      "Cloud infrastructure designed around data control, jurisdiction and organizational requirements.",
    url: "https://www.unitellas.com.ng/solutions/sovereign-cloud",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/assets/images/solutions/sovereign-cloud.jpg",
        width: 1200,
        height: 630,
        alt: "Unitellas Sovereign Cloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign Cloud | Unitellas International Limited",
    description:
      "Explore cloud infrastructure designed around data control, jurisdiction and flexibility.",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    images: [
      "https://www.unitellas.com.ng/assets/images/solutions/sovereign-cloud.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const benefits = [
  {
    icon: faShieldHalved,
    title: "Security & Compliance",
    text: "Our local partners provide security capabilities such as encryption, multi-factor authentication and continuous monitoring, while supporting relevant localized data protection requirements.",
  },
  {
    icon: faLocationDot,
    title: "Sovereign by Design",
    text: "Deploy infrastructure with greater control over where workloads and data reside while supporting low-latency services closer to customers and users.",
  },
  {
    icon: faGlobeAfrica,
    title: "Global Reach. Local Appeal.",
    text: "Deliver cloud services across locations while maintaining the flexibility to align infrastructure with local business and data requirements.",
  },
];

const sovereigntyPillars = [
  {
    title: "Ownership & Control",
    description:
      "Sovereign cloud services are owned, operated and managed under local jurisdiction, providing organizations and governments greater control and security over sensitive data.",
    image: "/assets/images/solutions/sovereign-cloud/image-2.jpg",
    alt: "A team of people trying to lift a flag",
    reverse: true,
  },
  {
    title: "Jurisdiction & Compliance",
    description:
      "Sovereign clouds are designed around local and regional data privacy requirements, helping organizations align their cloud environments with the regulatory context in which they operate.",
    image: "/assets/images/solutions/sovereign-cloud/image-3.jpg",
    alt: "Board with tasks checked off",
    reverse: false,
  },
  {
    title: "Customization & Flexibility",
    description:
      "Sovereign cloud environments can be customized to meet the specific requirements of government agencies and organizations handling sensitive data.",
    image: "/assets/images/solutions/sovereign-cloud/image-4.jpg",
    alt: "Laptop with code opened and a magnifying glass",
    reverse: true,
  },
];

const controlAreas = [
  "Where your data is stored",
  "Where workloads are processed",
  "How infrastructure is deployed",
  "Who can access sensitive environments",
  "How cloud environments align with local requirements",
  "How infrastructure is adapted to organizational needs",
];

export default function SovereignCloud() {
  return (
    <Layout>
      <PageHeader
        title="True Data Sovereignty"
        subtitle="Get greater control over your data, infrastructure and cloud environment with Unitellas Sovereign Cloud."
      />

      {/* Introduction */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <div className="relative h-[360px] overflow-hidden rounded-2xl sm:h-[440px]">
              <Image
                src="/assets/images/solutions/sovereign-cloud/image-1.jpg"
                alt="Organizations using sovereign cloud infrastructure"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <span className="unitellas-eyebrow">Data Sovereignty</span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Control where your data lives.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#52697F] sm:text-lg">
                Unitellas&apos; global Edge Cloud service provider network is
                designed to give organizations greater control over their data
                and customers&apos; data, regardless of where their business and
                customers are located.
              </p>

              <p className="mt-5 text-base leading-8 text-[#52697F]">
                Its approach is designed to reduce dependence on overseas cloud
                service providers operating under nonresident legislation when
                organizations need greater control over sensitive data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#F5F8FA] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="unitellas-eyebrow justify-center">
              Key Benefits
            </span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              Sovereignty designed into the cloud.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#52697F]">
              Build cloud environments around the security, location and
              operational requirements of your organization.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="unitellas-card p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4FC] text-[#15C9E4]">
                  <FontAwesomeIcon icon={benefit.icon} className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#102A43]">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#52697F]">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* True Sovereign Cloud */}
      <section className="bg-[#102A43] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="unitellas-eyebrow">A True Sovereign Cloud</span>

              <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                Your infrastructure. Your jurisdiction. Greater control.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-300">
                Cloud providers may operate infrastructure across different
                geographic locations while remaining subject to the laws and
                regulations applicable to their headquartered organizations.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Sovereign cloud environments are designed to give organizations
                greater control over how their sensitive data and workloads are
                managed.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {controlAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#15C9E4]/10 text-[#15C9E4]">
                    <FontAwesomeIcon icon={faCheck} className="h-3 w-3" />
                  </div>

                  <span className="text-sm leading-6 text-slate-200">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sovereignty pillars */}
      <section className="bg-white">
        {sovereigntyPillars.map((pillar, index) => (
          <div
            key={pillar.title}
            className={`px-6 py-16 sm:px-8 lg:px-10 lg:py-24 ${
              index % 2 === 1 ? "bg-[#F5F8FA]" : "bg-white"
            }`}
          >
            <div
              className={`mx-auto flex max-w-7xl flex-col items-center gap-10 lg:gap-20 ${
                pillar.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="relative h-[320px] w-full overflow-hidden rounded-2xl lg:h-[420px] lg:w-[52%]">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
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
                  {pillar.title}
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#52697F]">
                  {pillar.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Deployment flexibility */}
      <section className="bg-[#F5F8FA] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="unitellas-eyebrow">Flexible Deployment</span>

                <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
                  Deploy according to your requirements.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[#52697F]">
                  Unitellas documents public, private, on-premises and edge
                  deployment options, giving organizations flexibility in how
                  cloud infrastructure is positioned and operated.
                </p>
              </div>

              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#EAF4FC] text-[#15C9E4]">
                <FontAwesomeIcon icon={faSliders} className="h-8 w-8" />
              </div>
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
                <span className="unitellas-eyebrow">Talk to Unitellas</span>

                <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl">
                  Build cloud infrastructure around your data requirements.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-300">
                  Discuss your organization&apos;s data, deployment and
                  infrastructure requirements with the Unitellas team.
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
