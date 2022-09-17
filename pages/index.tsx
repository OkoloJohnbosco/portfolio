import { Heading, Stack } from "@chakra-ui/react";
import Header from "../components/header";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <Stack>
      <Navbar />
      <Header />
    </Stack>
  );
}
