"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { Dictionary } from "@/lib/dictionary";

export default function DonationPledgeForm({ dict }: { dict: Dictionary }) {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [showForm, setShowForm] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.current) return;

    setStatus("submitting");

    const formData = new FormData(form.current);
    const amount = formData.get("amount");
    const frequency = formData.get("frequency");
    const combinedMessage = `Donation Pledge\nAmount: ${amount}\nFrequency: ${frequency}`;
    
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

  if (!showForm) {
    return (
        <button 
            onClick={() => setShowForm(true)}
            className="w-full h-12 rounded-md bg-accent text-accent-foreground font-bold shadow hover:bg-accent/90 transition-colors"
        >
            Pledge a Donation
        </button>
    );
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-card shadow-inner">
      <input type="hidden" name="form_type" value="Donation Pledge" />
      <h3 className="font-bold text-center mb-2">Pledge Your Support</h3>
      <div>
        <input
          type="text"
          name="from_name"
          placeholder={dict.contact.name}
          required
          className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </div>
      <div>
        <input
          type="email"
          name="from_email"
          placeholder={dict.contact.email}
          required
          className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          name="amount"
          placeholder="Amount (e.g. $50)"
          required
          className="flex-1 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
        <select 
            name="frequency"
            className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
            <option value="one-time">One-time</option>
            <option value="monthly">Monthly</option>
        </select>
      </div>
      <div className="flex gap-2">
        <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className={cn(
                "flex-1 h-9 rounded-md bg-primary text-primary-foreground text-sm font-medium shadow transition-colors hover:bg-primary/90 disabled:opacity-50",
                status === "success" && "bg-green-600"
            )}
        >
            {status === "submitting" ? "Pledging..." : status === "success" ? "Thank You!" : "Submit Pledge"}
        </button>
        <button 
            type="button"
            onClick={() => setShowForm(false)}
            className="h-9 px-3 rounded-md border border-input bg-background text-sm font-medium hover:bg-accent"
        >
            Cancel
        </button>
      </div>
      {status === "error" && (
        <p className="text-red-600 text-[10px] text-center">Error. Please try again.</p>
      )}
    </form>
  );
}
