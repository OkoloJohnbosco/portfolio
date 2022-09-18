import React from "react";
import { Stack, IconButton, Tooltip, HStack } from "@chakra-ui/react";
import Icon from "../icon";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function Socials() {
  return (
    <HStack position="absolute" bottom={2} spacing={4} left={0}>
      <Tooltip hasArrow placement="top" py={2} px={4} rounded={4} label="lmao">
        <IconButton
          size="sm"
          rounded="full"
          aria-label="color mode toggle button"
        >
          <Icon iconComp={BsTwitter} boxSize={4} />
        </IconButton>
      </Tooltip>

      <Tooltip hasArrow placement="top" py={2} px={4} rounded={4} label="lmao">
        <IconButton
          size="sm"
          rounded="full"
          aria-label="color mode toggle button"
        >
          <Icon iconComp={FaLinkedinIn} boxSize={4} />
        </IconButton>
      </Tooltip>

      <Tooltip hasArrow placement="top" py={2} px={4} rounded={4} label="lmao">
        <IconButton
          size="sm"
          rounded="full"
          aria-label="color mode toggle button"
        >
          <Icon boxSize={4} iconComp={BsGithub} />
        </IconButton>
      </Tooltip>
    </HStack>
  );
}

export default Socials;
