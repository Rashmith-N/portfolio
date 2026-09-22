const projects = []

export default function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I have built</h2>
        <p className="section-intro">
          Selected projects with the tech behind each one.
        </p>
        {projects.length === 0 ? (
          <p className="projects-empty">
            Projects are being prepared and will appear here soon.
          </p>
        ) : (
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <ul className="project-tech">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
