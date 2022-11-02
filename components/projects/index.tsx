import React from "react";
import { Stack, Heading, useColorModeValue, Divider } from "@chakra-ui/react";
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
        <Stack spacing={{ base: 10, md: 16 }} py={5}>
          <Project
            title="Teenah Stores"
            img={project_1Img}
            href="https://teenahstores.com/"
            description="Teenah is a mini e-commerce store that I built for a friend of mine that sells clothes, it has all the functionality of a typical commmerce site from cart to checkout functionality. It was built using React, Material-Ui for the UI library, Redux for state management and React-query for managing server side state"
          />
          <Divider />
          <Project
            img={project_2Img}
            title="BunchPay"
            reverse
            others
            href="https://bunchpay.ng/"
            description="BunchPay is a fintech startup that helps with local transaction, payment of utility bills, tv cable subscription and for purchase of airtime and data. The company was started by a group of friends and I. The frontend was built by me using Nextjs because of it's speed and other out of the box features like server side rendering, Chakra-UI, React query for server side state and Context API for local states"
          />
          <Divider />
          <Project
            title="Creathors"
            others
            img={project_3Img}
            description="Creathors is a basically a tipping platform,so a creathor i.e a creative can sign up create a tip link and can share that link to anyone that wants to tip him/her as a form of appreciation this is another start-up idea I and my friend Prosper are working on. We just lauched V2 last month and I did the frontend end do well to check it out, you can also sign up and send me ur tip link so I can tip you. It was built with Nextjs, React query, framer motion and Chakra-UI "
            href="https://creathor.africa/"
          />
        </Stack>
      </Section>
    </Stack>
  );
}

export default Projects;
