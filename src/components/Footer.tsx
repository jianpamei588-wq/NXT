"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import { Dictionary } from "@/lib/dictionary";

type FooterProps = {
  lang: string;
  dict: Dictionary;
};

export default function Footer({ lang, dict }: FooterProps) {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleNewsletterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.current) return;

    setStatus("submitting");

    // Add hidden fields for consistency with the template
    const emailInput = form.current.querySelector('input[name="from_email"]') as HTMLInputElement;
    const combinedMessage = `Newsletter Subscription Request\nEmail: ${emailInput.value}`;
    
    const messageInput = document.createElement("input");
    messageInput.type = "hidden";
    messageInput.name = "message";
    messageInput.value = combinedMessage;
    form.current.appendChild(messageInput);

    try {
      await emailjs.sendForm(
        "service_tgojfm6",
        "template_9la6u1d",
        form.current,
        "vcUSvSSjaA_DWGbPn"
      );
      setStatus("success");
      form.current.reset();
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    } finally {
      if (form.current && messageInput.parentNode === form.current) {
        form.current.removeChild(messageInput);
      }
    }
  }

  return (
    <footer className="w-full border-t bg-background py-12 md:py-16">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
             <Link href="mailto:hello@nextbuildx.org" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </Link>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">{dict.footer.newsletter}</p>
            <form ref={form} onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input type="hidden" name="form_type" value="Newsletter Subscription" />
                <input type="hidden" name="subject" value="Newsletter Subscription" />
                <input type="hidden" name="from_name" value="Newsletter Subscriber" />
                <input 
                    type="email" 
                    name="from_email"
                    placeholder="Email" 
                    className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    required
                />
                <button 
                    type="submit"
                    disabled={status === "submitting" || status === "success"}
                    className={cn(
                        "inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                        status === "success" && "bg-green-600",
                        status === "error" && "bg-red-600"
                    )}
                >
                    {status === "submitting" ? "..." : status === "success" ? "✓" : "Sub"}
                </button>
            </form>
            {status === "success" && <p className="text-[10px] text-green-600">Subscribed!</p>}
          </div>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© 2026 NextBuildX. {dict.footer.rights}</p>
        <div className="flex gap-4">
            <Link href="#" className="hover:underline">{dict.footer.privacy}</Link>
        </div>
      </div>
    </footer>
  );
}
