import { Metadata } from "next";
import LowerHome from "./lowerHome";
import Hero from "./hero";
import Nav from "./components/UI/Nav";
import Footer from "./components/UI/Footer";

export const metadata: Metadata = {
  title: "Unitellas International Limited | Edge Cloud Services",
  description:
    "Discover Africa’s first hyper-scale edge cloud platform. Fully managed edge cloud services - compute, storage, and networking services for enterprises and service providers.",
  keywords: [
    "Unitellas",
    "Edge Cloud Nigeria",
    "Cloud Computing Africa",
    "Enterprise Cloud Services",
    "Unitellas International Limited",
    "Hyper-Scale Cloud Nigeria",
    "Cloud Services Nigeria",
    "Data Center Africa",
  ],
  alternates: {
    canonical: "https://www.unitellas.com.ng/",
  },
  openGraph: {
    title: "Unitellas International Limited | Edge Cloud Services",
    description:
      "Unitellas delivers scalable, secure, and affordable cloud infrastructure tailored for Africa’s digital transformation.",
    url: "https://www.unitellas.com.ng/",
    siteName: "Unitellas International Limited",
    type: "website",
    images: [
      {
        url: "https://www.unitellas.com.ng/unitellasicon.png",
        width: 1200,
        height: 630,
        alt: "Unitellas Edge Cloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unitellas Edge Cloud Services",
    description:
      "The future of cloud in Africa — scalable and affordable edge computing from Unitellas.",
    site: "@Unitellasil",
    creator: "@Unitellasil",
    images: ["https://www.unitellas.com.ng/unitellasicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Home() {
  return (
    <main className="h-screen w-full bg-home-hero bg-cover bg-center ">
      <Nav />
      <Hero />
      <LowerHome />
      <Footer />
    </main>
  );
}
