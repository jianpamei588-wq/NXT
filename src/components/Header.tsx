"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Globe, Zap } from "lucide-react";
import { useLiteMode } from "./LiteModeProvider";
import { cn } from "@/lib/utils";
import { Dictionary } from "@/lib/dictionary";

type HeaderProps = {
  lang: "en" | "hi";
  dict: Dictionary;
};

export default function Header({ lang, dict }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isLiteMode, toggleLiteMode } = useLiteMode();

  const navItems = [
    { label: dict.nav.home, href: `/${lang}#home` },
    { label: dict.nav.about, href: `/${lang}#about` },
    { label: dict.nav.projects, href: `/${lang}#projects` },
    { label: dict.nav.impact, href: `/${lang}#impact` },
    { label: dict.nav.blog, href: `/${lang}#blog` },
    { label: dict.nav.contact, href: `/${lang}#contact` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center space-x-2 font-bold text-xl text-primary">
          <span className="text-2xl">NextBuildX</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 border-l pl-4 ml-2">
            <button
              onClick={toggleLiteMode}
              className={cn(
                "p-2 rounded-full transition-colors hover:bg-muted",
                isLiteMode ? "text-amber-600 bg-amber-100" : "text-muted-foreground"
              )}
              title={isLiteMode ? "Turn off Lite Mode" : "Turn on Lite Mode (Text-only)"}
            >
              <Zap size={20} />
            </button>
            <Link
               href={lang === 'en' ? `/hi` : `/en`}
               className="p-2 rounded-full transition-colors hover:bg-muted text-muted-foreground"
               title="Switch Language"
            >
              <Globe size={20} />
              <span className="sr-only">Switch Language</span>
            </Link>
          </div>
          <Link
             href={`/${lang}/get-involved`}
             className="hidden lg:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            {dict.nav.donate}
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLiteMode}
              className={cn(
                "p-2 rounded-full transition-colors hover:bg-muted",
                isLiteMode ? "text-amber-600 bg-amber-100" : "text-muted-foreground"
              )}
            >
              <Zap size={20} />
            </button>
          <button
            className="p-2 text-muted-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
             <Link
                href={`/${lang}/get-involved`}
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                onClick={() => setIsOpen(false)}
             >
                {dict.nav.donate}
             </Link>
             <Link
               href={lang === 'en' ? `/hi` : `/en`}
               className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
               onClick={() => setIsOpen(false)}
            >
              <Globe size={16} />
              {lang === 'en' ? "Switch to Hindi" : "Switch to English"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
