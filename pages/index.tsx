import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

import ArrowLink from "components/ArrowLink";
import WithDividers from "components/WithDividers";

import { getPostsLatest } from "libs/blog";
import { getProjectsFeatured } from "libs/projects";
import { Post, Project } from "types";

type HomeProps = {
  posts: Post[];
  projects: Project[];
};

export default function Home({ posts, projects }: HomeProps) {
  return (
    <>
      <Head>
        <title>Alvar Lagerlöf: Developer and Designer</title>
        <meta name="description" content="Developer and designer living in Stockholm "></meta>
        <meta property="og:title" content="Alvar Lagerlöf"></meta>
        <meta property="og:description" content="Developer and designer living in Stockholm"></meta>
      </Head>

      <WithDividers direction="vertical">
        <Header />
        <WithDividers direction="horizontal">
          <SectionFeaturedProjects projects={projects} />
          <SectionRecentBlogPosts posts={posts} />
        </WithDividers>
      </WithDividers>
    </>
  );
}

function Header() {
  const audioRef = useRef(null);

  const play = () => {
    audioRef.current.play();
  };

  return (
    <header>
      <h1 className="font-heading text-4xl md:text-7xl mb-4">I'm Alvar Lagerlöf</h1>
      <button className="flex flex-row space-x-2 items-center mb-8" onClick={play}>
        <span className="md:text-xl font-bold text-primary mr-2">Hear the pronunciation</span>
        <Image alt="Speaker" src="/icons/speaker.svg" width="24" height="24" />
      </button>

      <audio ref={audioRef} aria-hidden>
        <source src="/name.flac" type="audio/flac" />
        Your browser does not support the audio element.
      </audio>

      <h2 className="font-subheading text-xl md:text-2xl max-w-[50ch]">
        A developer and designer. My story starts with a $2 computer from a flea market.{" "}
        <ArrowLink href="/about">Learn more</ArrowLink>
      </h2>
    </header>
  );
}

type SectionFeaturedProjectsProps = {
  projects: Project[];
};

function SectionFeaturedProjects({ projects }: SectionFeaturedProjectsProps) {
  return (
    <section className="md:min-w-[400px]">
      <h3 className="font-heading text-2xl md:text-4xl mb-6 md:mb-8">Featured projects</h3>
      <ul className="space-y-6 md:space-y-8">
        {projects.map(project => (
          <li key={project.title}>
            <Link href={project.link ?? "#"} passHref>
              <a
                target={project.link ? "_blank" : "_self"}
                rel="noreferrer"
                className="flex md:flex-row items-start sm:items-center space-x-4 cursor-pointer"
              >
                <div className="min-w-[120px]">
                  <Image
                    className="bordered rounded-xl object-cover"
                    src={"/content/projects/" + project.image}
                    width="120"
                    height="75"
                    alt="Project banner"
                  />
                </div>
                <div className="-m-1">
                  <h4 className="text-xl font-subheading font-semibold break-all mb-1">
                    {project.title}
                  </h4>
                  <p>{project.description}</p>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <h4 className="text-xl font-subheading mt-12">
        <ArrowLink href="/projects">All projects</ArrowLink>
      </h4>
    </section>
  );
}

type SectionRecentBlogPosts = {
  posts: Post[];
};

function SectionRecentBlogPosts({ posts }: SectionRecentBlogPosts) {
  return (
    <section>
      <h3 className="font-heading text-2xl md:text-4xl mb-6 md:mb-8">Recent blog posts</h3>
      <ul className="space-y-4 md:space-y-8">
        {posts.map(post => (
          <li key={post.title}>
            <Link href={`/blog/${post.slug}`} passHref>
              <a>
                <h4 className="text-xl font-subheading font-semibold  break-all mb-1">
                  {post.title}
                </h4>
                <p>{post.description}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <h4 className="text-xl font-subheading mt-12">
        <ArrowLink href="/blog">All posts</ArrowLink>
      </h4>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjectsFeatured(),
      posts: await getPostsLatest(),
    },
  };
}
