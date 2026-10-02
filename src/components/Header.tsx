import type { SiteContent } from "@/types/portfolio";

export function Header({ site }: { site: SiteContent }) {
  return (
    <header>
      <a href="#" className="brand">
        <i className={site.brand.icon} />
        <span>{site.brand.label}</span>
      </a>

      <div className="header-right">
        <ul className="nav-links">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-header-btn"
        >
          <i className="fa-solid fa-file-arrow-down" /> {site.resumeLabel}
        </a>
      </div>
    </header>
  );
}
