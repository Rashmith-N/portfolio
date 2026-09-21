const skillGroups = [
  {
    name: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express.js', 'Python'],
  },
  {
    name: 'Database',
    items: ['PostgreSQL'],
  },
  {
    name: 'Tools & Other',
    items: ['Git & GitHub', 'AI & Machine Learning', 'Basic Cybersecurity', 'Video Editing'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technologies I work with</h2>
        <p className="section-intro">
          The tools I use to take an idea from a blank folder to a deployed,
          working product.
        </p>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.name}>
              <h3 className="skill-group-name">{group.name}</h3>
              <ul className="skill-list">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
