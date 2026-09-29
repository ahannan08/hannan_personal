import type { SiteContent } from "@/types/portfolio";

export function FixedSocial({ social }: { social: SiteContent["social"] }) {
  return (
    <div className="fixed-left-cta">
      {social.map((link) => (
        <a
          key={link.title}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          title={link.title}
        >
          <i className={link.icon} />
        </a>
      ))}
    </div>
  );
}
