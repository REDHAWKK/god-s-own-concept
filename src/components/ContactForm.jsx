import { useState } from 'react'

function ContactForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    setSubmitting(true)
    setError(false)

    try {
      const response = await fetch('https://submit-form.com/d89cYk2D5', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })

      if (!response.ok) throw new Error('Unable to submit form')

      setSent(true)
      form.reset()
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Full name<input name="Full Name" type="text" required placeholder="Your full name" /></label>
      <label>WhatsApp number<input name="WhatsApp Number" type="tel" required placeholder="+234 000 000 0000" /></label>
      <label>Choose a service<select name="Requested Service" required defaultValue=""><option value="" disabled>Select a service</option><option>Branding & identity</option><option>Website design</option><option>Graphic design</option><option>Video & motion graphics</option><option>Digital marketing</option><option>AI-powered creativity</option><option>Social media management</option></select></label>
      <label>Message / request<textarea name="Message" required rows="4" placeholder="Tell us about your idea, goals, or project..." /></label>
      <button className="form-submit" type="submit" disabled={submitting}>{submitting ? 'Sending…' : sent ? 'Request sent — thank you!' : 'Send project request'} <span>↗</span></button>
      {error && <p role="alert">We couldn’t send your request. Please try again or email us directly.</p>}
    </form>
  )
}

export default ContactForm
