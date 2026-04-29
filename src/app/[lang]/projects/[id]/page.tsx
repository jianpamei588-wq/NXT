import { getDictionary, Locale } from "@/lib/dictionary";
import projects from "@/data/projects.json";
import { Section } from "@/components/ui/Section";
import { notFound } from "next/navigation";
import { MapPin, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const params = [];
  for (const lang of ["en", "hi"]) {
    for (const project of projects) {
      params.push({ lang, id: project.id });
    }
  }
  return params;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const dict = getDictionary(lang as Locale);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <Section>
        <div className="mb-6">
            <Link href={`/${lang}/projects`} className="text-muted-foreground hover:text-primary text-sm">
                &larr; {dict.projects.title}
            </Link>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
            <div className="aspect-video bg-muted relative rounded-lg overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gray-200 text-xl">
                    {/* Placeholder for real image */}
                    Image of {project.title}
                 </div>
            </div>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">{project.title}</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <MapPin size={16} /> {project.location}
                        </span>
                         <span className="flex items-center gap-1">
                            <Calendar size={16} /> {project.timeline}
                        </span>
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-semibold">
                            {project.status}
                        </span>
                    </div>
                </div>

                <div className="prose max-w-none text-muted-foreground">
                    <p className="text-lg">{project.summary}</p>
                    {/* Placeholder for more detailed content */}
                    <p>
                        This project aims to address critical infrastructure needs in the region. 
                        By working closely with local stakeholders, we ensure sustainable and long-term impact.
                        The community has been involved from the planning stage to execution.
                    </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg border">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle size={20} className="text-green-600" />
                        Key Outcomes
                    </h3>
                    <p className="text-sm mb-4">{project.outcome}</p>
                    <Link 
                        href={`/${lang}/get-involved?project=${encodeURIComponent(project.title)}`}
                        className="inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 text-xs font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 w-full"
                    >
                        Volunteer for this Project
                    </Link>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
}
