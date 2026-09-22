const methods = [
  {
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    label: 'Phone',
    value: '+91 XXXXX XXXXX',
    href: 'tel:+91XXXXXXXXXX',
  },
  {
    label: 'GitHub',
    value: 'github.com/Rashmith-N',
    href: 'https://github.com/Rashmith-N',
  },
  {
    label: 'Instagram',
    value: '@rashmthhh',
    href: 'https://www.instagram.com/rashmthhh',
  },
]

export default function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's build something together</h2>
        <p className="section-intro">
          Open to internship opportunities and collaborations. The fastest way to
          reach me is by email.
        </p>
        <ul className="contact-list">
          {methods.map((method) => (
            <li className="contact-item" key={method.label}>
              <span className="contact-label">{method.label}</span>
              <a className="contact-value" href={method.href}>
                {method.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
