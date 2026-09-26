import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faServer,
  faGaugeHigh,
  faArrowsRotate,
  faLayerGroup,
  faCamera,
  faChartLine,
  faCode,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/UI/Layout";
import PageHeader from "@/components/UI/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Compute | Unitellas International Limited",
  description:
    "Develop, deploy, run and virtualize applications on Unitellas zCompute with flexible enterprise compute infrastructure.",
  keywords: [
    "Enterprise Compute",
    "zCompute",
    "Cloud Compute Nigeria",
    "Virtual Machines Nigeria",
    "Enterprise Cloud Africa",
    "Unitellas Compute",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/solutions/enterprise-compute",
  },
  openGraph: {
    title: "Enterprise Compute | Unitellas",
    description:
      "Flexible enterprise compute infrastructure for developing, deploying and running applications.",
    url: "https://www.unitellas.com.ng/solutions/enterprise-compute",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/assets/images/solutions/enterprise-compute/image-1.png",
        width: 1200,
        height: 630,
        alt: "Unitellas Enterprise Compute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Compute | Unitellas International Limited",
    description:
      "Develop, deploy, run and virtualize applications on Unitellas zCompute.",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    images: [
      "https://www.unitellas.com.ng/assets/images/solutions/enterprise-compute/image-1.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const capabilities = [
  {
    icon: faServer,
    title: "Virtual Machines",
    text: "Provision virtualized compute resources for applications and workloads through Unitellas zCompute.",
  },
  {
    icon: faLayerGroup,
    title: "Flexible Instance Types",
    text: "Choose from standard and premium instance types designed to match different workload requirements.",
  },
  {
    icon: faArrowsRotate,
    title: "Auto Scaling",
    text: "Automatically scale compute resources according to defined policies to support availability, performance and resource utilization.",
  },
  {
    icon: faGaugeHigh,
    title: "Load Balancing",
    text: "Distribute application traffic across available compute and networking capacity to support application performance and availability.",
  },
  {
    icon: faCode,
    title: "AWS EC2-Compatible APIs",
    text: "Consume zCompute services using AWS EC2-compatible APIs for a familiar cloud consumption experience.",
  },
  {
    icon: faCamera,
    title: "VM Snapshots",
    text: "Create snapshots of virtual machines and use them to restore VMs when required.",
  },
  {
    icon: faChartLine,
    title: "Monitoring & Management",
    text: "Manage virtualized infrastructure through a web-based dashboard with monitoring, alerting and resource reporting.",
  },
  {
    icon: faBolt,
    title: "On-Demand Infrastructure",
    text: "Access compute resources when you need them and deploy infrastructure across supported environments.",
  },
];

const workloadPoints = [
  "Small application workloads",
  "Performance-intensive workloads",
  "Memory-intensive workloads",
  "Cloud migration",
  "Workloads closer to your data",
  "Virtualized enterprise infrastructure",
];

export default function EnterpriseCompute() {
  return (
    <Layout>
      <PageHeader
        title="Enterprise Compute"
        subtitle="Flexible compute infrastructure for developing, deploying, running and virtualizing modern applications."
      />

      {/* Hero / Product introduction */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
            <div>
              <span className="unitellas-eyebrow">zCompute</span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Compute built around your workloads.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#52697F] sm:text-lg">
                Develop, deploy, run and virtualize applications on zCompute.
                Secure, flexible and available wherever your infrastructure
                needs to operate.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#52697F]">
                Whether you want to move to the cloud, leave the cloud or need
                resources closer to your data, zCompute provides enterprise
                compute infrastructure designed around those requirements.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Virtual Machines",
                  "Auto Scaling",
                  "Snapshots",
                  "Load Balancing",
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

            <div className="relative overflow-hidden rounded-2xl bg-[#102A43] p-3 shadow-[0_24px_70px_rgba(16,42,67,0.16)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/assets/images/solutions/enterprise-compute/image-1.png"
                  alt="Representation of the Unitellas Edge Cloud Service Dashboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability grid */}
      <section className="bg-[#F5F8FA] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="unitellas-eyebrow">Compute Capabilities</span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
              Everything you need to run your workloads.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#52697F] sm:text-lg">
              zCompute brings together virtualized compute, scaling, management,
              monitoring and protection capabilities in one enterprise
              infrastructure environment.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="unitellas-card group p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4FC] text-[#15C9E4] transition-colors duration-200 group-hover:bg-[#15C9E4] group-hover:text-[#102A43]">
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

      {/* Workloads */}
      <section className="bg-[#102A43] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <span className="unitellas-eyebrow">Workload Flexibility</span>

              <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                Match compute to the work your business needs to do.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-300">
                Standard and premium instance types provide options for
                different workload requirements, from smaller applications to
                performance- and memory-intensive deployments.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {workloadPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#15C9E4]/10 text-[#15C9E4]">
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

      {/* Management */}
      <section className="bg-white">
        <div className="px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-20">
            <div className="relative h-[340px] w-full overflow-hidden rounded-2xl lg:h-[440px] lg:w-[52%]">
              <Image
                src="/assets/images/solutions/enterprise-compute/image-2.png"
                alt="24/7 infrastructure management"
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
            </div>

            <div className="w-full lg:w-[48%]">
              <span className="unitellas-eyebrow">Managed Infrastructure</span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
                Focus on your applications. Not your infrastructure.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#52697F]">
                Unitellas provides a managed cloud service designed to reduce
                the operational burden of managing infrastructure, allowing
                teams to focus on the applications and services running on it.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Web-based management",
                  "Resource monitoring",
                  "Automated alerting",
                  "Detailed reporting",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold text-[#102A43]"
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="h-3.5 w-3.5 text-[#15C9E4]"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F8FA] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 lg:flex-row lg:gap-20">
            <div className="w-full lg:w-[48%]">
              <span className="unitellas-eyebrow">
                Enterprise Infrastructure
              </span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
                Do more. Faster.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#52697F]">
                Edge Cloud Services featuring zCompute, zStorage and zNetworking
                are available on-demand with enterprise-grade capabilities for
                secure, highly available, high-performance, flexible and
                reliable infrastructure.
              </p>

              <Link
                href="/solutions/edge-cloud"
                className="unitellas-button-secondary mt-8"
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
                src="/assets/images/solutions/enterprise-compute/image-3.png"
                alt="Enterprise cloud infrastructure"
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure model */}
      <section className="bg-[#F5F8FA] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-white p-8 sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <span className="unitellas-eyebrow">Infrastructure Model</span>

                <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl">
                  Built on commodity hardware. Managed through software.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[#52697F]">
                  Unitellas combines its virtualization software with enterprise
                  infrastructure to provide a managed compute environment. The
                  result is an infrastructure platform that abstracts the
                  complexity of the underlying hardware.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-[#102A43] p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/assets/images/solutions/enterprise-compute/image-1.png"
                    alt="Unitellas cloud service dashboard"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
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
                  Ready to put your workloads on enterprise compute?
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-300">
                  Discuss your compute requirements and find an infrastructure
                  configuration that fits your workloads.
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
