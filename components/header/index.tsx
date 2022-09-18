import React from "react";
import {
  Button,
  Box,
  Stack,
  HStack,
  Text,
  SimpleGrid,
  Heading,
  Badge,
} from "@chakra-ui/react";
import Section from "../section";
import Image from "next/image";
import profileImg from "../../public/images/profile.png";
import Socials from "../socials";

function Header() {
  return (
    <Stack py={10} pt={16}>
      <Section position="relative" minH="calc(100vh - 180px)">
        <Socials />
        <SimpleGrid columns={3} columnGap={4} alignItems="center">
          <Stack position="relative">
            <Stack spacing={3}>
              <Stack
                spacing={0}
                rounded="8"
                p={4}
                pl={6}
                bg="rgba(0,0,0,.2)"
                color="gray.300"
                position="absolute"
                top={-20}
                right={0}
              >
                <Heading fontSize="lg">Hello, I'm</Heading>
                <Heading fontSize="3rem">Johnbosco</Heading>
              </Stack>
              <Stack>
                <Text
                  mt={20}
                  rounded="8"
                  p={4}
                  pl={6}
                  bg="rgba(0,0,0,.2)"
                  color="gray.300"
                >
                  Frontend Software Developer with 4+ years of experience
                  building products. I love collaboration and making helpful
                  products that connects prople.
                </Text>
              </Stack>
              <Stack>
                <Button
                  variant="ghost"
                  fontWeight="normal"
                  rounded={0}
                  p={0}
                  w="min-content"
                  h="min-content"
                  colorScheme="green"
                  pb={2}
                  borderBottom="2px solid"
                  borderColor="green.600"
                >
                  LET'S CHAT!
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack alignItems="center" position="relative">
            <Box position="absolute" top={-10}>
              <Badge
                colorScheme="green"
                p={2}
                fontWeight="normal"
                fontSize="sm"
              >
                Frontend Software Engineer
              </Badge>
            </Box>
            <Box
              h="96"
              w={96}
              rounded="full"
              bg="rgba(0,0,0,.3)"
              position="absolute"
              top={20}
            />
            <Box textAlign="center">
              <Image src={profileImg} alt="" placeholder="blur" />
            </Box>
          </Stack>
          <HStack
            alignItems="end"
            flexWrap="wrap"
            spacing={0}
            columnGap={3}
            rowGap={3}
          >
            <Box h="14" w={14} rounded="full" bg="rgba(0,0,0,.3)" />
            <Box h="14" w={14} rounded="full" bg="rgba(0,0,0,.3)" />
            <Box h="14" w={14} rounded="full" bg="rgba(0,0,0,.3)" />
            <Box h="14" w={14} rounded="full" bg="rgba(0,0,0,.3)" />
            <Box h="14" w={14} rounded="full" bg="rgba(0,0,0,.3)" />
            <Box h="14" w={14} rounded="full" bg="rgba(0,0,0,.3)" />
            <Box h="14" w={14} rounded="full" bg="rgba(0,0,0,.3)" />
            <Box h="14" w={14} rounded="full" bg="rgba(0,0,0,.3)" />
            <Box h="14" w={14} rounded="full" bg="rgba(0,0,0,.3)" />
          </HStack>
        </SimpleGrid>
      </Section>
    </Stack>
  );
}

export default Header;
