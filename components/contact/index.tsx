import React from "react";
import { Stack, Input } from "@chakra-ui/react";
import Section from "../section";

function Contact() {
  return (
    <Stack>
      <Section maxW="600px">
        <Stack spacing={2}>
          <Input size="lg" variant="filled" />
          <Input size="lg" />
          <Input size="lg" />
        </Stack>
      </Section>
    </Stack>
  );
}

export default Contact;
