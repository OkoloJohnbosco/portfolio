import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import React from "react";

function Project({ img }: { img: StaticImageData }) {
  return (
    <Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }} rowGap={16} columnGap={10}>
        <Stack>
          <Box h="400px" bg="gray.100">
            <Image src={img} alt="" />
          </Box>
        </Stack>
        <Stack spacing={5}>
          <Heading>Teenah Stores</Heading>
          <Text>
            A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a standard dummy text.
          </Text>
          <HStack>
            <Badge
              textTransform="capitalize"
              colorScheme="green"
              variant="subtle"
              py={1}
              px={4}
              fontSize="md"
              fontWeight="normal"
              rounded="full"
            >
              Success
            </Badge>
          </HStack>
          <Stack>
            <a href="https://twitter.com/JohnboscoOkolo" target="_blank">
              <Button>View Website</Button>
            </a>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
}

export default Project;
