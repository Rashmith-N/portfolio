const facts = [
  { term: 'Role', detail: 'Full Stack Developer' },
  { term: 'Education', detail: 'Third-year Computer Science & Engineering student' },
  { term: 'Focus', detail: 'Full-stack web development, AI & Machine Learning' },
  { term: 'Open to', detail: 'Internship opportunities' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">Building full products, from database to interface</h2>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I am Rashmith, a third-year Computer Science & Engineering student who
              enjoys working across the entire stack — React interfaces on the
              frontend, Node.js and Express APIs in the middle, and PostgreSQL
              underneath it all.
            </p>
            <p>
              I learn best by building. Every project I ship teaches me something a
              tutorial cannot — how the pieces actually fit together, and what
              breaks when they do not. Alongside web development, I study AI and
              machine learning, and I am currently looking for internship
              opportunities where I can work on real products.
            </p>
          </div>
          <dl className="about-facts">
            {facts.map((fact) => (
              <div className="about-fact" key={fact.term}>
                <dt>{fact.term}</dt>
                <dd>{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
