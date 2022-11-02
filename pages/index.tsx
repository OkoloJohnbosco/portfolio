import { Heading, Stack } from "@chakra-ui/react";
import Head from "next/head";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Tabs from "../components/tabs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaybee Portfolio</title>
        <meta name="description" content="johnbosco portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack>
        <Navbar />
        <Header />
        <Experience />
        <Projects />
        <Contact />
        {/* <Stack w="full" alignItems="center">
          <Tabs />
        </Stack> */}
      </Stack>
    </>
  );
}
