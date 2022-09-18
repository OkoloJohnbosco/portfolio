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
        h={16}
        w={16}
        bg="#E3F2F9"
        display="grid"
        placeItems="center"
        rounded="full"
        position="absolute"
        left={0}
        top={7}
        transform="translate(-50%, -50%)"
      >
        <Heading fontSize="xl" color="blue.900">
          {num}
        </Heading>
      </Box>
      <Heading color="brand.100" mt={-10} fontSize="2xl" as="h3">
        {title}
      </Heading>
      <Text color="blue.600">{text}</Text>
    </Stack>
  );
}

export default TimeLine;
