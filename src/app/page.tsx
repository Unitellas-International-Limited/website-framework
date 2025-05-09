import type { Metadata } from "next";
import { motion } from "framer-motion";
import { BaseButton, BaseButtonWithColor } from "@/components/UI/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faShieldHalved,
  faGlobe,
  faHandshake,
  faUsers,
  faNetworkWired,
  faArrowsToCircle,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "@/components/UI/Nav";
import AnimatedCarousel from "@/components/UI/AnimatedCarousel";
import { sendGTMEvent } from "@next/third-parties/google";

export default function Home() {
  const iconClasses = "h-28 text-[#1379B4] mb-4";
  const features = [
    {
      icon: <FontAwesomeIcon icon={faShieldHalved} className={iconClasses} />,
      title: "Zero risk, on demand cloud services.",
      text: "Improve your cloud services with access to fully managed IT infrastructure on demand. Only pay for what you use. Scale up, down, or turn it off at any time. No long term contracts or CapEx hardware investments.",
    },
    {
      icon: <FontAwesomeIcon icon={faArrowsToCircle} className={iconClasses} />,
      title: "Hybrid ready by design.",
      text: "Simplify complex distributed infrastructure whether, on-prem, across multiple clouds or at the edge. Centralize your management capabilities and deliver the best price-performance ratio for any workload.",
    },
    {
      icon: <FontAwesomeIcon icon={faGlobe} className={iconClasses} />,
      title: "Global reach. Local appeal.",
      text: "Deliver the performance and reliability your customers expect no matter the location. Offer low-latency edge services with Unitellas's existing fully-managed clouds or global base of 300+ MSP partners.",
    },
    {
      icon: <FontAwesomeIcon icon={faHandshake} className={iconClasses} />,
      title: "Trust your cloud.",
      text: "Take control of your data with Unitellas's secure-by-design infrastructure, data protection solutions, and our global network of partners. Isolate your data with click-to-provision options for dedicated storage at the controller level.",
    },
    {
      icon: <FontAwesomeIcon icon={faNetworkWired} className={iconClasses} />,
      title: "Centralized and easy monitoring.",
      text: "Access Unitellas's simple dashboard based cloud management. Web-based interface to monitor your applications and infrastructure with visualized dashboards, automated monitoring and alerting and detailed reporting.",
    },
    {
      icon: <FontAwesomeIcon icon={faUsers} className={iconClasses} />,
      title: `24/7/365 DevOps support.`,
      text: "Free your IT team from ongoing maintenance. Unitellas delivers around-the-clock, proactive monitoring and support, and seamless upgrades, backed by our industry-best uptime SLAs.",
    },
  ];
  const images = [
    "/assets/images/home-carousel/adc-logo.jpg",
    "/assets/images/home-carousel/asigra-logo.png",
    "/assets/images/home-carousel/cwg-logo.png",
    "/assets/images/home-carousel/inq-logo.png",
    "/assets/images/home-carousel/gbb-logo.png",
    "/assets/images/home-carousel/itex-logo.png",
    "/assets/images/home-carousel/nitda-logo.png",
    "/assets/images/home-carousel/pn-logo.png",
    "/assets/images/home-carousel/rackware-logo.png",
    "/assets/images/home-carousel/sheiks-logo.png",
    "/assets/images/home-carousel/sidmach-logo.png",
    "/assets/images/home-carousel/treten-logo.png",
  ];
  return (
    <>
      <main className="h-screen w-full bg-home-hero bg-cover bg-center">
        <Nav />
        <div className="mx-auto flex h-5/6 max-w-7xl flex-col items-start justify-center gap-8 overflow-hidden p-8 md:flex-row md:items-center md:justify-between md:gap-16">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ type: "tween", duration: 1 }}
            className="text-white"
          >
            <h1 className="mb-4 font-Mongoose text-7xl md:text-9xl">
              Unitellas Edge Cloud
            </h1>
            <p className="text-2xl">
              Fully-managed edge cloud services.
              <br />
              Compute, networking, storage and more.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: "100%", scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ type: "tween", duration: 1 }}
            className="flex w-full flex-col gap-6 md:w-auto"
          >
            <Link href="/demo">
              <BaseButton
                text="Start a Live Demo Today"
                className="w-lg md:w-full"
              />
            </Link>

            <Link href="/quote">
              <BaseButton
                text="Get a quote"
                size={width < 480 ? "full" : "lg"}
              />
            </Link>
          </motion.div>
        </div>
      </main>
      <section className="w-full bg-gradient-to-br from-gray-800 to-black p-5">
        <h1 className="text-center text-lg text-white sm:text-xl">
          Trusted by leading companies and service providers around the world.
        </h1>
      </section>
      <AnimatedCarousel images={images} />
      <motion.section
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl p-14 text-center"
      >
        <h1 className="mb-6 font-Mongoose text-3xl text-black sm:text-5xl">
          Fully managed cloud services &minus; compute, networking, storage and
          more &minus; designed for service providers and the modern enterprise.
        </h1>
        <p className="mb-12 text-gray-700">
          Access on-demand, enterprise-grade compute, networking and storage
          designed to handle any workload, anywhere &minus; on-premises, hybrid,
          multi-cloud and at the edge. Get fully-managed, pay-for-use cloud
          services to lower your costs and future-proof your infrastructure.
        </p>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <div key={encodeURI(feature.title)}>
              {feature.icon}
              <h1 className="mb-4 font-Mongoose text-2xl sm:mb-0 sm:h-[72px] sm:text-3xl">
                {feature.title}
              </h1>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-700 px-8 py-20 text-white"
      >
        <div>
          <h1 className="my-4 text-center font-Mongoose text-5xl sm:text-7xl">
            Get Started
          </h1>
          <p className="my-8 text-center">
            Find out for yourself how easy enterprise cloud services can be.
            Sign up for a free trial or contact us now for more info.
          </p>
          <div className="md: my-8 flex flex-col items-center justify-center gap-8 sm:flex-row">
            <BaseButton
              text="Contact Us"
              type="link"
              onClick={() => {
                sendGTMEvent({
                  event: "buttonClicked",
                  value: "Go to Contact Page",
                });
              }}
              href="/contact"
            />
            <Link href="/demo">
              <BaseButtonWithColor
                text="Schedule Demo"
                onClick={() => {
                  sendGTMEvent({
                    event: "buttonClicked",
                    value: "Go to Demo Page",
                  });
                }}
              />
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}
