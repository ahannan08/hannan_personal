import { readFile } from "fs/promises";
import path from "path";

export type ContentSection =
  | "site"
  | "hero"
  | "experience"
  | "projects"
  | "freelance"
  | "skills"
  | "about"
  | "blogs"
  | "contact";

const LOCAL_CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Loads section JSON from `content/{section}.json` locally, or from
 * `${CONTENT_BASE_URL}/{section}.json` when CONTENT_BASE_URL is set.
 */
export async function loadContent<T>(section: ContentSection): Promise<T> {
  const baseUrl = process.env.CONTENT_BASE_URL?.replace(/\/$/, "");

  if (baseUrl) {
    const res = await fetch(`${baseUrl}/${section}.json`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      throw new Error(
        `Failed to load ${section}.json from ${baseUrl}: ${res.status}`,
      );
    }
    return (await res.json()) as T;
  }

  const filePath = path.join(LOCAL_CONTENT_DIR, `${section}.json`);
  const raw = await readFile(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export async function loadAllPortfolioContent() {
  const [
    site,
    hero,
    experience,
    projects,
    freelance,
    skills,
    about,
    blogs,
    contact,
  ] = await Promise.all([
    loadContent("site"),
    loadContent("hero"),
    loadContent("experience"),
    loadContent("projects"),
    loadContent("freelance"),
    loadContent("skills"),
    loadContent("about"),
    loadContent("blogs"),
    loadContent("contact"),
  ]);

  return {
    site,
    hero,
    experience,
    projects,
    freelance,
    skills,
    about,
    blogs,
    contact,
  };
}
