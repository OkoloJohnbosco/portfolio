import React from "react";
import {
  Button,
  Box,
  Stack,
  Text,
  SimpleGrid,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../section";
import Socials from "../socials";
import Image from "next/image";
import profileImg from "../../public/images/phone.png";

function Header() {
  const bgColor = useColorModeValue("gray.100", "rgba(0,0,0,0.3)");
  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Stack py={10} pt={16} id="home">
      <Section position="relative">
        <Socials />
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          columnGap={4}
          alignItems="center"
        >
          <Stack position="relative">
            <Stack spacing={6}>
              <Stack spacing={0} rounded="8" color={textColor}>
                <Heading fontSize="lg">Hello, I'm</Heading>
                <Heading fontSize="3rem">Johnbosco</Heading>
              </Stack>
              <Stack>
                <Text mt={2} color={textColor} maxW="400px">
                  A Frontend Software Developer with 4+ years of experience
                  building products that are accessible and user-friendly to
                  users. I love collaboration and making helpful products that
                  connects people.
                </Text>
              </Stack>
              <Stack>
                <a href="mailto:chukwuemekaokolo233@gmail.com">
                  <Button
                    variant="ghost"
                    rounded={0}
                    p={0}
                    w="min-content"
                    h="min-content"
                    colorScheme="teal"
                    pb={2}
                    borderBottom="2px solid"
                    borderColor="green.600"
                  >
                    LET'S CHAT!
                  </Button>
                </a>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            alignItems="center"
            position="relative"
            display={{ base: "none", lg: "flex" }}
          >
            <Box
              h={96}
              w={96}
              rounded="full"
              bg={bgColor}
              position="absolute"
              top={10}
            />

            <Stack h="400px">
              <Box textAlign="center" maxW="500px">
                <Image src={profileImg} alt="" placeholder="blur" />
              </Box>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Section>
    </Stack>
  );
}

export default Header;
