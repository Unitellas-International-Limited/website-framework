"use client";

import { useWindowDimension } from "@/hooks/useWindowDimension";
import { motion } from "framer-motion";
import Link from "next/link";
import { BaseButton } from "@/components/UI/Buttons";

const Hero: React.FC = () => {
  const { width } = useWindowDimension();

  return (
    <div className="mx-auto flex h-3/4 max-w-full flex-col items-start justify-center gap-8 overflow-hidden p-8 md:flex-row md:items-center md:justify-between md:gap-16">
      <motion.div
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className="min-h-[170px] text-white"
      >
        <h1 className="mb-4 font-Mongoose text-7xl md:text-8xl lg:text-9xl">
          Unitellas Edge Cloud
        </h1>
        <p className="text-2xl">
          Fully-managed edge cloud services.
          <br />
          Compute, networking, storage and more.
        </p>
      </motion.div>
      <motion.div
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className="flex w-full flex-col gap-6 md:w-auto"
      >
        <Link href="/demo">
          <BaseButton
            text="Start a Live Demo Today"
            size={width < 480 ? "full" : "lg"}
          />
        </Link>

        <Link href="/quote">
          <BaseButton text="Get a quote" size={width < 480 ? "full" : "lg"} />
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
