import type { AboutContent } from "@/types/portfolio";
import { HtmlText } from "./HtmlText";

export function AboutSection({ data }: { data: AboutContent }) {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <span className="section-subtitle">{data.subtitle}</span>
        <h2 className="section-main-title">{data.title}</h2>
      </div>

      <div className="about-layout">
        <div className="about-intro-card">
          <span className="about-role-badge">
            <i className={data.roleBadge.icon} /> {data.roleBadge.label}
          </span>
          <h3>{data.introHeading}</h3>
          <ul className="about-points">
            {data.points.map((point) => (
              <li key={point.html}>
                <span className="about-point-icon">
                  <i className={point.icon} />
                </span>
                <HtmlText html={point.html} />
              </li>
            ))}
          </ul>
        </div>

        <div className="about-side-stack">
          <div className="about-info-card">
            <div className="about-info-header">
              <div className="about-info-icon">
                <i className="fa-solid fa-graduation-cap" />
              </div>
              <h3>Education</h3>
            </div>
            <p className="about-education-degree">{data.education.degree}</p>
            <p className="about-education-school">{data.education.school}</p>
            <span className="about-location">
              <i className="fa-solid fa-location-dot" /> {data.education.location}
            </span>
          </div>

          <div className="about-info-card">
            <div className="about-info-header">
              <div className="about-info-icon">
                <i className="fa-solid fa-heart" />
              </div>
              <h3>Hobbies</h3>
            </div>
            <ul className="about-hobbies-list">
              {data.hobbies.map((hobby) => (
                <li key={hobby.label}>
                  <i className={hobby.icon} /> {hobby.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
