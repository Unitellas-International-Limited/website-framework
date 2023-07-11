import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// 1. Import the extendTheme function

const UnitellasLayout = dynamic(() => import('@/components/layout').then(mod => mod), {
  ssr: false
});

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}


export const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <UnitellasLayout>
        <Component {...pageProps} />
      </UnitellasLayout>
    </ChakraProvider>
    
  )
}
