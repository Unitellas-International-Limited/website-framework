import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  )
}
