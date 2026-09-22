const roles = [
  {
    title: 'Full-Stack Portfolio Website',
    org: 'Self-directed project',
    period: `${new Date().getFullYear()} — Present`,
    description:
      'Designing and building this portfolio end to end — a React frontend, an Express REST API, and a PostgreSQL database on Supabase, deployed on Vercel and Render.',
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">What I am working on</h2>
        <div className="entry-list">
          {roles.map((role) => (
            <article className="entry" key={role.title}>
              <p className="entry-period">{role.period}</p>
              <h3 className="entry-title">{role.title}</h3>
              <p className="entry-org">{role.org}</p>
              <p className="entry-desc">{role.description}</p>
            </article>
          ))}
        </div>
        <p className="experience-note">
          Looking for internship opportunities where I can contribute to real products.
        </p>
      </div>
    </section>
  )
}
