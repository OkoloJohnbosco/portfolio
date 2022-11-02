import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../lib/theme";

export default function Document() {
  return (
    <Html>
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital@1&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap"
        rel="stylesheet"
      ></link>

      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="apple-touch-icon" href="../public/images/logo.png" />
      <link rel="icon" href="../public/favicon.ico" />

      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
