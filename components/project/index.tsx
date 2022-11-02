import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import React from "react";

function Project({ img }: { img: StaticImageData }) {
  return (
    <Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Stack>
          <Box h="400px" bg="gray.100">
            {/* <Image src="" alt="" /> */}
          </Box>
        </Stack>
        <Stack>
          <Heading></Heading>
          <Text></Text>
          <Stack></Stack>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
}

export default Project;
