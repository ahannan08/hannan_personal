import type { SkillsContent } from "@/types/portfolio";
import { getSkillBrandColor, getSkillIcon } from "@/lib/skillIcons";

export function SkillsSection({ data }: { data: SkillsContent }) {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header skills-toolbox-header">
        <span className="section-subtitle">{data.subtitle}</span>
        <div className="skills-toolbox-rule" aria-hidden="true" />
        <h2 className="section-main-title skills-toolbox-title">{data.title}</h2>
      </div>

      <div className="skills-toolbox">
        {data.categories.map((category) => (
          <div key={category.title} className="skills-toolbox-row">
            <p className="skills-toolbox-label">{category.title}</p>
            <div className="skills-toolbox-badges">
              {category.skills.map((skill) => (
                <span key={skill} className="skills-toolbox-badge">
                  <i
                    className={getSkillIcon(skill)}
                    style={{ color: getSkillBrandColor(skill) }}
                    aria-hidden="true"
                  />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
