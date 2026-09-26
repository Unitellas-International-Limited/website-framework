import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const presentYear = new Date().getFullYear();

  const socials = [
    {
      icon: faTwitter,
      url: "https://twitter.com/unitellasil/",
      aria: "Visit the Unitellas Twitter page",
    },
    {
      icon: faFacebook,
      url: "https://facebook.com/unitellas/",
      aria: "Visit the Unitellas Facebook page",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/company/unitellas-international/mycompany/",
      aria: "Visit the Unitellas LinkedIn page",
    },
    {
      icon: faYoutube,
      url: "https://www.youtube.com/channel/UCf7u80bSoW4Xq_tY-NUn1Nw",
      aria: "Visit the Unitellas YouTube channel",
    },
    {
      icon: faWhatsapp,
      url: "https://api.whatsapp.com/send/?phone=2348032303207&text&app_absent=0",
      aria: "Send us a message on WhatsApp",
    },
  ];

  const companyLinks = [
    { title: "About Unitellas", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Training", url: "/training" },
    { title: "Blog", url: "https://blog.unitellas.com.ng" },
  ];

  const solutionLinks = [
    { title: "Solutions", url: "/solutions" },
    { title: "Edge Cloud", url: "/solutions/edge-cloud" },
    { title: "Sovereign Cloud", url: "/solutions/sovereign-cloud" },
    { title: "Enterprise Compute", url: "/solutions/enterprise-compute" },
  ];

  return (
    <footer className="bg-[#102A43] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.7fr_1fr_1fr_1.2fr] lg:gap-16">
          {/* Brand */}
          <div className="max-w-md">
            <div className="mb-6">
              <Logo />
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-300">
              Building reliable cloud infrastructure for modern businesses
              across Africa, with the flexibility to deploy where your workloads
              need it most.
            </p>

            <Link
              href="/demo"
              className="mt-7 inline-flex h-11 items-center rounded-lg bg-[#15C9E4] px-5 text-sm font-bold text-[#102A43] transition hover:-translate-y-0.5 hover:bg-[#0fb5cf]"
            >
              Schedule a Demo
              <span className="ml-2 text-base">→</span>
            </Link>
          </div>

          {/* Company */}
          <div>
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#15C9E4]">
              Company
            </h2>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#15C9E4]">
              Solutions
            </h2>

            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#15C9E4]">
              Get in touch
            </h2>

            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                <a
                  href="tel:+2348032303207"
                  className="transition hover:text-white"
                >
                  +234 803 230 3207
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@unitellas.com.ng"
                  className="transition hover:text-white"
                >
                  info@unitellas.com.ng
                </a>
              </li>
            </ul>

            <div className="mt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                Follow Unitellas
              </p>

              <ul className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <li key={social.url}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.aria}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:border-[#15C9E4]/40 hover:bg-[#15C9E4]/10 hover:text-[#15C9E4]"
                    >
                      <FontAwesomeIcon icon={social.icon} className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2011-{presentYear} Unitellas International Limited. All rights
              reserved.
            </p>

            <p>Cloud infrastructure for Africa and beyond.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
