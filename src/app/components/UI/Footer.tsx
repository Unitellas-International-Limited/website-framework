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
  const iconClasses = "text-white";
  // const footerLinks = [
  //   {
  //     title: "partners",
  //     url: "/#",
  //   },
  //   {
  //     title: "resources",
  //     url: "/#",
  //   },
  //   {
  //     title: "pricing",
  //     url: "/#",
  //   },
  // ];
  const socials = [
    {
      icon: (
        <FontAwesomeIcon size="lg" icon={faTwitter} className={iconClasses} />
      ),
      url: "https://twitter.com/unitellasil/",
      aria: "Visit the Unitellas Twitter page",
    },
    {
      icon: (
        <FontAwesomeIcon size="lg" icon={faFacebook} className={iconClasses} />
      ),
      url: "https://facebook.com/unitellas/",
      aria: "Visit the Unitellas Facebook page",
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedin} className={iconClasses} />,
      url: "https://www.linkedin.com/company/unitellas-international/mycompany/",
      aria: "Visit the Unitellas Linkedin page",
    },
    {
      icon: (
        <FontAwesomeIcon size="lg" icon={faYoutube} className={iconClasses} />
      ),
      url: "https://www.youtube.com/channel/UCf7u80bSoW4Xq_tY-NUn1Nw?",
      aria: "Visit the Unitellas Youtube Channel",
    },
    {
      icon: (
        <FontAwesomeIcon size="lg" icon={faWhatsapp} className={iconClasses} />
      ),
      url: "https://api.whatsapp.com/send/?phone=2348032303207&text&app_absent=0",
      aria: "Send us a message on Whatsapp",
    },
  ];

  return (
    <footer className="bg-black p-10">
      <div className="relative flex flex-col items-center justify-between gap-4 md:flex-row">
        {/* <ul className="flex items-center gap-4 text-zinc-500">
          {footerLinks.map((link) => (
            <li key={link.title} className="hover:underline">
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul> */}
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <Logo />
        </div>
        <ul className="flex items-center gap-2 text-zinc-500">
          {socials.map((link) => (
            <li
              key={link.url}
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all hover:bg-zinc-700"
            >
              <Link aria-label={link.aria} href={link.url}>
                {link.icon}
              </Link>
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
