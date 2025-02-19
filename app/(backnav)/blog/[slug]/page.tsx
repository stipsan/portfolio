import { CustomBlockContent } from "components/CustomBlockContent";
import { SetTitle } from "components/SetTitle";
import { SkeletonText } from "components/SkeletonText";
import { WithDividers } from "components/WithDividers";
import { formatDate } from "lib/formatDate";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getPost } from "./getPost";

export default function PostPage({ params: { slug } }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      {/* @ts-ignore */}
      <Content slug={slug} />
    </Suspense>
  );
}

async function Content({ slug }: { slug: string }) {
  const post = await getPost(slug);

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
          <Suspense>
            <CustomBlockContent blocks={post.body} />
          </Suspense>
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
