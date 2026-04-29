import Link from "next/link";
import { Heart, HardHat, FileText } from "lucide-react";
import { Section } from "./ui/Section";
import { Dictionary } from "@/lib/dictionary";

type HeroProps = {
  dict: Dictionary;
  lang: string;
};

export default function Hero({ dict, lang }: HeroProps) {
  return (
    <Section className="bg-primary text-primary-foreground">
      <div className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
          {dict.hero.title}
        </h1>
        <p className="mx-auto max-w-[700px] text-lg sm:text-xl md:text-2xl text-primary-foreground/90">
          {dict.hero.subtitle}
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
          <p className="font-semibold text-accent">{dict.hero.impact}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href={`/${lang}/get-involved`}
            className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <Heart className="mr-2 h-4 w-4" />
            {dict.hero.cta_donate}
          </Link>
          <Link
            href={`/${lang}/get-involved`}
            className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <HardHat className="mr-2 h-4 w-4" />
            {dict.hero.cta_volunteer}
          </Link>
           <Link
            href={`/${lang}/contact?type=suggest`}
             className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 hover:bg-white/10 text-primary-foreground px-8 text-sm font-medium transition-colors"
          >
             <FileText className="mr-2 h-4 w-4" />
            {dict.hero.cta_report}
          </Link>
        </div>
      </div>
    </Section>
  );
}
