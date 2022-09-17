import React from "react";
import { Stack, IconButton, Tooltip } from "@chakra-ui/react";
import Icon from "../icon";
import { BsSun } from "react-icons/bs";

function Socials() {
  return (
    <Stack position="absolute" bottom={2} left={0}>
      <Tooltip>
        <IconButton rounded="full" aria-label="color mode toggle button">
          <Icon iconComp={BsSun} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export default Socials;
