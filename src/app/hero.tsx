"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#102A43]">
      {/* Existing Unitellas technical background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-home-hero bg-cover bg-center"
      />

      {/* Dark overlay for readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#102A43]/75"
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      {/* Cyan atmospheric glow */}
      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-[#15C9E4]/10 blur-3xl"
      />

      <div className="unitellas-container flex min-h-[720px] items-center py-24 sm:py-28 lg:py-32">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#15C9E4]">
              <span className="h-px w-7 bg-[#15C9E4]" />
              Edge Cloud Infrastructure
            </span>

            <h1 className="mt-6 max-w-4xl font-Mongoose text-6xl leading-[0.9] tracking-wide text-white sm:text-7xl md:text-8xl lg:text-[7.5rem]">
              Infrastructure for what comes next.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
              Managed cloud infrastructure across compute, networking, storage,
              protection and more — designed for modern enterprises and service
              providers.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo"
                className="unitellas-button-primary min-h-14 px-7"
              >
                Schedule a Demo
              </Link>

              <Link
                href="/solutions"
                className="inline-flex min-h-14 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-7 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#15C9E4]/50 hover:bg-white/10"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>

          {/* Infrastructure panel */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:justify-self-end"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#102A43]/70 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-8 lg:max-w-lg">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#15C9E4]">
                    Cloud infrastructure
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Core platform capabilities
                  </p>
                </div>

                <span className="h-3 w-3 rounded-full bg-[#15C9E4] shadow-[0_0_18px_rgba(21,201,228,0.7)]" />
              </div>

              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
                {[
                  "Compute",
                  "Networking",
                  "Storage",
                  "Protection",
                  "Load Balancing",
                  "Monitoring",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#102A43]/90 p-5 transition-colors duration-200 hover:bg-[#163853]"
                  >
                    <span className="mb-4 block h-1.5 w-1.5 rounded-full bg-[#15C9E4]" />

                    <span className="text-sm font-semibold text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs leading-6 text-slate-400">
                  Built around managed cloud infrastructure and flexible
                  deployment models.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom edge */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#15C9E4]/50 to-transparent"
      />
    </section>
  );
};

export default Hero;
