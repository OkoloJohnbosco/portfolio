import React from "react";
import { IconButton, Tooltip, SimpleGrid } from "@chakra-ui/react";
import Icon from "../icon";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function Socials() {
  return (
    <SimpleGrid
      columns={{ base: 1, lg: 3 }}
      position="absolute"
      bottom={{ base: -40, lg: 2 }}
      spacing={4}
      left={0}
      zIndex="docked"
    >
      <Tooltip hasArrow placement="top" py={2} px={4} rounded={4}>
        <a href="https://twitter.com/JohnboscoOkolo" target="_blank">
          <IconButton
            size="sm"
            colorScheme="teal"
            variant="outline"
            rounded="full"
            aria-label="color mode toggle button"
          >
            <Icon iconComp={BsTwitter} boxSize={4} />
          </IconButton>
        </a>
      </Tooltip>
      <Tooltip hasArrow placement="top" py={2} px={4} rounded={4}>
        <a href="ww.linkedin.com/in/johnbosco-okolo-733434189" target="_blank">
          <IconButton
            size="sm"
            variant="outline"
            colorScheme="teal"
            rounded="full"
            aria-label="color mode toggle button"
          >
            <Icon iconComp={FaLinkedinIn} boxSize={4} />
          </IconButton>
        </a>
      </Tooltip>

      <Tooltip hasArrow placement="top" py={2} px={4} rounded={4}>
        <a href="https://github.com/OkoloJohnbosco" target="_blank">
          <IconButton
            size="sm"
            variant="outline"
            colorScheme="teal"
            rounded="full"
            aria-label="color mode toggle button"
          >
            <Icon boxSize={4} iconComp={BsGithub} />
          </IconButton>
        </a>
      </Tooltip>
    </SimpleGrid>
  );
}

export default Socials;
