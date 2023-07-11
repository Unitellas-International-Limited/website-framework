import HeroSection from '@/components/hero'
import MarqueeLogos from '@/components/marqueeLogos'
import ReSection from '@/components/reSection'
import { Heading, Image } from "@chakra-ui/react";

const TrustedLogos = [
  {url:"/partner-adc.jpg", alt: "Africa DataCentres"},
  {url:"/partner-cyberspace.png", alt: "CyberSpace"},
  {url:"/partner-inq.png", alt: "inq"},
  {url:"/partner-itex.png", alt: "ITEX"},
  {url:"/partner-nitda.png", alt: "National Information Technology Development Agency"},
  {url:"/partner-rackware.png", alt: "RackWare"},
  {url:"/partner-treten.png", alt: "Treten"}
]

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeLogos logos={TrustedLogos} />
      <ReSection imageUrl="url('/blocks-1600x650-1.jpg')">
        <Heading as="h1" size="2xl" color={'#1379b4'} fontWeight="bold">
          Unitellas Edge Cloud Services
        </Heading>
        <Image src='/zadara-sevices.png'  alt='Unitellas Edge Cloud Services'/>
      </ReSection>
    </>
  )
}
