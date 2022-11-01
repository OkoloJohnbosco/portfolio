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
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../section";
import Socials from "../socials";

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
            <Stack spacing={3}>
              <Stack
                spacing={0}
                rounded="8"
                p={4}
                pl={6}
                bg={bgColor}
                color={textColor}
                position="absolute"
                top={{ base: -10, lg: -20 }}
                shadow="sm"
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
                  bg={bgColor}
                  color={textColor}
                  maxW="400px"
                >
                  Frontend Software Developer with 4+ years of experience
                  building products. I love collaboration and making helpful
                  products that connects prople.
                </Text>
              </Stack>
              <Stack>
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

            <Stack h="400px"></Stack>
            {/* <Box textAlign="center" position="relative" top={10} h="300px"> */}
            {/* <Image src={profileImg} alt="" placeholder="blur" /> */}
            {/* </Box> */}
          </Stack>
        </SimpleGrid>
      </Section>
    </Stack>
  );
}

export default Header;
