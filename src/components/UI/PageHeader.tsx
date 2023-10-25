import classNames from "classnames";
import React from "react";

interface Props {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section
      className={classNames(
        "relative flex h-80 flex-col items-center justify-center overflow-hidden bg-black p-4",
        {
          "before:absolute before:bottom-[-40vw] before:left-[25vw] before:block before:h-[80vw] before:w-[80vw] before:-rotate-45 before:transform before:bg-white before:bg-opacity-5":
            true,
        },
        {
          "after:left-5/6 after:absolute after:-bottom-1/3 after:block after:h-4/6 after:w-4/6 after:-rotate-45 after:transform after:rounded-full after:bg-white after:bg-opacity-5":
            true,
        },
      )}
    >
      <h1 className="mb-4 font-display text-6xl text-uni-blue md:text-9xl">
        {title}
      </h1>
      <p className="text-center text-lg text-white xs:text-2xl">{subtitle}</p>
    </section>
  );
}
