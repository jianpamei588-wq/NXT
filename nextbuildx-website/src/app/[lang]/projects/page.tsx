import { getDictionary } from "@/lib/dictionary";
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
  params: Promise<{ lang: "en" | "hi" }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <Section>
      <h1 className="text-3xl font-bold tracking-tight mb-8">{dict.projects.title}</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden group h-full flex flex-col">
            <div className="aspect-video bg-muted relative">
               <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gray-200">
                  {/* Placeholder for real image */}
                  <span className="sr-only">Image of {project.title}</span>
                  Img: {project.title}
               </div>
            </div>
            <CardContent className="p-4 flex-1 flex flex-col">
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
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                {project.summary}
              </p>
              <Link href={`/${lang}/projects/${project.id}`} className="text-sm font-medium text-primary hover:underline mt-auto">
                {dict.projects.view_details} &rarr;
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
