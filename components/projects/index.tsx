import React from "react";
import {
  Stack,
  SimpleGrid,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import TimeLine from "../timeline";
import Section from "../section";
import Image from "next/image";
import Project from "../project";

function Projects() {
  const value = useColorModeValue("gray.100", "rgba(0,0,0,0.3)");
  return (
    <Stack pt={20}>
      <Section id="project">
        <Heading
          textAlign="center"
          pb={2}
          mb={16}
          maxW="max-content"
          mx="auto"
          borderBottom="1px solid"
          borderColor="gray.100"
        >
          Projects
        </Heading>
        <Stack rowGap={16} columnGap={10} py={5}>
          <Project />
        </Stack>
      </Section>
    </Stack>
  );
}

export default Projects;
