import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

function Section({ children, ...props }: BoxProps) {
  return (
    <Box maxW="1400px" alignSelf="center" mx="auto" w="90%" {...props}>
      {children}
    </Box>
  );
}

export default Section;
