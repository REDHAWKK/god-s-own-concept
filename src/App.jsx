import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import ContactForm from './components/ContactForm'

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M3 10h13M11 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Spark = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l1.8 7.1L21 11l-7.2 1.9L12 20l-1.8-7.1L3 11l7.2-1.9L12 2Z" fill="currentColor" />
  </svg>
)

const services = [
  ['01', 'Branding & identity', 'Brands with a clear voice, a distinct look and a lasting impression.'],
  ['02', 'Digital experiences', 'Websites and digital products made to feel as good as they function.'],
  ['03', 'Content & motion', 'Video, social content and motion stories that make audiences stop scrolling.'],
  ['04', 'AI-powered creativity', 'Smart content systems, prompt engineering and scalable creative possibilities.'],
]

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>
      <Navigation scrolled={scrolled} />

      <section className="hero-section" id="home">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> Creative digital agency · Nigeria</p>
          <h1>Efficiency at <br /><em>every click.</em></h1>
          <p className="hero-text">We transform ambitious stories into memorable brands, brilliant experiences, and results you can feel.</p>
          <div className="hero-actions">
            <a href="#contact" className="button button-primary">Start a project <Arrow /></a>
            <a href="#services" className="button button-secondary">Explore what we do</a>
          </div>
        </div>
      </section>

      <section className="intro-section" id="about">
        <div className="section-label">01 / Who we are</div>
        <div className="intro-content">
          <p className="overline">God's Own Concept</p>
          <h2>We make brands <em>impossible to ignore.</em></h2>
          <div className="intro-side"><p>More than a creative agency, we are your trusted growth partner. We pair thoughtful strategy with expressive design to move people and businesses forward.</p><a href="#contact" className="round-arrow" aria-label="Contact us"><Arrow /></a></div>
        </div>
        <div className="values"><span>CREATIVITY</span><span>EXCELLENCE</span><span>INNOVATION</span><span>INTEGRITY</span><span>COLLABORATION</span></div>
      </section>

      <section className="services-section" id="services">
        <div className="section-label">02 / What we create</div>
        <div className="services-heading"><h2>Big thinking.<br /><em>Beautiful doing.</em></h2><p>Every great idea deserves a considered expression. Bring us your challenge—we'll bring the energy, expertise, and a fresh point of view.</p></div>
        <div className="service-list">
          {services.map(([number, title, text]) => (
            <article className="service" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn about ${title}`}><Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="statement" id="work">
        <div className="statement-image"><img src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85" alt="Designer working on vibrant visual concepts" /></div>
        <div className="statement-copy"><span className="section-label">03 / Our way</span><h2>Your vision,<br /><em>turned all the way up.</em></h2><p>Discovery. Strategy. Design. Review. Delivery. Support. A simple, collaborative process that makes space for your best ideas—and gets them into the world.</p><a href="#contact" className="button button-dark">Build something bold</a></div>
      </section>

      <section className="clients"><p>Built for the boldly becoming</p><div className="client-row"><span>STARTUPS</span><span>SMEs</span><span>CHURCHES</span><span>NGOs</span><span>CREATORS</span><span>TEAMS</span></div></section>

      <footer id="contact">
        <div className="footer-shape shape-a" /><div className="footer-shape shape-b" />
        <div className="contact-layout">
          <div className="contact-intro"><p className="footer-kicker">Have a bright idea?</p><h2>Let's make it<br /><em>real.</em></h2><p className="contact-note">Tell us a little about the project you have in mind. We’ll get back to you on WhatsApp.</p><a className="footer-email" href="mailto:hello@godsownconcept.com">hello@godsownconcept.com <Arrow /></a></div>
          <ContactForm />
        </div>
        <div className="footer-bottom"><a className="brand footer-brand" href="#home"><img src="/nav-logo.png" alt="God's Own Concept" /><span>God's Own<br /><i>Concept</i></span></a><p>© 2026 God's Own Concept.<br />Made with purpose, from Africa.<br />Website produced by <a className="producer-link" href="https://oriarebun-princeton-portfolio.vercel.app/" target="_blank" rel="noreferrer">Oriarebun Princeton</a>.</p><div className="socials"><a href="#contact">Instagram</a><a href="#contact">LinkedIn</a><a href="#contact">Behance</a></div></div>
      </footer>
    </main>
  )
}

export default App
