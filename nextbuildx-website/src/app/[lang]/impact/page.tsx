import { getDictionary } from "@/lib/dictionary";
import stories from "@/data/stories.json";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "hi" }];
}

export default async function ImpactPage({
  params,
}: {
  params: Promise<{ lang: "en" | "hi" }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{dict.impact.title}</h1>
        <p className="text-xl text-muted-foreground">
          See the real-world difference we are making in rural communities.
        </p>
      </div>

      <div className="space-y-16">
        {stories.map((story, index) => (
          <div key={story.id} className={`flex flex-col gap-8 md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
             <div className="flex-1 aspect-video bg-muted rounded-xl overflow-hidden relative shadow-lg">
                 <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gray-200 text-xl">
                    {/* Placeholder for real image */}
                    Image: {story.title}
                 </div>
             </div>
             <div className="flex-1 space-y-4">
                <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                    {story.metric}
                </div>
                <h2 className="text-3xl font-bold">{story.title}</h2>
                <p className="text-lg text-muted-foreground">{story.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-muted/30 rounded-lg text-center">
                        <span className="block text-sm text-muted-foreground font-semibold mb-1 uppercase">{dict.impact.before}</span>
                        <span className="font-mono text-sm">Limited Access</span>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg text-center border border-primary/10">
                         <span className="block text-sm text-primary font-semibold mb-1 uppercase">{dict.impact.after}</span>
                         <span className="font-mono text-sm font-bold">{story.metric}</span>
                    </div>
                </div>
             </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
