/** Font Awesome icon classes for skill labels (fallback: generic code icon). */
const SKILL_ICON_MAP: Record<string, string> = {
  TensorFlow: "fa-solid fa-brain",
  PyTorch: "fa-solid fa-fire",
  LangChain: "fa-solid fa-link",
  "OpenAI API": "fa-solid fa-robot",
  Whisper: "fa-solid fa-microphone-lines",
  TypeScript: "fa-brands fa-js",
  Python: "fa-brands fa-python",
  JavaScript: "fa-brands fa-js",
  React: "fa-brands fa-react",
  "Next.js": "fa-solid fa-code",
  FastAPI: "fa-solid fa-bolt",
  "Node.js": "fa-brands fa-node-js",
  Flutter: "fa-solid fa-mobile-screen-button",
  Shopify: "fa-brands fa-shopify",
  WordPress: "fa-brands fa-wordpress",
  PostgreSQL: "fa-solid fa-database",
  Firebase: "fa-solid fa-fire-flame-curved",
  Supabase: "fa-solid fa-database",
  MySQL: "fa-solid fa-database",
  SQLite: "fa-solid fa-database",
  DuckDB: "fa-solid fa-database",
  AWS: "fa-brands fa-aws",
  Azure: "fa-brands fa-microsoft",
  GCP: "fa-brands fa-google",
  Hetzner: "fa-solid fa-server",
  Docker: "fa-brands fa-docker",
  Kubernetes: "fa-solid fa-dharmachakra",
  Jenkins: "fa-brands fa-jenkins",
  "GitHub Actions": "fa-brands fa-github",
  GitLab: "fa-brands fa-gitlab",
  Terraform: "fa-solid fa-mountain",
  Prometheus: "fa-solid fa-chart-line",
};

/** Official / commonly used brand colors for toolbox badges. */
const SKILL_COLOR_MAP: Record<string, string> = {
  TensorFlow: "#FF6F00",
  PyTorch: "#EE4C2C",
  LangChain: "#1C3C3C",
  "OpenAI API": "#412991",
  Whisper: "#10A37F",
  TypeScript: "#3178C6",
  Python: "#3776AB",
  JavaScript: "#F7DF1E",
  React: "#61DAFB",
  "Next.js": "#000000",
  FastAPI: "#009688",
  "Node.js": "#339933",
  Flutter: "#02569B",
  Shopify: "#96BF48",
  WordPress: "#21759B",
  PostgreSQL: "#4169E1",
  Firebase: "#FFCA28",
  Supabase: "#3ECF8E",
  MySQL: "#4479A1",
  SQLite: "#003B57",
  DuckDB: "#FFF000",
  AWS: "#FF9900",
  Azure: "#0078D4",
  GCP: "#4285F4",
  Hetzner: "#D50C2D",
  Docker: "#2496ED",
  Kubernetes: "#326CE5",
  Jenkins: "#D24939",
  "GitHub Actions": "#2088FF",
  GitLab: "#FC6D26",
  Terraform: "#844FBA",
  Prometheus: "#E6522C",
};

export function getSkillIcon(skill: string): string {
  return SKILL_ICON_MAP[skill] ?? "fa-solid fa-circle-check";
}

export function getSkillBrandColor(skill: string): string {
  return SKILL_COLOR_MAP[skill] ?? "#64748B";
}
