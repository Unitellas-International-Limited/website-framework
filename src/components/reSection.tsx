import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { animate, motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
    imageUrl?: string
}
export default function ReSection({children, imageUrl}: Props){
    return(
        <Box as="section" bgImage={imageUrl} bgSize="cover" bgPos="center">
            <Container maxW="container.xl" padding={'5'}>
                <Stack
                    align="center"
                    spacing={8}
                    direction={'column'}
                    py={20}
                >
                    {children}
                </Stack>
            </Container>
        </Box>
    )
};