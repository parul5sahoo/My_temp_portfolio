import { useState } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import Head from "next/head";

const theme = {
  textPrimary: "#2C2C2C",
  textSecondary: "#555",
  accentColor: "#ff503f",
  backgroundPrimary: "#F4F4F2",
  backgroundSecondary: "#D4C9C9",
  backgroundHighlight: "#FFFFFF",
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Parul Sahoo</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary Meta Tags */}
        <title>Parul Sahoo</title>
        <meta name="title" content="Parul Sahoo" />
        <meta
          name="description"
          content="Hey! I'm Parul. I'm a DevOps enthusiast, passionate about DevOps, automation and Open Source."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://parulsahoo.tech/" />
        <meta property="og:title" content="Parul Sahoo" />
        <meta
          property="og:description"
          content="Hey! I'm Parul. I'm a DevOps enthusiast, passionate about DevOps, automation and Open Source."
        />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <script src="/js/TagCanvas.js"> </script>{" "}
        </Head>{" "}
        <>
          <Component {...pageProps} />{" "}
        </>{" "}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
