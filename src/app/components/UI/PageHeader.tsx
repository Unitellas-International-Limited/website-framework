import classNames from "classnames";
import React from "react";

interface Props {
  title: string;
  subtitle?: string;
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
      <h1 className="mb-4 text-center font-Mongoose text-4xl text-uni-blue sm:text-6xl md:text-8xl">
        {title}
      </h1>
      {subtitle !== undefined && (
        <p className="xs:text-1xl max-w-5xl text-center text-base text-white">
          {subtitle}
        </p>
      )}
    </section>
  );
}
