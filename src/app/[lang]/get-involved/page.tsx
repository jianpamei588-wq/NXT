import { getDictionary, Locale } from "@/lib/dictionary";
import VolunteerForm from "@/components/VolunteerForm";
import DonationPledgeForm from "@/components/DonationPledgeForm";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Heart, Coins, Landmark } from "lucide-react";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "hi" }];
}

export default async function GetInvolvedPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <>
      <Section className="bg-primary/5">
        <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">{dict.nav.donate} & {dict.nav.volunteer}</h1>
            <p className="text-xl text-muted-foreground">
                Your support drives our mission. Whether you give time or resources, you are building a better future.
            </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
            {/* Donation Section */}
            <div className="space-y-8">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-accent/10 text-accent-foreground">
                        <Heart size={32} />
                    </div>
                    <h2 className="text-3xl font-bold">Donate Funds</h2>
                </div>
                <p className="text-muted-foreground">
                    100% of your donation goes directly to project materials and logistics. We maintain full transparency.
                </p>
                
                <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="hover:border-primary cursor-pointer transition-colors">
                        <CardContent className="p-6 text-center">
                            <Coins size={32} className="mx-auto mb-2 text-primary" />
                            <h3 className="font-bold text-lg">$25</h3>
                            <p className="text-sm text-muted-foreground">Provides textbooks for 5 students</p>
                        </CardContent>
                    </Card>
                    <Card className="hover:border-primary cursor-pointer transition-colors bg-primary/5 border-primary">
                        <CardContent className="p-6 text-center">
                            <Coins size={32} className="mx-auto mb-2 text-primary" />
                            <h3 className="font-bold text-lg">$100</h3>
                            <p className="text-sm text-muted-foreground">Installs one solar street lamp</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="bg-muted p-6 rounded-lg border">
                    <div className="flex items-center gap-2 mb-4">
                        <Landmark size={20} />
                        <h3 className="font-bold">Bank Transfer Details</h3>
                    </div>
                    <div className="space-y-2 text-sm font-mono">
                        <p>Bank: Rural Development Bank</p>
                        <p>Account Name: NextBuildX Foundation</p>
                        <p>Account Number: XXXXX-XXXXX-1234</p>
                        <p>IFSC/SWIFT: RDBINBB123</p>
                    </div>
                </div>

                <DonationPledgeForm dict={dict} />
            </div>

            {/* Volunteer Section */}
            <div className="space-y-8">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                        <HardHatIcon size={32} />
                    </div>
                    <h2 className="text-3xl font-bold">{dict.volunteer.title}</h2>
                </div>
                <p className="text-muted-foreground">
                    Join our team of students and professionals working on the ground.
                </p>
                
                <div className="bg-card border rounded-lg p-6 shadow-sm">
                    <VolunteerForm dict={dict} />
                </div>
            </div>
        </div>
      </Section>
    </>
  );
}

function HardHatIcon({ size, className }: { size?: number, className?: string }) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        >
        <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
        <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
        <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
        <path d="M14 6h0a6 6 0 0 1 6 6v3" />
        </svg>
    )
}
