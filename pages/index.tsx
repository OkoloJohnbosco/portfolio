import { Button, Heading, Stack, useColorMode } from "@chakra-ui/react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack p={10}>
      <Button
        w="max-content"
        onClick={toggleColorMode}
        fontWeight="normal"
        size="lg"
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Heading fontSize="10rem">My portfolio</Heading>
      <h1>My portfolio</h1>
      <h3>My portfolio</h3>
      <h4>My portfolio</h4>
    </Stack>
  );
}
