import { Metadata } from "next";
import LowerHome from "./lowerHome";
import Hero from "./hero";
import Nav from "./components/UI/Nav";
import Footer from "./components/UI/Footer";

export const metadata: Metadata = {
  title: "Unitellas International Limited | Edge Cloud Services",
  description: "...",
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
