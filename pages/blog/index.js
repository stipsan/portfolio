import Head from "next/head";
import Link from "next/link";

import { getPosts } from "../../api/blog";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Main from "../../components/Main";

export default function Blog({ posts }) {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf - Blog</title>
      </Head>

      <Nav />

      <Main>
        <section>
          <h1>Blog</h1>

          <ul>
            {posts.map(({ slug, title, description, date }) => (
              <Link href={"/blog/" + slug} key={title}>
                <li>
                  <h2>{title}</h2>
                  <h3>{date}</h3>
                  <p>{description}</p>
                </li>
              </Link>
            ))}
          </ul>
        </section>
      </Main>

      <Footer />
    </Wrapper>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getPosts(),
    },
  };
}
