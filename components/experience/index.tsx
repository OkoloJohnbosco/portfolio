import React from "react";
import { Stack, SimpleGrid, Heading } from "@chakra-ui/react";
import TimeLine from "../timeline";
import Section from "../section";

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
        <SimpleGrid columns={2}>
          <Stack>
            <p>Lmao</p>
          </Stack>

          <Stack spacing={6}>
            <TimeLine
              title="Create an account"
              text="Sign up for an account with your name, email and phone number."
              num="01"
            />
            <TimeLine
              title="Top up Airtime and Pay Bills"
              text="Using your debit card, bank account, USSD, QR Code, pay your bills."
              num="02"
            />
            <TimeLine
              title="Make transactions"
              text="Sit back, relax & make transaction with ease all day, everyday."
              num="03"
              isLast
            />
          </Stack>
        </SimpleGrid>
      </Section>
    </Stack>
  );
}

export default Experience;
