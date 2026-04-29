"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "next/navigation";
import { Dictionary } from "@/lib/dictionary";

export default function VolunteerForm({ dict }: { dict: Dictionary }) {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const searchParams = useSearchParams();
  const [project, setProject] = useState(searchParams.get("project") || "");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.current) return;

    setStatus("submitting");

    // Pre-process form data to combine fields for the email template
    const formData = new FormData(form.current);
    const phone = formData.get("phone");
    const skills = formData.get("skills");
    const proj = formData.get("project_interest") || "General Interest";
    const combinedMessage = `Volunteer Application\nProject: ${proj}\nPhone: ${phone}\nSkills: ${skills}`;
    
    // Create a temporary hidden input to hold the combined message
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
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      if (form.current && messageInput.parentNode === form.current) {
        form.current.removeChild(messageInput);
      }
    }
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="form_type" value="Volunteer Application" />
      <div>
        <label htmlFor="v-name" className="block text-sm font-medium mb-1">
          {dict.contact.name}
        </label>
        <input
          type="text"
          id="v-name"
          name="from_name"
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
            name="from_email"
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
        <label htmlFor="v-project" className="block text-sm font-medium mb-1">
          Specific Project Interest
        </label>
        <input
          type="text"
          id="v-project"
          name="project_interest"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          placeholder="e.g. Landslide Detection"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
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
            status === "success" && "bg-green-600 hover:bg-green-700",
            status === "error" && "bg-red-600 hover:bg-red-700"
        )}
      >
        {status === "submitting" ? "Signing Up..." : status === "success" ? "Welcome Aboard!" : status === "error" ? "Error!" : dict.volunteer.submit}
      </button>
      {status === "error" && (
        <p className="text-red-600 text-sm mt-2">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
