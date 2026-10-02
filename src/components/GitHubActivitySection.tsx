"use client";

import dynamic from "next/dynamic";
import type { GitHubActivityContent } from "@/types/portfolio";

const calendarTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
};

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div
        className="github-activity-calendar-placeholder"
        aria-hidden="true"
      />
    ),
  },
);

export function GitHubActivitySection({ data }: { data: GitHubActivityContent }) {
  return (
    <section id="github-activity" className="github-activity-section">
      <div className="section-header">
        <span className="section-subtitle">{data.subtitle}</span>
        <h2 className="section-main-title">{data.title}</h2>
      </div>

      <div className="github-activity-card">
        <div className="github-activity-scroll">
          <GitHubCalendar
            username={data.username}
            colorScheme="light"
            theme={calendarTheme}
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            errorMessage={`Couldn't load contribution data for @${data.username}. Visit GitHub using the link below.`}
          />
        </div>
        <a
          className="github-activity-profile-link"
          href={data.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github" aria-hidden="true" />
          {data.linkLabel}
        </a>
      </div>
    </section>
  );
}
