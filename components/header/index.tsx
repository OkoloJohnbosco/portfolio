import React from "react";
import { Stack, Text, SimpleGrid } from "@chakra-ui/react";
import Section from "../section";

function Header() {
  return (
    <Section>
      <Stack py={10}>
        <SimpleGrid columns={3} columnGap={4} alignItems="center">
          <Stack>
            <Text>One</Text>
          </Stack>
          <Stack h="500px" alignItems="center">
            <Text>Two</Text>
          </Stack>
          <Stack alignItems="end">
            <Text>Third</Text>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Section>
  );
}

export default Header;
