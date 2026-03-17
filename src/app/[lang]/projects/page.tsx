import { getDictionary, Locale } from "@/lib/dictionary";
import projects from "@/data/projects.json";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { MapPin } from "lucide-react";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "hi" }];
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <Section>
      <h1 className="text-3xl font-bold tracking-tight mb-8 text-center">{dict.projects.title}</h1>
      <div className="flex justify-center">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden group flex flex-col md:flex-row h-full border-none shadow-md max-w-4xl w-full">
            <div className="md:w-1/2 aspect-video md:aspect-auto bg-muted relative">
               <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gray-200 p-8 text-center">
                  Landslide Detection System <br/> (IoT & Sensors)
               </div>
            </div>
            <CardContent className="p-8 flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase">
                      {project.status}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center">
                      <MapPin size={16} className="mr-1 text-secondary" /> {project.location}
                  </span>
              </div>
              <h3 className="font-bold text-2xl mb-4 group-hover:text-primary transition-colors">
                <Link href={`/${lang}/projects/${project.id}`}>{project.title}</Link>
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                {project.summary}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground italic">{project.timeline}</span>
                <Link href={`/${lang}/projects/${project.id}`} className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                    Full Project Details
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
