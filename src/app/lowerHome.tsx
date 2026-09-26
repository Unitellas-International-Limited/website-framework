"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import AnimatedCarousel from "@/components/UI/AnimatedCarousel";

const images = [
  {
    name: "Africa Data Centres",
    src: "/assets/images/home-carousel/adc-logo.jpg",
  },
  {
    name: "Asigra",
    src: "/assets/images/home-carousel/asigra-logo.png",
  },
  {
    name: "Inq.",
    src: "/assets/images/home-carousel/inq-logo.png",
  },
  {
    name: "Galaxy Backbone Limited",
    src: "/assets/images/home-carousel/gbb-logo.png",
  },
  {
    name: "National Information Technology Development Agency",
    src: "/assets/images/home-carousel/nitda-logo.png",
  },
  {
    name: "PN Consulting Limited",
    src: "/assets/images/home-carousel/pn-logo.png",
  },
  {
    name: "RackWare",
    src: "/assets/images/home-carousel/rackware-logo.png",
  },
  {
    name: "Sheiks & Bishops",
    src: "/assets/images/home-carousel/sheiks-logo.png",
  },
  {
    name: "Sidmach Technologies",
    src: "/assets/images/home-carousel/sidmach-logo.png",
  },
  {
    name: "Treten Networks",
    src: "/assets/images/home-carousel/treten-logo.png",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Compute",
    text: "Virtual machines, snapshots, key pairs and auto scaling for flexible workloads.",
    href: "/solutions/enterprise-compute",
  },
  {
    number: "02",
    title: "Networking",
    text: "VPCs, subnets, route tables, network interfaces, security groups and connectivity services.",
    href: "/solutions",
  },
  {
    number: "03",
    title: "Storage",
    text: "Block storage, file shares and object storage for different workload requirements.",
    href: "/solutions",
  },
  {
    number: "04",
    title: "Protection",
    text: "Backup and protection capabilities designed to support workloads and data.",
    href: "/solutions",
  },
  {
    number: "05",
    title: "Load Balancing",
    text: "Distribute application traffic across resources for more resilient application delivery.",
    href: "/solutions",
  },
  {
    number: "06",
    title: "Monitoring",
    text: "Infrastructure visibility through monitoring, metrics and alerting capabilities.",
    href: "/solutions",
  },
];

const platformCharacteristics = [
  {
    title: "Managed cloud service",
    text: "Access infrastructure through a managed cloud service rather than operating every layer yourself.",
  },
  {
    title: "Consumption-based",
    text: "Use a consumption-based model that allows infrastructure resources to align with changing requirements.",
  },
  {
    title: "Flexible deployment",
    text: "Support public, private, on-premises and edge deployment models.",
  },
  {
    title: "AWS-compatible",
    text: "AWS-compatible capabilities help teams work with familiar cloud patterns and tooling.",
  },
  {
    title: "Data sovereignty",
    text: "Infrastructure designed with data location and sovereignty requirements in mind.",
  },
  {
    title: "Multi-tenant architecture",
    text: "A multi-tenant architecture designed to support different organizations and workloads.",
  },
];

const solutions = [
  {
    number: "01",
    title: "Edge Cloud",
    text: "Compute power, storage, networking and protection for workloads that benefit from edge deployment.",
    href: "/solutions/edge-cloud",
  },
  {
    number: "02",
    title: "Sovereign Cloud",
    text: "Infrastructure designed around greater control of where data and workloads are deployed.",
    href: "/solutions/sovereign-cloud",
  },
  {
    number: "03",
    title: "Enterprise Compute",
    text: "Flexible compute infrastructure for enterprise workloads and application environments.",
    href: "/solutions/enterprise-compute",
  },
];

