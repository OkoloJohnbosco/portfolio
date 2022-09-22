import React from "react";
import { chakra, shouldForwardProp, Stack } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const MotionBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function FramerTryOut() {
  return <Stack minH="100vh" bg="#ecece4"></Stack>;
}

export default FramerTryOut;
