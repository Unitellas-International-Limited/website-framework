import React, { type ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      <Nav />
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
}
