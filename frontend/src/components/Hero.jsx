export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero-eyebrow">Rashmith N</p>
        <h1 className="hero-title">
          Full Stack Developer.
          <br />
          Third-year CSE student.
        </h1>
        <p className="hero-text">
          I build complete web applications — React on the frontend, Node.js and
          Express on the backend, and PostgreSQL for data.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn btn-secondary" href="#contact">Contact Me</a>
          <a
            className="hero-github"
            href="https://github.com/Rashmith-N"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
