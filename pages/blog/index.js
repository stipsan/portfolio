import styled from "styled-components";

import Head from "next/head";

import { getPostsSectioned } from "../../api/blog";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Main from "../../components/Main";
import BlogPreview from "../../components/BlogPreview";
import Header from "../../components/Header";
import Section from "../../components/Section";
import ItemGrid from "../../components/ItemGrid";

export default function Blog({ postsSectioned }) {
  return (
    <Wrapper>
      <Head>
        <title>Alvar Lagerlöf - Blog</title>
      </Head>

      <NavBar />

      <Main>
        {/* <Header>
          <h1>Blog</h1>
          <h2>Sometimes I try to time to write down my thoughts.</h2>
        </Header> */}

        <Section>
          <YearList>
            {Object.entries(postsSectioned).map(([year, posts]) => {
              return <Year key={year} year={year} posts={posts} />;
            })}
          </YearList>
        </Section>
      </Main>
      <Footer />
    </Wrapper>
  );
}

function Year({ year, posts }) {
  return (
    <StyledYear>
      <h1>{year}</h1>
      <ItemGrid>
        {posts.map(post => {
          return (
            <li key={post.title}>
              <BlogPreview data={post} />
            </li>
          );
        })}
      </ItemGrid>
    </StyledYear>
  );
}

const YearList = styled.ul`
  list-style: none;
`;

const StyledYear = styled.li`
  margin: 64px 0;

  & > h1 {
    margin-bottom: 16px;
  }

  & > ul {
    list-style: none;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      postsSectioned: await getPostsSectioned(),
    },
  };
}
