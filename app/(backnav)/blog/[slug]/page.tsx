import { CustomBlockContent } from "components/CustomBlockContent";
import { SetTitle } from "components/SetTitle";
import { SkeletonText } from "components/SkeletonText";
import { WithDividers } from "components/WithDividers";
import { getClient } from "lib/sanity/sanity.server";
import { formatDate } from "lib/utils/formatDate";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Post } from "types";

const query = groq`
*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  date,
  body[] {
    ...,
    markDefs[] {
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  }
}
`;

export default async function PostPage({ params: { slug } }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      {/* @ts-ignore */}
      <Content slug={slug} />
    </Suspense>
  );
}

async function Content({ slug }: { slug: string }) {
  const post: Post = await getClient().fetch(query, {
    slug,
  });

  await new Promise(r => setTimeout(r, parseInt(process.env.NEXT_PUBLIC_ARTIFICIAL_DELAY)));

  if (!post) notFound();

  return (
    <WithDividers direction="vertical">
      <SetTitle to={post.title} />
      <header>
        <h1 className="font-heading text-4xl md:text-7xl mb-8">{post.title}</h1>
        <h2 className="font-subheading text-xl md:text-2xl max-w-[60ch] mb-8">
          {post.description}
        </h2>
        <p className="font-medium">
          Published {formatDate(post.date.published)}
          {post.date.updated && ` - Updated ${formatDate(post.date.updated)}`} - by Alvar Lagerlöf
        </p>
      </header>

      <article>
        <div className="prose">
          <CustomBlockContent blocks={post.body} />
        </div>
      </article>
    </WithDividers>
  );
}

function Loading() {
  return (
    <WithDividers direction="vertical">
      <div>
        <SkeletonText className="w-[40ch] max-w-full h-[3.5rem] mb-4" />
        <SkeletonText className="w-[60ch] max-w-full h-[2rem] mb-8" />
        <SkeletonText className="w-[30ch] max-w-full h-[2rem]" />
      </div>
      <div>
        <SkeletonText className="w-[64ch] max-w-full h-[50rem]" />
      </div>
    </WithDividers>
  );
}
