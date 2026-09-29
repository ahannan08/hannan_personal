import type { HeroContent } from "@/types/portfolio";
import { NeuralCanvas } from "./NeuralCanvas";

export function HeroSection({ data }: { data: HeroContent }) {
  return (
    <section className="hero">
      <NeuralCanvas />
      <div className="hero-content">
        <div className="open-status-badge">
          <span className="pulse-dot" />
          {data.statusBadge}
        </div>

        <h1>
          {data.headingPrefix} <span>{data.name}</span>
        </h1>

        <p className="bio-text">{data.bio}</p>

        <a href={`mailto:${data.hireEmail}`} className="btn-hire">
          <i className="fa-solid fa-paper-plane" /> {data.hireButtonLabel}
        </a>

        <div className="metrics-container">
          {data.metrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
