import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

type FooterProps = {
  lang: string;
  dict: any;
};

export default function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="w-full border-t bg-background py-12 md:py-16">
      <div className="container grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold tracking-tighter text-primary">NextBuildX</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            {dict.about.mission}
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold">{dict.nav.projects}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href={`/${lang}/projects`} className="hover:text-primary transition-colors">
                {dict.projects.status_ongoing}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/projects`} className="hover:text-primary transition-colors">
                 {dict.projects.status_completed}
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
            <h4 className="font-semibold">{dict.nav.volunteer}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                    <Link href={`/${lang}/get-involved`} className="hover:text-primary transition-colors">
                        {dict.nav.volunteer}
                    </Link>
                </li>
                 <li>
                    <Link href={`/${lang}/contact`} className="hover:text-primary transition-colors">
                        {dict.contact.title}
                    </Link>
                </li>
            </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold">Connect</h4>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </Link>
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </Link>
            <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </Link>
             <Link href="mailto:contact@nextbuildx.org" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </Link>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">{dict.footer.newsletter}</p>
            <form className="flex gap-2" action="https://formspree.io/f/placeholder" method="POST">
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    required
                />
                <button 
                    type="submit"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                    Sub
                </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© 2026 NextBuildX. {dict.footer.rights}</p>
        <div className="flex gap-4">
            <Link href="#" className="hover:underline">{dict.footer.privacy}</Link>
        </div>
      </div>
    </footer>
  );
}
