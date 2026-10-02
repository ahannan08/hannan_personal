"use client";

import type { ContactContent } from "@/types/portfolio";
import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactSection({ data }: { data: ContactContent }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    const website = (form.elements.namedItem("website") as HTMLInputElement).value.trim();

    if (!name || !email || !message) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });

      const payload = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          payload.error ?? "Something went wrong. Please try again.",
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-subtitle">{data.subtitle}</span>
        <h2 className="section-main-title">{data.title}</h2>
      </div>

      <div className="contact-wrap">
        <div className="contact-card">
          <p className="contact-note">
            {data.note}{" "}
            <a href={`mailto:${data.email}`}>{data.email}</a>.
          </p>

          {status === "success" ? (
            <p className="contact-form-feedback contact-form-success" role="status">
              <i className="fa-solid fa-circle-check" aria-hidden="true" /> Thanks!
              Your message was sent. I&apos;ll get back to you soon.
            </p>
          ) : null}

          {status === "error" && errorMessage ? (
            <p className="contact-form-feedback contact-form-error" role="alert">
              <i className="fa-solid fa-circle-exclamation" aria-hidden="true" />{" "}
              {errorMessage}
            </p>
          ) : null}

          <form className="contact-form" id="contact-form" onSubmit={onSubmit}>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="contact-honeypot"
              aria-hidden="true"
            />
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Your name"
                required
                autoComplete="name"
                disabled={status === "sending"}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
                disabled={status === "sending"}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project or question..."
                required
                disabled={status === "sending"}
              />
            </div>
            <button
              type="submit"
              className="contact-submit"
              disabled={status === "sending"}
            >
              <i className="fa-solid fa-paper-plane" />{" "}
              {status === "sending" ? "Sending…" : data.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
