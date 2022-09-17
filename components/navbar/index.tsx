import React from "react";
import {
  Stack,
  HStack,
  IconButton,
  Text,
  useColorMode,
  Button,
} from "@chakra-ui/react";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack py={6} borderBottom="1px solid" borderColor="gray.600" px={4}>
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

        <Button
          w="max-content"
          onClick={toggleColorMode}
          fontWeight="normal"
          size="lg"
        >
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </HStack>
    </Stack>
  );
}

export default Navbar;
