import React from "react";
import { Heading, Textarea, Stack, Input } from "@chakra-ui/react";
import Section from "../section";

function Contact() {
  return (
    <Stack>
      <Section maxW="700px">
        <Heading
          textAlign="center"
          pb={2}
          mb={16}
          maxW="max-content"
          mx="auto"
          borderBottom="1px solid"
          borderColor="gray.100"
        >
          Take A Coffee & Chat With Me
        </Heading>
        <Stack spacing={6}>
          <Input
            placeholder="Your name"
            fontSize="nm"
            size="lg"
            variant="filled"
            border="1px solid"
            _focus={{ borderColor: "blue.50" }}
          />
          <Input
            placeholder="Your email"
            variant="filled"
            fontSize="nm"
            size="lg"
            border="1px solid"
            _focus={{ borderColor: "blue.50" }}
          />
          <Textarea
            placeholder="Your Message"
            variant="filled"
            h="200px"
            fontSize="nm"
            size="lg"
            border="1px solid"
            _focus={{ borderColor: "blue.50" }}
          />
        </Stack>
      </Section>
    </Stack>
  );
}

export default Contact;
