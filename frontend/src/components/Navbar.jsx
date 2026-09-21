const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="navbar" id="top">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-brand">Rashmith N</a>
        <nav className="navbar-nav" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} className="navbar-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
