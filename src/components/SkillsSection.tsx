import type { SkillsContent } from "@/types/portfolio";

export function SkillsSection({ data }: { data: SkillsContent }) {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="section-subtitle">{data.subtitle}</span>
        <h2 className="section-main-title">{data.title}</h2>
      </div>

      <div className="skills-grid">
        {data.categories.map((category) => (
          <div key={category.title} className="skill-box">
            <div className="skill-box-header">
              <div className="skill-box-icon">
                <i className={category.icon} />
              </div>
              <h3 className="skill-box-title">{category.title}</h3>
            </div>
            <div className="skill-tags-wrapper">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
