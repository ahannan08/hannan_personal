"use client";

import Image from "next/image";
import { useCallback, useState, type MouseEvent } from "react";
import type { ProjectAction, ProjectsContent } from "@/types/portfolio";

type ProjectGridSectionProps = {
  id: string;
  sectionClass: "projects-section" | "freelance-section";
  data: ProjectsContent;
};

const DEFAULT_UNAVAILABLE =
  "There is some issue loading for now.";

export function ProjectGridSection({
  id,
  sectionClass,
  data,
}: ProjectGridSectionProps) {
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const fallbackMessage = data.unavailableMessage ?? DEFAULT_UNAVAILABLE;

  const closeModal = useCallback(() => setModalMessage(null), []);

  const handleAction = (
    e: MouseEvent<HTMLAnchorElement>,
    action: ProjectAction,
  ) => {
    const behavior = action.behavior ?? "link";

    if (behavior === "link") {
      if (!action.href || action.href === "#") {
        e.preventDefault();
        setModalMessage(fallbackMessage);
      }
      return;
    }

    e.preventDefault();
    if (behavior === "message") {
      setModalMessage(action.message ?? fallbackMessage);
      return;
    }
    setModalMessage(fallbackMessage);
  };

  return (
    <>
      <section id={id} className={sectionClass}>
        <div className="section-header">
          <span className="section-subtitle">{data.subtitle}</span>
          <h2 className="section-main-title">{data.title}</h2>
        </div>

        <div className="projects-grid-3x2">
          {data.items.map((item) => (
            <div key={item.title} className="compact-project-card">
              <div>
                <div className="card-top-header">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={48}
                    height={48}
                    className="project-thumb"
                  />
                  <div className="project-title-meta">
                    <h3>{item.title}</h3>
                    <span className="project-category-tag">{item.category}</span>
                  </div>
                </div>
                <p className="compact-overview">{item.overview}</p>
                <div className="compact-tech-stack">
                  {item.tech.map((tag) => (
                    <span key={tag} className="compact-tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="compact-actions">
                {item.actions.map((action) => {
                  const behavior = action.behavior ?? "link";
                  const isExternalLink =
                    behavior === "link" &&
                    action.href &&
                    action.href !== "#";

                  return (
                    <a
                      key={action.label}
                      href={isExternalLink ? action.href : "#"}
                      target={isExternalLink ? "_blank" : undefined}
                      rel={
                        isExternalLink ? "noopener noreferrer" : undefined
                      }
                      className={`compact-btn compact-btn-${action.variant}`}
                      onClick={(e) => handleAction(e, action)}
                    >
                      <i className={action.icon} /> {action.label}
                    </a>
                  );
                })}
              </div>
            </div>
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
