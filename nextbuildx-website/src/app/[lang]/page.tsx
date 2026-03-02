import Hero from "@/components/Hero";
import { getDictionary } from "@/lib/dictionary";
import projects from "@/data/projects.json";
import stories from "@/data/stories.json";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ArrowRight, MapPin } from "lucide-react";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "hi" }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <>
      <Hero dict={dict} lang={lang} />
      
      {/* Featured Projects */}
      <Section className="bg-background">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-8">
          <h2 className="text-3xl font-bold tracking-tight">{dict.projects.title}</h2>
          <Link href={`/${lang}/projects`} className="text-primary hover:underline inline-flex items-center">
             {dict.projects.view_details} <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <div className="aspect-video bg-muted relative">
                 <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gray-200">
                    {/* Placeholder for real image */}
                    <span className="sr-only">Image of {project.title}</span>
                    Img: {project.title}
                 </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-primary/10 text-primary">
                        {project.status}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center">
                        <MapPin size={12} className="mr-1" /> {project.location}
                    </span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  <Link href={`/${lang}/projects/${project.id}`}>{project.title}</Link>
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Impact Stories */}
      <Section className="bg-muted/50">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">{dict.hero.impact}</h2>
        <div className="grid gap-8 md:grid-cols-3">
             {stories.map((story) => (
                <div key={story.id} className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card shadow-sm border">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xl">
                        {story.metric.split(" ")[0]}
                    </div>
                    <h3 className="font-bold text-xl">{story.title}</h3>
                    <p className="text-muted-foreground text-sm">{story.description}</p>
                </div>
             ))}
        </div>
      </Section>
    </>
  );
}
