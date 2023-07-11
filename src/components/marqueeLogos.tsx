import { Stack, } from "@chakra-ui/react";

function MarqueeComponent({ logos }: any) {
    return (
      <Stack
        direction="row"
        spacing={4}
        overflow="auto"
        whiteSpace="nowrap"
        w="full"
      >
        {/* {logos.map(logo => (
          <Image src={logo} boxSize="64px" />
        ))} */}
      </Stack>
    )
  }