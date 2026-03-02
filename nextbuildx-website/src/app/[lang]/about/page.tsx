import { getDictionary } from "@/lib/dictionary";
import team from "@/data/team.json";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Target, Eye, HeartHandshake } from "lucide-react";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "hi" }];
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: "en" | "hi" }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <>
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">{dict.about.title}</h1>
            <p className="text-xl text-muted-foreground">{dict.about.mission}</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center p-6 border-none shadow-none bg-transparent">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    <Target size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Mission</h3>
                <p className="text-muted-foreground">{dict.about.mission}</p>
            </Card>
            <Card className="text-center p-6 border-none shadow-none bg-transparent">
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
                    <Eye size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Vision</h3>
                <p className="text-muted-foreground">{dict.about.vision}</p>
            </Card>
            <Card className="text-center p-6 border-none shadow-none bg-transparent">
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent-foreground mb-4">
                    <HeartHandshake size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Values</h3>
                <p className="text-muted-foreground">{dict.about.values}</p>
            </Card>
        </div>
      </Section>

      <Section className="bg-muted/50">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">{dict.about.team_title}</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {team.map((member) => (
                <Card key={member.id} className="overflow-hidden">
                    <div className="aspect-square bg-gray-200 relative">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                            {/* Placeholder for real image */}
                            Photo: {member.name}
                        </div>
                    </div>
                    <CardContent className="text-center pt-6">
                        <h3 className="font-bold text-lg">{member.name}</h3>
                        <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                        <p className="text-muted-foreground text-sm">{member.bio}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">{dict.about.partners_title}</h2>
        <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
            {/* Partner Placeholders */}
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">Partner 1</div>
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">Partner 2</div>
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">Partner 3</div>
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">Partner 4</div>
        </div>
      </Section>
    </>
  );
}
