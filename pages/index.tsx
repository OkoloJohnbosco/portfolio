import { Heading, Stack } from "@chakra-ui/react";
import Experience from "../components/experience";
import Header from "../components/header";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <Stack>
      <Navbar />
      <Header />
      <Experience />
    </Stack>
  );
}
