import Head from "next/head";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import Header from "../components/Header";
import CtaLink from "../components/CtaLink";
import { ThemeProvider } from "styled-components";
import { getImage } from "../api/image";

export default function Contact({ image }) {
  return (
    <ThemeProvider theme={{ backgroundTop: "white", backgroundBottom: "white", accent: "#6c20b3" }}>
      <Wrapper>
        <Head>
          <title>404 - Alvar Lagerlöf</title>
          <meta property="og:title" content="404"></meta>
          <meta property="og:description" content="Page not found"></meta>
          <meta property="og:image" content={"https://alvar.dev" + image}></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@alvarlagerlof"></meta>
          <meta name="twitter:creator" content="@alvarlagerlof"></meta>
        </Head>

        <NavBar />

        <Main>
          <Header>
            <h1>404 Not found</h1>
            <h2>
              Perhaps you want to <CtaLink href="/">go home</CtaLink>
            </h2>
          </Header>
        </Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  return {
    props: {
      image: await getImage("404", "404", "Not found", "#FFF"),
    },
  };
}
