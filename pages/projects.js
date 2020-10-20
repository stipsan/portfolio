import Head from "next/head";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf - Projects</title>
      </Head>

      <Nav />

      <Main>
        <section>
          <h1>Projects</h1>
        </section>
      </Main>

      <Footer />
    </Wrapper>
  );
}
