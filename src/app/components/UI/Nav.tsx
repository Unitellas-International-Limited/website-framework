"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Logo from "./Logo";
import BaseModal from "./BaseModal";

export default function Nav() {
  const [sideBarDisplay, setSideBarDisplay] = useState(false);

  const headerLinks = [
    {
      title: "+234 803 230 3207",
      url: "tel:+234 8032303207",
      icon: <FontAwesomeIcon icon={faPhone} className="h-4" />,
    },
    {
      title: "info@unitellas.com.ng",
      url: "mailto:einfo@unitellas.com.ng",
      icon: <FontAwesomeIcon icon={faEnvelope} className="h-4" />,
    },
  ];

  const navLinks = [
    {
      title: "home",
      url: "/",
    },
    {
      title: "Blog",
      url: "https://blog.unitellas.com.ng",
    },
    {
      title: "solutions",
      url: "/solutions",
    },
    {
      title: "about",
      url: "/about",
    },
    {
      title: "training",
      url: "/training",
    },
    {
      title: "contact",
      url: "/contact",
    },
  ];

  return (
    <nav className="flex md:hidden items-center justify-between bg-black/50 px-4">
      <Logo />
      {!sideBarDisplay && (
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            setSideBarDisplay(true);
          }}
          className="h-8 cursor-pointer text-white"
        />
      )}
      <BaseModal
        close={() => {
          setSideBarDisplay(false);
        }}
        display={sideBarDisplay}
        xPosition="right"
        motionProps={{
          initial: { x: "100%" },
          animate: { x: 0 },
          transition: { type: "tween" },
          // exit: { x: 0, transition: { duration: 1 } },
        }}
      >
        <div className="h-screen w-64 bg-black/70 p-6">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => {
              setSideBarDisplay(false);
            }}
            className="ml-auto block h-6 cursor-pointer text-white"
          />
          <ul className="mt-4 space-y-6 capitalize text-white">
            {navLinks.map((link) => (
              <li key={link.url}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </BaseModal>
    </nav>
  );

  return (
    <>
      <header>
        <ul className="flex items-center justify-end gap-8 bg-gray-800 p-2 text-gray-300">
          {headerLinks.map((link) => (
            <li key={link.url}>
              <Link href={link.url} className="flex items-center gap-2">
                {link.icon}
                <span>{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <nav className="flex h-20 w-full bg-gray-900/50">
        <Logo />
        <ul className="flex gap-4  px-8 py-4 capitalize text-white">
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
