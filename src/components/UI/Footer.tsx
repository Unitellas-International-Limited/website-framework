import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const presentYear = new Date().getFullYear();
  const iconClasses = "h-6 text-white";
  const footerLinks = [
    {
      title: "partners",
      url: "#",
    },
    {
      title: "resources",
      url: "#",
    },
    {
      title: "pricing",
      url: "#",
    },
  ];
  const socials = [
    {
      icon: <FontAwesomeIcon icon={faTwitter} className={iconClasses} />,
      url: "/partners",
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedin} className={iconClasses} />,
      url: "/resources",
    },
  ];

  return (
    <footer className="bg-black p-10">
      <div className="relative flex flex-col items-center justify-between gap-4 md:flex-row">
        <ul className="flex items-center gap-4 text-zinc-500">
          {footerLinks.map((link) => (
            <li key={link.url} className="hover:underline">
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <Logo />
        </div>
        <ul className="flex items-center gap-2 text-zinc-500">
          {socials.map((link) => (
            <li
              key={link.url}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all hover:bg-zinc-700"
            >
              <Link href={link.url}>{link.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
      <span className="mt-20 block text-center text-xs text-white">
        ©2011-{presentYear} Unitellas Edge Cloud.
      </span>
    </footer>
  );
}
