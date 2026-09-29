import { AboutSection } from "@/components/AboutSection";
import { BlogsSection } from "@/components/BlogsSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FixedSocial } from "@/components/FixedSocial";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectGridSection } from "@/components/ProjectGridSection";
import { SkillsSection } from "@/components/SkillsSection";
import { loadAllPortfolioContent } from "@/lib/content";
import type {
  AboutContent,
  BlogsContent,
  ContactContent,
  ExperienceContent,
  HeroContent,
  ProjectsContent,
  SiteContent,
  SkillsContent,
} from "@/types/portfolio";

export default async function HomePage() {
  const content = await loadAllPortfolioContent();

  const site = content.site as SiteContent;
  const hero = content.hero as HeroContent;
  const experience = content.experience as ExperienceContent;
  const projects = content.projects as ProjectsContent;
  const freelance = content.freelance as ProjectsContent;
  const skills = content.skills as SkillsContent;
  const about = content.about as AboutContent;
  const blogs = content.blogs as BlogsContent;
  const contact = content.contact as ContactContent;

  return (
    <>
      <div className="grid-bg" />
      <Header site={site} />
      <FixedSocial social={site.social} />
      <HeroSection data={hero} />
      <SkillsSection data={skills} />
      <ExperienceSection data={experience} />
      <ProjectGridSection
        id="projects"
        sectionClass="projects-section"
        data={projects}
      />
      <ProjectGridSection
        id="freelance"
        sectionClass="freelance-section"
        data={freelance}
      />
      <AboutSection data={about} />
      <BlogsSection data={blogs} />
      <ContactSection data={contact} />
    </>
  );
}
