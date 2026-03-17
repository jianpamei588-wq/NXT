import Hero from "@/components/Hero";
import { getDictionary, Locale } from "@/lib/dictionary";
import projects from "@/data/projects.json";
import stories from "@/data/stories.json";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ArrowRight, MapPin } from "lucide-react";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <>
      <Hero dict={dict} lang={lang} />
      
      {/* Upcoming Projects */}
      <Section className="bg-background">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">{dict.projects.title}</h2>
            <p className="text-muted-foreground">Our flagship initiative to bring safety to rural hilly regions.</p>
          </div>
          <Link href={`/${lang}/projects`} className="text-primary font-semibold hover:underline inline-flex items-center group/link">
             {dict.projects.view_details} <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
        <div className="flex justify-center">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group flex flex-col md:flex-row h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 max-w-4xl w-full">
              <div className="md:w-2/5 aspect-video md:aspect-auto bg-muted relative overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gray-200 group-hover:scale-105 transition-transform duration-500 text-center p-4">
                    {/* Placeholder for real image */}
                    <span className="sr-only">Image of {project.title}</span>
                    Landslide Detection System <br/> (Prototype Stage)
                 </div>
                 <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-primary shadow-sm">
                        {project.status}
                    </span>
                 </div>
              </div>
              <CardContent className="p-8 flex flex-col flex-1 justify-center">
                <div className="flex items-center text-xs text-muted-foreground mb-3">
                    <MapPin size={14} className="mr-1 text-secondary" /> {project.location}
                </div>
                <h3 className="font-bold text-2xl mb-4 group-hover:text-primary transition-colors leading-tight">
                  <Link href={`/${lang}/projects/${project.id}`}>{project.title}</Link>
                </h3>
                <p className="text-muted-foreground text-base mb-6">
                  {project.summary}
                </p>
                <Link href={`/${lang}/projects/${project.id}`} className="text-sm font-bold text-primary hover:translate-x-1 transition-transform inline-flex items-center">
                   Read about Phase 1 <ArrowRight size={16} className="ml-2" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Our Vision */}
      <Section className="bg-primary/5">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{dict.hero.impact}</h2>
            <p className="text-muted-foreground text-lg">The goals and aspirations driving our startup journey.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
             {stories.slice(0, 3).map((story) => (
                <div key={story.id} className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-card shadow-sm border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
                        {story.metric.split(" ")[0]}
                    </div>
                    <h3 className="font-bold text-xl">{story.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{story.description}</p>
                </div>
             ))}
        </div>
      </Section>
    </>
  );
}
