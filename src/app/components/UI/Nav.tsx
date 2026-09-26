"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faPhone,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useWindowDimension } from "@/hooks/useWindowDimension";
import Logo from "./Logo";
import BaseModal from "./BaseModal";

export default function Nav() {
  const [sideBarDisplay, setSideBarDisplay] = useState(false);
  const { width } = useWindowDimension();

  const headerLinks = [
    {
      title: "+234 803 230 3207",
      url: "tel:+2348032303207",
      icon: faPhone,
    },
    {
      title: "info@unitellas.com.ng",
      url: "mailto:info@unitellas.com.ng",
      icon: faEnvelope,
    },
  ];

  const navLinks = [
    { title: "Home", url: "/" },
    { title: "Solutions", url: "/solutions" },
    { title: "About", url: "/about" },
    { title: "Training", url: "/training" },
    { title: "Blog", url: "https://blog.unitellas.com.ng" },
    { title: "Contact", url: "/contact" },
  ];

  const closeMobileMenu = () => {
    setSideBarDisplay(false);
  };

  if (width < 768) {
    return (
      <nav className="relative z-50 border-b border-white/10 bg-[#102A43] px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Logo />
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={sideBarDisplay}
            onClick={() => setSideBarDisplay(true)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition hover:border-[#15C9E4]/50 hover:bg-white/10"
          >
            <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
          </button>
        </div>

        <BaseModal
          close={closeMobileMenu}
          display={sideBarDisplay}
          xPosition="right"
          motionProps={{
            initial: { x: "100%" },
            animate: { x: 0 },
            transition: { type: "tween", duration: 0.25 },
          }}
        >
          <div className="flex h-screen w-[min(85vw,360px)] flex-col bg-[#102A43] p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div onClick={closeMobileMenu} className="shrink-0">
                <Logo />
              </div>

              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMobileMenu}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-[#15C9E4]/50 hover:text-[#15C9E4]"
              >
                <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#15C9E4]">
                Navigation
              </p>

              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.url}>
                    <Link
                      href={link.url}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between rounded-lg px-4 py-3.5 text-sm font-medium text-white transition hover:bg-white/5 hover:text-[#15C9E4]"
                    >
                      <span>{link.title}</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="h-3.5 w-3.5 opacity-40"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto border-t border-white/10 pt-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Contact
              </p>

              <div className="space-y-3">
                {headerLinks.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-[#15C9E4]"
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="h-4 w-4 text-[#15C9E4]"
                    />
                    <span>{link.title}</span>
                  </Link>
                ))}
              </div>

              <Link
                href="/demo"
                onClick={closeMobileMenu}
                className="mt-6 flex h-12 items-center justify-center rounded-lg bg-[#15C9E4] px-5 text-sm font-bold text-[#102A43] transition hover:bg-[#0fb5cf]"
              >
                Schedule a Demo
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 h-3.5 w-3.5"
                />
              </Link>
            </div>
          </div>
        </BaseModal>
      </nav>
    );
  }

  return (
    <header className="relative z-50">
      {/* Contact bar */}
      <div className="border-b border-white/10 bg-[#102A43]">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-end gap-6 px-6 text-xs text-slate-300">
          {headerLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="flex items-center gap-2 transition hover:text-[#15C9E4]"
            >
              <FontAwesomeIcon
                icon={link.icon}
                className="h-3.5 w-3.5 text-[#15C9E4]"
              />
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main navigation */}
      <nav className="border-b border-[#102A43]/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center px-6">
          <div className="shrink-0">
            <Logo />
          </div>

          <div className="ml-auto flex items-center gap-8">
            <ul className="hidden items-center gap-7 lg:flex">
              {navLinks.map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className="relative py-2 text-sm font-semibold capitalize text-[#102A43] transition hover:text-[#15C9E4]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/demo"
              className="hidden h-11 items-center rounded-lg bg-[#15C9E4] px-5 text-sm font-bold text-[#102A43] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0fb5cf] hover:shadow-md md:flex"
            >
              Schedule a Demo
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 h-3.5 w-3.5"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
