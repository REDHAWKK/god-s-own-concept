import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import ContactForm from './components/ContactForm'
import ScrollReveal from './components/ScrollReveal'

const Arrow = () => (
  <svg className="w-4 h-4" viewBox="0 0 20 20" aria-hidden="true">
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

function Loader({onDone}){
  // simple loader component with progress
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf
    let start = null
    const duration = 1200
    const step = (timestamp) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (elapsed < duration) raf = requestAnimationFrame(step)
      else {
        // brief pause then finish
        setTimeout(() => onDone && onDone(), 300)
      }
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <div className="loader-overlay" role="status" aria-live="polite">
      <div className="loader-tech" aria-hidden="true"><span /><span /><span /><span /></div>
      <div className="loader-inner">
        <img src="/nav-logo.png" alt="God's Own Concept" className="loader-logo" />
        <div className="loader-title">Welcome to God's Own Concept</div>
        <div className="loader-bar" aria-hidden>
          <div className="loader-progress" style={{width: `${progress}%`}} />
        </div>
      </div>
    </div>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}

      <main style={{display: loading ? 'none' : 'block'}}>
        <Navigation scrolled={scrolled} />

        <section className="hero-section" id="home">
          <ScrollReveal>
            <div className="hero-copy">
              <p className="eyebrow"><span /> Creative digital agency · Nigeria</p>
              <h1>Efficiency at <br /><em>every click.</em></h1>
              <p className="hero-text">We transform ambitious stories into memorable brands, brilliant experiences, and results you can feel.</p>
              <div className="hero-actions">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold bg-gradient-to-br from-[#c6ff3f] to-[#4b1d73] text-black shadow-lg">Start a project <Arrow /></a>
                <a href="#services" className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold bg-white/10 border border-white/30 text-white">Explore what we do</a>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="intro-section" id="about">
          <ScrollReveal><div className="section-label">Who we are</div></ScrollReveal>
          <div className="intro-content">
            <ScrollReveal delay={1}><p className="overline">God's Own Concept</p></ScrollReveal>
            <ScrollReveal delay={2}><h2>We make brands <em>impossible to ignore.</em></h2></ScrollReveal>
            <ScrollReveal delay={3}><div className="intro-side"><p>More than a creative agency, we are your trusted growth partner. We pair thoughtful strategy with expressive design to move people and businesses forward.</p><a href="#contact" className="round-arrow" aria-label="Contact us"><Arrow /></a></div></ScrollReveal>
          </div>
          <ScrollReveal delay={4}><div className="values"><span>CREATIVITY</span><span>EXCELLENCE</span><span>INNOVATION</span><span>INTEGRITY</span><span>COLLABORATION</span></div></ScrollReveal>
        </section>

        <section className="services-section" id="services">
          <ScrollReveal><div className="section-label">Services We Offer</div></ScrollReveal>
          <div className="services-heading"><ScrollReveal><h2>Big thinking.<br /><em>Beautiful doing.</em></h2></ScrollReveal><ScrollReveal delay={1}><p>Every great idea deserves a considered expression. Bring us your challenge—we'll bring the energy, expertise, and a fresh point of view.</p></ScrollReveal></div>
          <div className="service-list">
            {services.map(([number, title, text], index) => (
              <ScrollReveal key={number} variant="scale" delay={Math.min(index + 1, 4)}>
                <article className="service">
                  <div className="service-top">
                    <span>{number}</span>
                    <div className="service-decor"><Spark /></div>
                  </div>
                  <div className="service-body">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <a href="#contact" className="service-action" aria-label={`Learn about ${title}`}><Arrow /></a>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="statement" id="work">
          <ScrollReveal variant="scale"><div className="statement-image"><img src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85" alt="Designer working on vibrant visual concepts" /></div></ScrollReveal>
          <div className="statement-copy"><ScrollReveal><span className="section-label">Our way</span></ScrollReveal><ScrollReveal delay={1}><h2>Your vision,<br /><em>turned all the way up.</em></h2></ScrollReveal><ScrollReveal delay={2}><p>Discovery. Strategy. Design. Review. Delivery. Support. A simple, collaborative process that makes space for your best ideas—and gets them into the world.</p></ScrollReveal><ScrollReveal delay={3}><a href="#contact" className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold bg-[#30114c] text-white">Build something bold</a></ScrollReveal></div>
        </section>

        <section className="clients"><ScrollReveal variant="fade"><p>Built for the boldly becoming</p></ScrollReveal><div className="client-row"><ScrollReveal><span>STARTUPS</span></ScrollReveal><ScrollReveal delay={1}><span>SMEs</span></ScrollReveal><ScrollReveal delay={2}><span>CHURCHES</span></ScrollReveal><ScrollReveal delay={3}><span>NGOs</span></ScrollReveal><ScrollReveal delay={4}><span>CREATORS</span></ScrollReveal><ScrollReveal delay={4}><span>TEAMS</span></ScrollReveal></div></section>

        <section className="contact-section" id="contact">
          <div className="contact-shape shape-a" /><div className="contact-shape shape-b" />
          <div className="contact-layout">
            <div className="contact-intro"><ScrollReveal><p className="footer-kicker">Have a bright idea?</p></ScrollReveal><ScrollReveal delay={1}><h2>Let's make it<br /><em>real.</em></h2></ScrollReveal><ScrollReveal delay={2}><p className="contact-note">Tell us a little about the project you have in mind. We'll get back to you on WhatsApp.</p></ScrollReveal><ScrollReveal delay={3}><a className="footer-email" href="mailto:hello@godsownconcept.com">hello@godsownconcept.com <Arrow /></a></ScrollReveal></div>
            <ContactForm />
          </div>
        </section>
        <footer>
          <div className="footer-bottom"><a className="brand footer-brand" href="#home"><img src="/nav-logo.png" alt="God's Own Concept" /><span>God's Own<br /><i>Concept</i></span></a><ScrollReveal variant="fade"><p>© 2026 God's Own Concept.<br />Made with purpose, from God's Own Concept ltd.<br />Website produced by <a className="producer-link" href="https://oriarebun-princeton-portfolio.vercel.app/" target="_blank" rel="noreferrer">Oriarebun Princeton</a>.</p></ScrollReveal><div className="socials"><a href="#contact">Instagram</a><a href="#contact">LinkedIn</a><a href="#contact">Behance</a></div></div>
        </footer>
      </main>
    </>
  )
}

export default App
