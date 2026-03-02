"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function VolunteerForm({ dict }: { dict: any }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
        setStatus("success");
    }, 1000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="v-name" className="block text-sm font-medium mb-1">
          {dict.contact.name}
        </label>
        <input
          type="text"
          id="v-name"
          name="name"
          required
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
            <label htmlFor="v-email" className="block text-sm font-medium mb-1">
            {dict.contact.email}
            </label>
            <input
            type="email"
            id="v-email"
            name="email"
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
        </div>
        <div>
            <label htmlFor="v-phone" className="block text-sm font-medium mb-1">
            {dict.volunteer.phone}
            </label>
            <input
            type="tel"
            id="v-phone"
            name="phone"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
        </div>
      </div>
      <div>
        <label htmlFor="v-skills" className="block text-sm font-medium mb-1">
          {dict.volunteer.skills}
        </label>
        <select
          id="v-skills"
          name="skills"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
            <option value="general">General Help</option>
            <option value="teaching">Teaching</option>
            <option value="medical">Medical/Health</option>
            <option value="engineering">Engineering/Construction</option>
            <option value="tech">Tech/IT</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={status === "submitting" || status === "success"}
        className={cn(
            "inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full",
            status === "success" && "bg-green-600 hover:bg-green-700"
        )}
      >
        {status === "submitting" ? "Signing Up..." : status === "success" ? "Welcome Aboard!" : dict.volunteer.submit}
      </button>
    </form>
  );
}
