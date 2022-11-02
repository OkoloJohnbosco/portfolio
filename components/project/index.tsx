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

function Project({
  img,
  href,
  reverse,
  description,
  title,
}: {
  img: StaticImageData;
  reverse?: boolean;
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }} rowGap={16} columnGap={10}>
        <Stack order={reverse ? 2 : 1}>
          <Box>
            <Image src={img} alt="" />
          </Box>
        </Stack>
        <Stack spacing={5} order={1}>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
          <HStack>
            <Badge
              textTransform="capitalize"
              colorScheme="green"
              variant="subtle"
              py={1}
              px={2}
              fontSize="sm"
              fontWeight="normal"
              rounded="full"
            >
              Success
            </Badge>
          </HStack>
          <Stack>
            <a href={href} target="_blank">
              <Button>View Website</Button>
            </a>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
}

export default Project;
