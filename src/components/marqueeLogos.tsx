import { Box, Image, Text } from "@chakra-ui/react"
import Marquee from 'react-fast-marquee';

interface Logo { url: string; alt: string; } 

interface MarqueeProps { logos: Logo[]; } 



function MarqueeLogos({ logos }: MarqueeProps) {
  return (
    <Box w={'full'} alignSelf={'center'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
      <Box w={'full'} justifyContent={'center'}>
        <Text fontSize="lg" padding={5} fontWeight="bold" textAlign={'center'} bgColor={'black'} color={'white'}>
          Trusted by leading companies and service providers around the world
        </Text>
      </Box>
      <MarqueeComponent logos={logos} />
    </Box>
  )
}

function MarqueeComponent({ logos }: MarqueeProps) {
  return (
    <Marquee
      direction="right"
      loop={0}
      className="marquee"
      style={{
        alignSelf: 'center',
         justifyContent: 'center',
         alignItems:'center',
         textAlign: 'center',
      }}
    >
      {logos.map(logo => (
        <Box key={logo.url} marginLeft={205} alignSelf={'center'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
          <Image src={logo.url} alt={logo.alt} width={90}  />
        </Box>
      ))}
    </Marquee>
  )
}

export default MarqueeLogos;