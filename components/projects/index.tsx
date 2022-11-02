import React from "react";
import { Stack, Heading, useColorModeValue } from "@chakra-ui/react";
import Section from "../section";
import Project from "../project";
import project_1Img from "../../public/images/project-1.png";
import project_2Img from "../../public/images/project-2.png";
import project_3Img from "../../public/images/project-3.png";

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
          <Project img={project_1Img} />
          <Project img={project_2Img} />
          <Project img={project_3Img} />
        </Stack>
      </Section>
    </Stack>
  );
}

export default Projects;