const LowerHome = () => {
  return (
    <>
      {/* Ecosystem / logo strip */}
      <section className="border-b border-[#102A43]/8 bg-white">
        <div className="unitellas-container py-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#71859A]">
              Organizations and technology ecosystem
            </p>

            <p className="text-xs text-[#9AA9B7]">
              Selected organizations represented in our existing site materials
            </p>
          </div>
        </div>

        <div className="border-t border-[#102A43]/5">
          <AnimatedCarousel images={images} />
        </div>
      </section>

      {/* Core positioning */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <div className="unitellas-container">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <span className="unitellas-eyebrow">Cloud infrastructure</span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
                The infrastructure your workloads need.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-[#52697F] sm:text-xl">
                Unitellas provides access to enterprise-grade compute,
                networking and storage infrastructure as a service, supporting
                workloads across on-premises, hybrid, multi-cloud and edge
                environments.
              </p>

              <p className="mt-6 text-base leading-8 text-[#71859A]">
                The platform brings together core cloud infrastructure
                capabilities in a managed service model, giving organizations a
                flexible foundation for changing technology requirements.
              </p>

              <Link
                href="/solutions"
                className="mt-8 inline-flex items-center text-sm font-bold text-[#102A43] transition-colors hover:text-[#15C9E4]"
              >
                Explore our solutions
                <span className="ml-2 text-lg">→</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Capabilities */}
      <section className="bg-[#F5F8FA] py-20 sm:py-24 lg:py-28">
        <div className="unitellas-container">
          <div className="mb-14 max-w-3xl">
            <span className="unitellas-eyebrow">Platform capabilities</span>

            <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
              Core services. One infrastructure foundation.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#52697F] sm:text-lg">
              From compute and networking to storage, monitoring and protection,
              Unitellas brings together the infrastructure capabilities modern
              workloads require.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <Link
                key={capability.number}
                href={capability.href}
                className="group rounded-2xl border border-[#102A43]/8 bg-white p-7 shadow-[0_8px_30px_rgba(16,42,67,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#15C9E4]/30 hover:shadow-[0_20px_50px_rgba(16,42,67,0.08)] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.14em] text-[#15C9E4]">
                    {capability.number}
                  </span>

                  <span className="text-xl text-[#102A43]/20 transition-colors group-hover:text-[#15C9E4]">
                    ↗
                  </span>
                </div>

                <h3 className="mt-10 font-Mongoose text-4xl leading-none text-[#102A43] sm:text-5xl">
                  {capability.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#52697F]">
                  {capability.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform characteristics */}
      <section className="relative overflow-hidden bg-[#102A43] py-20 sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#15C9E4]/10 blur-3xl"
        />

        <div className="unitellas-container relative">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <span className="unitellas-eyebrow">Platform model</span>

              <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                Flexible infrastructure for changing requirements.
              </h2>

              <p className="mt-7 max-w-md text-base leading-8 text-slate-300 sm:text-lg">
                Unitellas is designed around the way modern organizations
                deploy, manage and scale infrastructure.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {platformCharacteristics.map((item) => (
                <div key={item.title} className="bg-[#102A43] p-7 sm:p-8">
                  <span className="mb-6 block h-2 w-2 rounded-full bg-[#15C9E4]" />

                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="unitellas-container">
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="unitellas-eyebrow">Solutions</span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Infrastructure shaped around the workload.
              </h2>
            </div>

            <Link
              href="/solutions"
              className="unitellas-button-secondary shrink-0"
            >
              View All Solutions
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Link
                key={solution.number}
                href={solution.href}
                className="group relative overflow-hidden rounded-2xl bg-[#F5F8FA] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,42,67,0.08)] sm:p-9"
              >
                <span className="text-xs font-bold tracking-[0.14em] text-[#15C9E4]">
                  {solution.number}
                </span>

                <h3 className="mt-10 font-Mongoose text-5xl text-[#102A43] transition-colors group-hover:text-[#15C9E4]">
                  {solution.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#52697F]">
                  {solution.text}
                </p>

                <span className="mt-8 inline-flex text-sm font-bold text-[#102A43]">
                  Explore
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* African context */}
      <section className="bg-[#EAF4FC] py-20 sm:py-24 lg:py-28">
        <div className="unitellas-container">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <span className="unitellas-eyebrow">Built for Africa</span>

              <h2 className="unitellas-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">
                Infrastructure that meets organizations where they operate.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#52697F] sm:text-lg">
                African organizations operate across different technology
                environments, from traditional infrastructure and private
                deployments to hybrid, multi-cloud and edge environments.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#52697F] sm:text-lg">
                Unitellas provides a flexible infrastructure foundation for
                those environments, with deployment options that include public,
                private, on-premises and edge models.
              </p>
            </div>

            <div className="rounded-2xl border border-[#102A43]/8 bg-white p-7 shadow-[0_15px_50px_rgba(16,42,67,0.06)] sm:p-9">
              <div className="space-y-0">
                {[
                  "Public cloud",
                  "Private cloud",
                  "On-premises",
                  "Edge deployment",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-center justify-between py-5 ${
                      index !== 3 ? "border-b border-[#102A43]/8" : ""
                    }`}
                  >
                    <span className="text-sm font-semibold text-[#102A43]">
                      {item}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#15C9E4]" />
                  </div>
                ))}
              </div>

              <Link
                href="/solutions/sovereign-cloud"
                className="mt-7 inline-flex text-sm font-bold text-[#102A43] hover:text-[#15C9E4]"
              >
                Explore Sovereign Cloud
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="unitellas-container">
          <div className="relative overflow-hidden rounded-3xl bg-[#102A43] px-7 py-14 sm:px-12 sm:py-16 lg:px-16">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#15C9E4]/10 blur-3xl"
            />

            <div className="relative flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#15C9E4]">
                  Start a conversation
                </span>

                <h2 className="mt-5 font-Mongoose text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                  Let’s build the infrastructure your organization needs next.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Explore Unitellas solutions or speak with our team about your
                  infrastructure requirements.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  onClick={() => {
                    sendGTMEvent({
                      event: "buttonClicked",
                      value: "Go to Contact Page",
                    });
                  }}
                  className="unitellas-button-secondary border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  Contact Us
                </Link>

                <Link
                  href="/demo"
                  onClick={() => {
                    sendGTMEvent({
                      event: "buttonClicked",
                      value: "Go to Demo Page",
                    });
                  }}
                  className="unitellas-button-primary"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LowerHome;
