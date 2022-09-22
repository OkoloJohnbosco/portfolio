import React from "react";
import { Box, Stack, SimpleGrid, Heading } from "@chakra-ui/react";
import TimeLine from "../timeline";
import Section from "../section";
import images from "../../constant/images";
import Image from "next/image";

function Experience() {
  return (
    <Stack pt={20}>
      <Section>
        <Heading
          textAlign="center"
          pb={2}
          mb={16}
          maxW="max-content"
          mx="auto"
          borderBottom="1px solid"
          borderColor="gray.100"
        >
          Skills & Experience
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          rowGap={16}
          columnGap={10}
          py={5}
        >
          <Stack mx={{ base: "auto", md: "auto 0" }} w="full" maxW="450px">
            <SimpleGrid
              columns={4}
              columnGap={6}
              rowGap={8}
              alignSelf={{ base: "center", md: "initial" }}
            >
              {[
                images.css,
                images.git,
                images.graphql,
                images.typescript,
                images.javascript,
                images.sass,
                images.redux,
                images.python,
                images.react,
                images.html,
                images.mu5,
                images.tailwind,
              ].map((img) => (
                <Box
                  h={20}
                  w={20}
                  bg="rgba(0,0,0,.3)"
                  // bg="green.100"
                  p={5}
                  rounded="full"
                >
                  <Image src={img} alt="kdkdk" />
                </Box>
              ))}
            </SimpleGrid>
          </Stack>

          <Stack spacing={6} alignItems={{ base: "center", md: "initial" }}>
            <TimeLine
              title="Fixbot Inc"
              time="Feb 2022 – Present"
              text="Maintained effective communication with the backend team to ensure that our frontend product was in sync with the APIs provided."
              jobTitle="Frontend Software Engineer"
            />
            <TimeLine
              time="Sept 2021 – Feb 2022"
              title="Rhics Technology"
              text={`
              Significantly enhanced the frontend resilience of the admin dashboard which reduced app crashes in production by 80% by writing component and integration tests using Jest and React testing library.
              `}
              jobTitle="Frontend Software Engineer"
            />
            <TimeLine
              time="Feb 2021 – Aug 2021"
              title="BunchPay Limited"
              text={`
              Added accessible forms to the wallet transactions form which accelerated data entry by 100% using React and Formik.
              Upgraded the stability of the Bunchpay dashboard application by fixing memory leaks using React hooks.
              `}
              jobTitle="Frontend Software Engineer"
            />
            <TimeLine
              time="Aug 2020 – Nov 2020"
              title="Teenah Stores"
              jobTitle="Frontend Engineer Intern"
              isLast
              text="Participated in coding activities, maintaining integrity of program logic and coding and developing and updating existing systems to increase task success rate by 15%."
            />
          </Stack>
        </SimpleGrid>
      </Section>
    </Stack>
  );
}

export default Experience;
