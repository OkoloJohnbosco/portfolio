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
        <Stack spacing={16} py={5}>
          <Project
            title="Teenah Stores"
            img={project_1Img}
            href="https://teenahstores.com/"
            description="Teenah is a mini e-commerce site that I built for a friend of mine that sells clothes, it has all the functionality of a typical commmerce site from cart functionality to checkout. It was built using React, Material-Ui for the UI library, Redux for state management and React-query for managing server side state"
          />
          <Project
            img={project_2Img}
            title="BunchPay"
            reverse
            href="https://bunchpay.ng/"
            description="BunchPay is a fintech startup that helps with local transaction, payment of utility bills, tv cable subscription and for purchase of airtime and data. The company was started by a group of friends and I. The frontend was built by me using Nextjs because of it's speed and other out of the box features like server side rendering, Chakra-UI, React query for server side state and Context API for local states"
          />
          <Project
            title="Creathors"
            img={project_3Img}
            href="https://creathor.africa/"
          />
        </Stack>
      </Section>
    </Stack>
  );
}

export default Projects;
