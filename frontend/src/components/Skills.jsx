const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'Express.js',
  'Python',
  'AI & Machine Learning',
  'PostgreSQL',
  'Git & GitHub',
  'Basic Cybersecurity',
  'Video Editing',
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technologies I work with</h2>
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
