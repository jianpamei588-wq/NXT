import { getDictionary, Locale } from "@/lib/dictionary";
import ContactForm from "@/components/ContactForm";
import { Section } from "@/components/ui/Section";
import { Mail, Phone, MapPin } from "lucide-react";
import { Suspense } from "react";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "hi" }];
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">{dict.contact.title}</h1>
            <p className="text-muted-foreground mb-8 text-lg">
                Have questions or want to collaborate? Reach out to us.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Mail size={20} />
                    </div>
                    <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:hello@nextbuildx.org" className="text-muted-foreground hover:text-primary">hello@nextbuildx.org</a>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Phone size={20} />
                    </div>
                    <div>
                        <p className="font-semibold">Phone</p>
                        <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary">+91 98765 43210</a>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-muted-foreground">New Delhi, India</p>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground border">
                Map Integration Placeholder
            </div>
        </div>
        
        <div className="bg-card p-6 md:p-8 rounded-lg border shadow-sm">
             <Suspense fallback={<div className="h-64 flex items-center justify-center text-muted-foreground">Loading Form...</div>}>
                <ContactForm dict={dict} />
             </Suspense>
        </div>
      </div>
    </Section>
  );
}
