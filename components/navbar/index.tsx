import React from "react";
import {
  Stack,
  HStack,
  IconButton,
  Text,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import Icon from "../icon";
import { BsSun, BsMoon } from "react-icons/bs";
import Section from "../section";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack py={6} borderBottom="1px solid" borderColor="gray.300">
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
              <Text>Service</Text>
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
