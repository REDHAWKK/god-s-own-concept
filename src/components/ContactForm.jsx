import { useState } from 'react'

function ContactForm() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Full name<input name="fullName" type="text" required placeholder="Your full name" /></label>
      <label>WhatsApp number<input name="whatsapp" type="tel" required placeholder="+234 000 000 0000" /></label>
      <label>Choose a service<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Branding & identity</option><option>Website design</option><option>Graphic design</option><option>Video & motion graphics</option><option>Digital marketing</option><option>AI-powered creativity</option><option>Social media management</option></select></label>
      <label>Message / request<textarea name="message" required rows="4" placeholder="Tell us about your idea, goals, or project..." /></label>
      <button className="form-submit" type="submit">{sent ? 'Request sent — thank you!' : 'Send project request'} <span>↗</span></button>
    </form>
  )
}

export default ContactForm
