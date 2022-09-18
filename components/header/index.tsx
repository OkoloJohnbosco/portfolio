import React from "react";
import {
  Button,
  Box,
  Stack,
  Text,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import Section from "../section";
import Image from "next/image";
import profileImg from "../../public/images/profile.png";
import Socials from "../socials";

function Header() {
  return (
    <Stack py={10}>
      <Section position="relative" minH="calc(100vh - 180px)">
        <Socials />
        <SimpleGrid columns={3} columnGap={4} alignItems="center">
          <Stack>
            <Stack spacing={3}>
              <Stack spacing={0}>
                <Heading fontSize="xl">Hello, I'm</Heading>
                <Heading fontSize="3rem">Johnbosco</Heading>
              </Stack>
              <Text>
                Frontend Software Developer with 4+ years of experience building
                products. I love collaboration and making helpful products that
                connects prople.
              </Text>
              <Stack>
                <Button
                  variant="ghost"
                  fontWeight="normal"
                  rounded={0}
                  p={0}
                  w="min-content"
                  h="min-content"
                  colorScheme="teal"
                  pb={2}
                  borderBottom="2px solid"
                  borderColor="teal.600"
                >
                  LET'S CHAT!
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack alignItems="center">
            <Box textAlign="center">
              <Image src={profileImg} alt="" placeholder="blur" />
            </Box>
          </Stack>
          <Stack alignItems="end">
            <Text>Third</Text>
          </Stack>
        </SimpleGrid>
      </Section>
    </Stack>
  );
}

export default Header;
