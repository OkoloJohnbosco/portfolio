import { Stack, Heading, Text, Box } from "@chakra-ui/react";

interface TimeLineProps {
  jobTitle: string;
  title: string;
  text: string;
  isLast?: boolean;
  time: string;
}

function TimeLine({
  jobTitle,
  title,
  text,
  isLast = false,
  time,
}: TimeLineProps) {
  return (
    <Stack
      pl={8}
      borderLeft="1px solid"
      borderColor={isLast ? "transparent" : "gray.400"}
      maxW="400px"
      minH="150px"
      spacing={4}
      position="relative"
    >
      <Box
        h={5}
        w={5}
        bg="teal.500"
        display="grid"
        placeItems="center"
        rounded="full"
        position="absolute"
        left={0}
        top={0}
        transform="translate(-50%, -50%)"
      ></Box>

      <Stack spacing={4}>
        <Stack spacing={0}>
          <Text mt={-8} fontSize="lg" as="h3">
            {title}{" "}
            <Text as="span" fontStyle="italic" color="gray.500" fontSize="nm">
              ({time})
            </Text>
          </Text>
          <Text color="gray.500" fontSize="nm">
            {jobTitle}
          </Text>
        </Stack>
        <Text>{text}</Text>
      </Stack>
    </Stack>
  );
}

export default TimeLine;
