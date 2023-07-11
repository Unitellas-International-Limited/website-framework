import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";




export default function HeroSection() {
    return(
        <Box as="section" bgImage="url('/cloud-tech-bg-3.jpg')" bgSize="cover" bgPos="center">
            <Container maxW="container.xl" padding={'10'}>
                <Stack
                    align="center"
                    spacing={8}
                    direction={{ base: 'column', md: 'row', sm: 'row' }}
                    py={20}
                >
                    <Box>
                        <Heading as="h1" size="2xl" color={'white'} maxWidth={'70%'} fontWeight="bold">
                            Unitellas Edge Cloud
                        </Heading>
                        <Text fontSize="lg" maxWidth={'70%'} color="white">
                            Fully-managed cloud services.
                            Compute, networking and storage.
                        </Text>
                    </Box>
                   <Box flex={'column'} flexDirection={'column'}>
                        <Button variant="solid" colorScheme="blue" margin={'2.5'} size="lg">
                            Get started
                        </Button>
                        <Button variant="outline" colorScheme="blue" margin={'2.5'} size="lg">
                            Get started
                        </Button>
                   </Box>
                </Stack>
            </Container>
        </Box>
    )
}