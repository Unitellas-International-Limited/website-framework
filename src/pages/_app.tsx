import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import dynamic from "next/dynamic";

const UnitellasLayout = dynamic(() => import('@/components/Layout').then(mod => mod), {
  ssr: false
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UnitellasLayout>
      <Component {...pageProps} />
    </UnitellasLayout>
  )
}
