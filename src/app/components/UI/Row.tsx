import React, { type ReactNode } from "react";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
}
export default function Row({ children, className }: Props) {
  return (
    <section
      className={classNames(
        "flex flex-col justify-center gap-10 p-4 xs:p-8 sm:p-16 lg:flex-row",
        className,
      )}
    >
      {children}
    </section>
  );
}
