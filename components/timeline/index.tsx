import { Stack, Heading, Text, Box } from "@chakra-ui/react";

interface TimeLineProps {
  num: string;
  title: string;
  text: string;
  isLast?: boolean;
}

function TimeLine({ num, title, text, isLast = false }: TimeLineProps) {
  return (
    <Stack
      pl={10}
      borderLeft="1px solid"
      borderColor={isLast ? "transparent" : "blue.400"}
      maxW="400px"
      minH="150px"
      spacing={4}
      position="relative"
    >
      <Box
        h={5}
        w={5}
        bg="whiteAlpha.900"
        display="grid"
        placeItems="center"
        rounded="full"
        position="absolute"
        left={0}
        top={0}
        transform="translate(-50%, -50%)"
      ></Box>
      <Stack spacing={4}>
        <Text mt={-8} fontSize="xl" as="h3">
          {title}
        </Text>
        <Text>{text}</Text>
      </Stack>
    </Stack>
  );
}

export default TimeLine;
