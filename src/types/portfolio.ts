export type SiteContent = {
  title: string;
  brand: { label: string; icon: string };
  nav: { label: string; href: string }[];
  resumeUrl: string;
  social: { href: string; icon: string; title: string }[];
};

export type HeroContent = {
  statusBadge: string;
  headingPrefix: string;
  name: string;
  bio: string;
  hireEmail: string;
  hireButtonLabel: string;
  metrics: { value: string; label: string }[];
};

export type ExperienceProject = {
  icon: string;
  title: string;
  bullets: string[];
  skills: string[];
};

export type ExperienceEntry = {
  id: string;
  title: string;
  date: string | null;
  organization: string | null;
  companyUrl?: string;
  projects: ExperienceProject[];
  bullets: string[];
  skills: string[];
};

export type ExperienceContent = {
  subtitle: string;
  title: string;
  nav: { id: string; company: string; meta: string }[];
  entries: ExperienceEntry[];
};

export type ProjectActionBehavior = "link" | "unavailable" | "message";

export type ProjectAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon: string;
  behavior?: ProjectActionBehavior;
  message?: string;
};

export type ProjectItem = {
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  overview: string;
  tech: string[];
  actions: ProjectAction[];
};

export type ProjectsContent = {
  subtitle: string;
  title: string;
  unavailableMessage?: string;
  items: ProjectItem[];
};

export type SkillsContent = {
  subtitle: string;
  title: string;
  categories: { icon: string; title: string; skills: string[] }[];
};

export type AboutContent = {
  subtitle: string;
  title: string;
  roleBadge: { icon: string; label: string };
  introHeading: string;
  points: { icon: string; html: string }[];
  education: { degree: string; school: string; location: string };
  hobbies: { icon: string; label: string }[];
};

export type BlogPost = {
  featured: boolean;
  category: string;
  date: string;
  readTime: string;
  title: string;
  href: string;
  icon: string;
  excerpt: string;
  tags: string[];
};

export type BlogsContent = {
  subtitle: string;
  title: string;
  topics: string[];
  posts: BlogPost[];
};

export type ContactContent = {
  subtitle: string;
  title: string;
  note: string;
  email: string;
  submitLabel: string;
};
