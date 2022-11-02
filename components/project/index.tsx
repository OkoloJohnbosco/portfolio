import {
  Badge,
  BadgeProps,
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

const badgeProps: BadgeProps = {
  textTransform: "capitalize",
  colorScheme: "green",
  variant: "subtle",
  py: 1,
  px: 2,
  fontSize: "sm",
  fontWeight: "normal",
  rounded: "full",
};

function Project({
  img,
  href,
  reverse,
  description,
  title,
  others,
}: {
  img: StaticImageData;
  reverse?: boolean;
  href: string;
  title: string;
  description: string;
  others?: boolean;
}) {
  return (
    <Stack>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        rowGap={{ base: 8, md: 16 }}
        columnGap={10}
      >
        <Stack order={reverse ? 2 : 1}>
          <Box shadow="sm">
            <Image src={img} alt="" />
          </Box>
        </Stack>
        <Stack spacing={5} order={1}>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
          <HStack>
            <Badge {...badgeProps}>Reactjs</Badge>
            <Badge {...badgeProps} colorScheme="teal">
              React-Query
            </Badge>
            {!others && (
              <Badge {...badgeProps} colorScheme="yellow">
                Material-UI
              </Badge>
            )}
            {others && (
              <>
                <Badge {...badgeProps} colorScheme="orange">
                  Nextjs
                </Badge>
                <Badge {...badgeProps} colorScheme="blue">
                  Framer Motion
                </Badge>
              </>
            )}
          </HStack>
          <Stack pt={3}>
            <a href={href} target="_blank">
              <Button rounded={2} fontWeight="normal">
                View Website
              </Button>
            </a>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
}

export default Project;
