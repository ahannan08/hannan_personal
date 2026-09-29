"use client";

import Image from "next/image";
import { useCallback, useState, type MouseEvent } from "react";
import type { ProjectAction, ProjectsContent } from "@/types/portfolio";

type ProjectGridSectionProps = {
  id: string;
  sectionClass: "projects-section" | "freelance-section";
  data: ProjectsContent;
};

export function ProjectGridSection({
  id,
  sectionClass,
  data,
}: ProjectGridSectionProps) {
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const closeModal = useCallback(() => setModalMessage(null), []);

  const handleAction = (
    e: MouseEvent<HTMLAnchorElement>,
    action: ProjectAction,
  ) => {
    const behavior = action.behavior ?? "link";

    if (behavior === "link") {
      if (!action.href || action.href === "#") {
        e.preventDefault();
      }
      return;
    }

    e.preventDefault();

    if (behavior === "noop") {
      return;
    }

    if (behavior === "message") {
      setModalMessage(action.message ?? "");
    }
  };

  return (
    <>
      <section id={id} className={sectionClass}>
        <div className="section-header">
          <span className="section-subtitle">{data.subtitle}</span>
          <h2 className="section-main-title">{data.title}</h2>
        </div>

        <div className="project-cards-grid">
          {data.items.map((item) => (
            <article key={item.title} className="project-card-modern">
              <div className="project-card-media">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="project-card-image"
                />
                <span className="project-card-category">{item.category}</span>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{item.title}</h3>
                <p className="project-card-overview">{item.overview}</p>
                <div className="compact-tech-stack">
                  {item.tech.map((tag) => (
                    <span key={tag} className="compact-tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {item.actions.length > 0 ? (
                  <div className="project-card-actions">
                    {item.actions.map((action) => {
                      const behavior = action.behavior ?? "link";
                      const isExternalLink =
                        behavior === "link" &&
                        action.href &&
                        action.href !== "#";
                      const isNoop = behavior === "noop";

                      return (
                        <a
                          key={action.label}
                          href={isExternalLink ? action.href : "#"}
                          target={isExternalLink ? "_blank" : undefined}
                          rel={
                            isExternalLink ? "noopener noreferrer" : undefined
                          }
                          className={`compact-btn compact-btn-${action.variant}${isNoop ? " compact-btn-noop" : ""}`}
                          onClick={(e) => handleAction(e, action)}
                          aria-disabled={isNoop ? true : undefined}
                        >
                          <i className={action.icon} /> {action.label}
                        </a>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      {modalMessage ? (
        <div
          className="portfolio-modal-overlay"
          role="presentation"
          onClick={closeModal}
        >
          <div
            className="portfolio-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <p id="portfolio-modal-title" className="portfolio-modal-text">
              {modalMessage}
            </p>
            <button
              type="button"
              className="portfolio-modal-btn"
              onClick={closeModal}
            >
              OK
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
