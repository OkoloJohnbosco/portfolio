import React from "react";
import {
  HStack,
  Button,
  chakra,
  shouldForwardProp,
  Stack,
} from "@chakra-ui/react";
import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";

const MotionBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function FramerTryOut() {
  const [isVisible, setVisibility] = React.useState<boolean>(true);
  const toggleVisibity = () => setVisibility((prev) => !prev);

  return (
    <Stack minH="100vh" justifyContent="center" px={10} spacing={8}>
      <Button size="lg" onClick={toggleVisibity} w="max-content">
        Toggle Visibility
      </Button>
      <MotionBox
        h="200px"
        w="200px"
        bg="purple.400"
        rounded={10}
        animate={{ x: 800 }}
        whileHover={{ scale: 1.1, opacity: 0.5 }}
        whileTap={{ scale: 0.9 }}
        // dragConstraints={{ top: 100, bottom: 100, left: 0, right: 400 }}
        // cursor="grab"
        // drag
        // transition={{ ease: "easeOut", duration: 2 }}
        // @ts-ignore
        transition={{ type: "spring", stifness: 90 }}
      />
      <HStack pt="20vh" pb="20vh">
        <MotionBox
          h="200px"
          w="200px"
          bg="purple.400"
          rounded={10}
          initial={{ opacity: 0.2, background: "red", x: -400 }}
          //   animate={{ opacity: 1 }}
          whileInView={{
            opacity: 1,
            x: 0,
            // x: 300,
            transition: { stiffness: 120, type: "spring" },
          }}
        />
        <AnimatePresence>
          {isVisible && (
            <MotionBox
              h="200px"
              w="200px"
              bg="purple.400"
              rounded={10}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: 100,
                scale: [1, 1.1, 1.1, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "10%"],
              }}
              exit={{ opacity: 0, x: 0 }}
              //   transition={{
              //     duration: 2,
              //     ease: "easeInOut",
              //     times: [0, 0.2, 0.5, 0.8, 1],
              //     repeat: Infinity,
              //     repeatDelay: 1,
              //   }}
            />
          )}
        </AnimatePresence>
      </HStack>
    </Stack>
  );
}

export default FramerTryOut;
