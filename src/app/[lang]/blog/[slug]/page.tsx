import { getPostBySlug, getAllPosts } from "@/lib/markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { getDictionary, Locale } from "@/lib/dictionary";

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);
  const params = [];
  for (const lang of ["en", "hi"]) {
    for (const post of posts) {
      params.push({ lang, slug: post.slug });
    }
  }
  return params;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const post = getPostBySlug(slug, ["title", "date", "content"]);
  const dict = getDictionary(lang as Locale);

  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
             <Link href={`/${lang}/blog`} className="text-muted-foreground hover:text-primary text-sm">
                &larr; {dict.nav.blog}
            </Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
        <p className="text-muted-foreground mb-8">{post.date}</p>
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </article>
      </div>
    </Section>
  );
}
