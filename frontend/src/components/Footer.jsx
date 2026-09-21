export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <p className="footer-name">Rashmith N</p>
          <div className="footer-links">
            <a href="https://github.com/Rashmith-N">GitHub</a>
            <a href="https://www.instagram.com/rashmthhh">Instagram</a>
          </div>
        </div>
        <p className="footer-note">Full Stack Developer — Computer Science & Engineering student</p>
        <p className="footer-copy">
          © {new Date().getFullYear()} Rashmith N. Built with React, Node.js and PostgreSQL.
        </p>
      </div>
    </footer>
  )
}
