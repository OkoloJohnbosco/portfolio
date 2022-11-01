import React from "react";
import {
  Stack,
  HStack,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Icon from "../icon";
import { BsSun, BsMoon } from "react-icons/bs";
import Section from "../section";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("#ffffff", "#1a202c");

  return (
    <Stack
      py={5}
      borderBottom="1px solid"
      borderColor="gray.300"
      position="sticky"
      top={0}
      left={0}
      bg={bgColor}
      zIndex="20"
    >
      <Section>
        <HStack w="full" justifyContent="space-between">
          <Stack>
            <Text>Johnbosc</Text>
          </Stack>
          <HStack spacing={4}>
            <a href="#home">
              <Text>Home</Text>
            </a>
            <a href="#experience">
              <Text>Works</Text>
            </a>
            <a href="#experience">
              <Text>Projects</Text>
            </a>
            <a href="#contact-us">
              <Text>Contact me</Text>
            </a>
          </HStack>

          <IconButton
            colorScheme="teal"
            aria-label="color mode toggle button"
            onClick={toggleColorMode}
            rounded="full"
            size="sm"
          >
            <Icon
              iconComp={colorMode === "light" ? BsMoon : BsSun}
              boxSize={4}
            />
          </IconButton>
        </HStack>
      </Section>
    </Stack>
  );
}

export default Navbar;
