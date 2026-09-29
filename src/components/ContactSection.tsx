"use client";

import type { ContactContent } from "@/types/portfolio";
import type { FormEvent } from "react";

export function ContactSection({ data }: { data: ContactContent }) {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
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

          <form className="contact-form" id="contact-form" onSubmit={onSubmit}>
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Your name"
                required
                autoComplete="name"
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
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project or question..."
                required
              />
            </div>
            <button type="submit" className="contact-submit">
              <i className="fa-solid fa-paper-plane" /> {data.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
