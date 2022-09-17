import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

function Section({ children, ...props }: BoxProps) {
  return (
    <Box maxW="1200px" alignSelf="center" mx="auto" w="96%" {...props}>
      {children}
    </Box>
  );
}

export default Section;
