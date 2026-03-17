import { getDictionary, Locale } from "@/lib/dictionary";
import { getAllPosts } from "@/lib/markdown";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "hi" }];
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const posts = getAllPosts(["title", "date", "slug", "excerpt"]);

  return (
    <Section>
      <h1 className="text-3xl font-bold tracking-tight mb-8">{dict.nav.blog}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug} className="flex flex-col h-full hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col flex-1">
              <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
              <h2 className="text-xl font-bold mb-2">
                <Link href={`/${lang}/blog/${post.slug}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
              <Link href={`/${lang}/blog/${post.slug}`} className="text-primary font-medium hover:underline mt-auto">
                Read More &rarr;
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
