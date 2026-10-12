import './ContactPage.css'

function ContactPage() {
  return (
    <main className="contact-page">
      <div className="contact-page-inner">
        <h1 className="contact-page-title">Contact</h1>
        <a className="contact-link" href="mailto:ehallscherwitz@gmail.com">
          ehallscherwitz@gmail.com
        </a>
        <a
          className="contact-link"
          href="https://github.com/ehallscherwitz"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/ethan-scherwitz333"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </main>
  )
}

export default ContactPage
