import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { animate, motion } from "framer-motion";




export default function HeroSection() {
    return(
        <Box as="section" bgImage="url('/cloud-tech-bg-3.jpg')" bgSize="cover" bgPos="center" position={'relative'}>
            <Container padding={'10'}>
                <Stack
                    align="center"
                    spacing={8}
                    direction={{ base: 'column', md: 'row', sm: 'row' }}
                    py={20}
                >
                    <motion.div
                        initial={{ x: -1000 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 2 }}
                        style={{ 
                            position: 'relative',
                        }}
                    >
                        <Box>
                            <Heading as="h1" size="2xl" color={'white'} maxWidth={'70%'} fontWeight="bold">
                                Unitellas Edge Cloud
                            </Heading>
                            <Text fontSize="lg" maxWidth={'100%'} color="white">
                                Fully-managed cloud services.<br />
                                Compute, networking and storage.
                            </Text>
                        </Box>
                    </motion.div>
                    <motion.div
                        initial={{ x: 1000 }}
                        animate={{ x: 10 }}
                        transition={{ duration: 2 }}
                        style={{ 
                            position: 'relative',
                        }}
                    >
                        <Box flex={'column'} flexDirection={'column'} dir={'column'}>
                            <Button variant="solid" colorScheme="blue" margin={'2.5'} size="lg">
                                Get started
                            </Button>
                            <Button variant="outline" colorScheme="blue" margin={'2.5'} size="lg">
                                Get started
                            </Button>
                        </Box>
                    </motion.div>
                </Stack>
            </Container>
        </Box>
    )
}