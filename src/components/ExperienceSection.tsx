"use client";

import { useEffect, useState } from "react";
import type { ExperienceContent } from "@/types/portfolio";
import { HtmlText } from "./HtmlText";

export function ExperienceSection({ data }: { data: ExperienceContent }) {
  const [activeId, setActiveId] = useState(data.nav[0]?.id ?? "");

  useEffect(() => {
    const cards = document.querySelectorAll(".exp-card");

    const onScroll = () => {
      let current = data.nav[0]?.id ?? "";
      cards.forEach((card) => {
        const cardTop = (card as HTMLElement).offsetTop;
        if (window.pageYOffset >= cardTop - 220) {
          current = card.getAttribute("id") ?? current;
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [data.nav]);

  return (
    <section id="experience" className="experience-section">
      <div className="exp-layout">
        <div className="exp-sticky-left">
          <span className="exp-subtitle">{data.subtitle}</span>
          <h2 className="exp-title">{data.title}</h2>

          <div className="exp-nav-list">
            {data.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`exp-nav-item${activeId === item.id ? " active" : ""}`}
                id={`nav-${item.id}`}
              >
                <span className="nav-company">{item.company}</span>
                <span className="nav-role-date">{item.meta}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="exp-cards-column">
          {data.entries.map((entry) => (
            <div key={entry.id} className="exp-card" id={entry.id}>
              <div className="exp-card-header">
                <div className="exp-card-title-group">
                  {entry.companyUrl && !entry.organization ? (
                    <h3>
                      <a
                        href={entry.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="exp-company-link"
                      >
                        {entry.title}
                      </a>
                    </h3>
                  ) : (
                    <h3>{entry.title}</h3>
                  )}
                  {entry.organization ? (
                    <p
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.95rem",
                      }}
                    >
                      {entry.companyUrl ? (
                        <a
                          href={entry.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="exp-company-link"
                        >
                          {entry.organization}
                        </a>
                      ) : (
                        entry.organization
                      )}
                    </p>
                  ) : null}
                </div>
                {entry.date ? (
                  <div className="exp-date-location">{entry.date}</div>
                ) : null}
              </div>

              {entry.projects.map((project) => (
                <div key={project.title} className="project-block">
                  <div className="project-title">
                    <i className={project.icon} /> {project.title}
                  </div>
                  <ul className="exp-bullets">
                    {project.bullets.map((bullet, index) => (
                      <li key={`${project.title}-${index}`}>
                        <HtmlText html={bullet} />
                      </li>
                    ))}
                  </ul>
                  <div className="exp-skill-chips">
                    {project.skills.map((skill) => (
                      <span key={skill} className="skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {entry.bullets.length > 0 ? (
                <ul className="exp-bullets">
                  {entry.bullets.map((bullet, index) => (
                    <li key={`${entry.id}-bullet-${index}`}>
                      <HtmlText html={bullet} />
                    </li>
                  ))}
                </ul>
              ) : null}

              {entry.skills.length > 0 ? (
                <div className="exp-skill-chips">
                  {entry.skills.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
