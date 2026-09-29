import type { BlogsContent } from "@/types/portfolio";

export function BlogsSection({ data }: { data: BlogsContent }) {
  return (
    <section id="blogs" className="blogs-section">
      <div className="section-header">
        <span className="section-subtitle">{data.subtitle}</span>
        <h2 className="section-main-title">{data.title}</h2>
      </div>

      <div className="blogs-layout">
        <aside className="blogs-sidebar">
          <p className="blogs-sidebar-title">Topics</p>
          <ul className="topic-list">
            {data.topics.map((topic) => (
              <li key={topic}>
                <i className="fa-solid fa-circle" /> {topic}
              </li>
            ))}
          </ul>
        </aside>

        <div className="blog-list">
          {data.posts.map((post) => (
            <article
              key={post.title}
              className={`blog-card${post.featured ? " featured" : ""}`}
            >
              <div className="blog-card-accent" aria-hidden="true" />
              <div className="blog-card-body">
                <div className="blog-card-top">
                  <div>
                    <div className="blog-meta">
                      <span className="blog-category">{post.category}</span>
                      <span className="blog-meta-divider" />
                      <span>{post.date}</span>
                      <span className="blog-meta-divider" />
                      <span>{post.readTime}</span>
                    </div>
                    <h2>
                      <a href={post.href}>{post.title}</a>
                    </h2>
                  </div>
                  <div className="blog-icon-wrap" aria-hidden="true">
                    <i className={post.icon} />
                  </div>
                </div>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <div className="blog-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={post.href} className="blog-read-link">
                    Read article <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
