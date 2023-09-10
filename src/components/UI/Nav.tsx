"use strict";
import Link from "next/link";
import React from "react";

export default function Nav() {
  const headerLinks = [
    {
      title: "support",
      url: "/support",
    },
    {
      title: "solutions",
      url: "/solutions",
    },
    {
      title: "partner login",
      url: "/partner-login",
    },
    {
      title: "user login",
      url: "/user-login",
    },
  ];

  const navLinks = [
    {
      title: "about",
      url: "/about",
    },
    {
      title: "platform",
      url: "/platform",
    },
    {
      title: "solutions",
      url: "/solutions",
    },
    {
      title: "partners",
      url: "/partners",
    },
    {
      title: "resources",
      url: "/resources",
    },
    {
      title: "pricing",
      url: "/pricing",
    },
  ];

  return (
    <>
      <header>
        <ul className="flex items-center justify-end gap-4 bg-gray-800 p-2 text-gray-300">
          {headerLinks.map((link) => (
            <li key={link.url}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </header>
      <nav>
        <ul className="flex h-20 items-center justify-end gap-4 bg-gray-900/50 px-8 py-4 capitalize text-white">
          {navLinks.map((link) => (
            <li key={link.url}>
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
          <li></li>
        </ul>
      </nav>
    </>
  );
}
