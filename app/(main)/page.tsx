import { ArrowLink } from "components/ArrowLink";
import { SetTitle } from "components/SetTitle";
import { WithDividers } from "components/WithDividers";

import { FeaturedProjects } from "./components/FeaturedProjects";
import { Pronunciation } from "./components/Pronunciation";
import { RecentBlogPosts } from "./components/RecentBlogPosts";

export default function IndexPage() {
  return (
    <WithDividers direction="vertical">
      <SetTitle to="Alvar Lagerlöf" />
      <header>
        <h1 className="font-heading text-4xl md:text-7xl mb-4">I'm Alvar Lagerlöf</h1>
        <Pronunciation />

        <h2 className="font-subheading text-xl md:text-2xl max-w-[50ch]">
          A developer and designer. My story starts with a $2 computer from a flea market.{" "}
          <ArrowLink href="/about">Learn more</ArrowLink>
        </h2>
      </header>

      <WithDividers direction="horizontal">
        <FeaturedProjects />
        <RecentBlogPosts />
      </WithDividers>
    </WithDividers>
  );
}
