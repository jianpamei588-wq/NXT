"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ContactForm({ dict }: { dict: any }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
        setStatus("success");
    }, 1000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          {dict.contact.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
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
          name="email"
          required
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
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
            status === "success" && "bg-green-600 hover:bg-green-700"
        )}
      >
        {status === "submitting" ? "Sending..." : status === "success" ? "Sent!" : dict.contact.send}
      </button>
      {status === "success" && (
        <p className="text-green-600 text-sm mt-2">Thank you! We will get back to you soon.</p>
      )}
    </form>
  );
}
