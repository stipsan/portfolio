import styled, { ThemeProvider } from "styled-components";

import { getPostsLatest } from "../libs/blog";
import { getProjectsFeatured } from "../libs/projects";
import getImage from "../libs/image";

import Head from "next/head";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Main from "../components/Main";
import ItemGrid from "../components/ItemGrid";
import ProjectPreview from "../components/ProjectPreview";
import BlogPreview from "../components/BlogPreview";
import Header from "../components/Header";
import Section from "../components/Section";
import CtaLink from "../components/CtaLink";
import { Heading, Subtitle, Title } from "../components/Headings";

export default function Home({ image, posts, projects }) {
  return (
    <ThemeProvider
      theme={{
        backgroundTop: "#ffdede",
        backgroundBottom: "#FFF5F5",
        accent: "#6938B7",
      }}
    >
      <Wrapper>
        <Head>
          <title>Alvar Lagerlöf: Developer and Designer</title>
          <meta
            name="description"
            content="Developer and designer living in Stockholm who likes working with React and Linux"
          ></meta>
          <meta property="og:title" content="Alvar Lagerlöf"></meta>
          <meta
            property="og:description"
            content="Developer and designer living in Stockholm who likes working with React and Linux"
          ></meta>
          <meta property="og:image" content={"https://alvar.dev" + image}></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@alvarlagerlof"></meta>
          <meta name="twitter:creator" content="@alvarlagerlof"></meta>
        </Head>

        <NavBar />

        <Main>
          <Header>
            <Title>Hi there! 👋</Title>
            <Subtitle>
              I'm Alvar Lagerlöf, best described as an 18 year old Swedish developer who also likes
              to design. My story starts with a $2 computer from a flea market.{" "}
              <CtaLink href="/about">Learn more</CtaLink>
            </Subtitle>

            <Subtitle>
              Love to work with: React, Redux, Next.js, styled-components, TypeScript, Node, Kotlin,
              Swift, Linux, Docker, Firebase, Figma.
            </Subtitle>
          </Header>

          <Section>
            <Heading>Featured projects</Heading>{" "}
            <p>
              View all projects <CtaLink href="/projects">here</CtaLink>
            </p>
            <ItemGrid>
              {projects.map(data => (
                <li key={data.title}>
                  <ProjectPreview data={data} />
                </li>
              ))}
            </ItemGrid>
          </Section>

          <Section>
            <Heading>Latest blog posts</Heading>
            <p>
              Sometimes I try to time to write down my thoughts. View all posts{" "}
              <CtaLink href="/blog">here</CtaLink>
            </p>
            <ItemGrid>
              {posts.map(data => (
                <li key={data.title}>
                  <BlogPreview data={data} />
                </li>
              ))}
            </ItemGrid>
          </Section>
        </Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

const Split = styled.div`
  display: flex;
  flex-direction: row;
  margin: -24px;

  & div {
    margin: 24px;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjectsFeatured(),
      posts: await getPostsLatest(),
      image: await getImage(
        "home",
        "Alvar Lagerlöf",
        "Developer and designer living in Stockholm who likes working with React and Linux",
        "#FFC2C2"
      ),
    },
  };
}
