import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTowerCell,
  faBolt,
  faNetworkWired,
  faServer,
  faChartLine,
  faMobileScreenButton,
  faMicrochip,
  faArrowTrendUp,
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cloud Solutions for Telecommunications | Unitellas International Limited",
  description:
    "Explore Unitellas cloud and edge infrastructure solutions for telecommunications companies, MNOs and MVNOs.",
  keywords: [
    "Cloud for Telecommunications Nigeria",
    "Edge Cloud Services for CSPs",
    "Unitellas Infrastructure for 5G",
    "Telecommunications Cloud Africa",
    "MNO Cloud Infrastructure",
    "MVNO Cloud Infrastructure",
  ],
  alternates: {
    canonical:
      "https://www.unitellas.com.ng/solutions/industries/telecommunications",
  },
  openGraph: {
    title: "Cloud Solutions for Telecommunications | Unitellas",
    description:
      "Edge cloud infrastructure for communications service providers, MNOs and MVNOs.",
    url: "https://www.unitellas.com.ng/solutions/industries/telecommunications",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/assets/images/solutions/industries/telecommunications/image-1.png",
        width: 1200,
        height: 630,
        alt: "Unitellas Cloud Solutions for Telecommunications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cloud Solutions for Telecommunications | Unitellas International Limited",
    description:
      "Edge cloud infrastructure for communications service providers.",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    images: [
      "https://www.unitellas.com.ng/assets/images/solutions/industries/telecommunications/image-1.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const capabilities = [
  {
    icon: faTowerCell,
    title: "Edge Infrastructure",
    text: "Bring cloud infrastructure closer to applications, connected devices and mobile services.",
  },
  {
    icon: faNetworkWired,
    title: "Network Performance",
    text: "Support infrastructure designed around the performance and availability requirements of communications workloads.",
  },
  {
    icon: faBolt,
    title: "Low-Latency Services",
    text: "Position infrastructure closer to workloads and users to help reduce latency for edge applications and services.",
  },
  {
    icon: faServer,
    title: "Managed IaaS",
    text: "Access fully managed infrastructure-as-a-service capabilities through a single cloud infrastructure provider.",
  },
];

const telecomUseCases = [
  "5G and edge services",
  "Mobile applications",
  "Connected devices",
  "IoT environments",
  "Network analytics",
  "Data-driven operations",
];

export default function Telecommunications() {
  return (
    <Layout>
      <PageHeader
        title="Telecommunications"
        subtitle="Developing future infrastructure for global communications, today."
      />

      {/* Introduction */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <span className="unitellas-eyebrow">
                Communications Service Providers
              </span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Infrastructure for the next generation of communications.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#52697F] sm:text-lg">
                Unitellas provides cloud infrastructure for communications
                service providers looking to deliver new services through edge,
                cloud and infrastructure-as-a-service capabilities.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#52697F]">
                By bringing compute, networking and storage capabilities closer
                to workloads and users, edge infrastructure can support
                applications and services that depend on performance and
                proximity.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {telecomUseCases.map((item) => (
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
                  src="/assets/images/solutions/industries/telecommunications/image-1.png"
                  alt="Telecommunications edge cloud infrastructure"
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
              Telecom Infrastructure
            </span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              Bring cloud and edge infrastructure together.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#52697F] sm:text-lg">
              Support communications workloads with infrastructure designed for
              performance, proximity, scalability and operational flexibility.
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

      {/* Digital transformation */}
      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-20">
          <div className="relative h-[340px] w-full overflow-hidden rounded-2xl lg:h-[440px] lg:w-[52%]">
            <Image
              src="/assets/images/solutions/industries/telecommunications/image-1.png"
              alt="Digital transformation infrastructure"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-[48%]">
            <span className="unitellas-eyebrow">
              01 / Digital Transformation
            </span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              Accelerate the digital transformation journey.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#52697F]">
              Communications providers are continuously adapting their
              infrastructure to support new applications and services. Unitellas
              provides managed infrastructure capabilities that can help
              technology teams focus on those services while reducing the
              operational burden of infrastructure management.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Managed infrastructure",
                "Performance-focused architecture",
                "Cloud and edge capabilities",
                "24/7 infrastructure operations",
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

      {/* Edge */}
      <section className="bg-[#102A43] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 lg:flex-row lg:gap-20">
          <div className="w-full lg:w-[48%]">
            <span className="unitellas-eyebrow">02 / Edge Networking</span>

            <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl">
              Optimize your network for the edge.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              For MNOs and MVNOs, bringing cloud and edge infrastructure closer
              together can help address latency requirements for applications,
              connected devices and mobile services.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "MNO infrastructure",
                "MVNO environments",
                "Connected devices",
                "Mobile services",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white"
                >
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="/solutions/edge-cloud"
              className="unitellas-button-primary mt-8"
            >
              Explore Edge Cloud
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 h-3.5 w-3.5"
              />
            </Link>
          </div>

          <div className="relative h-[340px] w-full overflow-hidden rounded-2xl lg:h-[440px] lg:w-[52%]">
            <Image
              src="/assets/images/solutions/industries/telecommunications/image-2.png"
              alt="Mobile devices and edge cloud infrastructure"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Economics */}
      <section className="bg-[#F5F8FA] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-20">
          <div className="relative h-[340px] w-full overflow-hidden rounded-2xl lg:h-[440px] lg:w-[52%]">
            <Image
              src="/assets/images/solutions/industries/telecommunications/image-3.png"
              alt="Consumption-based cloud infrastructure"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-contain bg-[#EAF4FC]"
            />
          </div>

          <div className="w-full lg:w-[48%]">
            <span className="unitellas-eyebrow">03 / Cloud Economics</span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              Keep cloud economics predictable.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#52697F]">
              Unitellas provides a consumption-based cloud service model
              designed around paying for the infrastructure and services your
              organization uses.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#52697F]">
              The Unitellas service catalogue also documents no ingress or
              egress fees for Edge Cloud, helping simplify the cost model for
              applicable Edge Cloud services.
            </p>

            <div className="mt-8 rounded-2xl border border-[#102A43]/10 bg-white p-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF4FC] text-[#15C9E4]">
                  <FontAwesomeIcon icon={faArrowTrendUp} className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-bold text-[#102A43]">
                    Consumption-based model
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#52697F]">
                    Service rates depend on location, configuration, service,
                    performance requirements and commercial arrangements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 lg:flex-row lg:gap-20">
          <div className="w-full lg:w-[48%]">
            <span className="unitellas-eyebrow">04 / Data Intelligence</span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              Turn infrastructure data into operational insight.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#52697F]">
              Gain insights that can support network performance management,
              data-driven decision-making, fraud detection and IoT environments
              at scale.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: faChartLine,
                  title: "Network Performance",
                },
                {
                  icon: faMobileScreenButton,
                  title: "Connected Services",
                },
                {
                  icon: faMicrochip,
                  title: "IoT at Scale",
                },
                {
                  icon: faArrowTrendUp,
                  title: "Data-Driven Decisions",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="unitellas-card flex items-center gap-4 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF4FC] text-[#15C9E4]">
                    <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
                  </div>

                  <span className="text-sm font-bold text-[#102A43]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[340px] w-full overflow-hidden rounded-2xl lg:h-[440px] lg:w-[52%]">
            <Image
              src="/assets/images/solutions/industries/telecommunications/image-4.png"
              alt="Unitellas cloud service dashboard and infrastructure insights"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
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
                  Communications Infrastructure
                </span>

                <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl">
                  Build the edge infrastructure behind your next service.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-300">
                  Discuss your network, edge, compute and infrastructure
                  requirements with Unitellas.
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
