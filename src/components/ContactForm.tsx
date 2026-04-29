"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "next/navigation";
import { Dictionary } from "@/lib/dictionary";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const [subject, setSubject] = useState(type === "suggest" ? "suggestion" : "general");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.current) return;

    setStatus("submitting");
    
    try {
      await emailjs.sendForm(
        "service_tgojfm6",
        "template_9la6u1d",
        form.current,
        "vcUSvSSjaA_DWGbPn"
      );
      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="form_type" value="Contact Form" />
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          {dict.contact.name}
        </label>
        <input
          type="text"
          id="name"
          name="from_name"
          required
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          {dict.contact.email}
        </label>
        <input
          type="email"
          id="email"
          name="from_email"
          required
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Inquiry Type
        </label>
        <select
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
            <option value="general">General Inquiry</option>
            <option value="suggestion">Project Suggestion</option>
            <option value="partnership">Partnership</option>
            <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          {dict.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting" || status === "success"}
        className={cn(
            "inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            status === "success" && "bg-green-600 hover:bg-green-700",
            status === "error" && "bg-red-600 hover:bg-red-700"
        )}
      >
        {status === "submitting" ? "Sending..." : status === "success" ? "Sent!" : status === "error" ? "Error!" : dict.contact.send}
      </button>
      {status === "success" && (
        <p className="text-green-600 text-sm mt-2">Thank you! We will get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm mt-2">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
