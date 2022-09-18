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
            <Text>Home</Text>
            <Text>Works</Text>
            <Text>Service</Text>
            <Text>About me</Text>
          </HStack>

          <IconButton
            colorScheme="teal"
            aria-label="color mode toggle button"
            onClick={toggleColorMode}
          >
            <Icon iconComp={colorMode === "light" ? BsMoon : BsSun} />
          </IconButton>
        </HStack>
      </Section>
    </Stack>
  );
}

export default Navbar;
