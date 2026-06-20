import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2 } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import Reveal from "../components/Reveal"
import { profile } from "../data"

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(
      subject || `Contact from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`

    window.open(gmailUrl, "_blank")

    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section-pad mx-auto max-w-7xl">
      <SectionHeading label="// CONTACT" title="Contact Me" />

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <h3 className="text-2xl font-bold text-ink">Get in touch</h3>
          <p className="mt-3 max-w-md leading-relaxed text-ink-muted">
            Have a project in mind, an opportunity, or just want to say hi? My inbox is always open — I&apos;ll
            get back to you as soon as I can.
          </p>

          <div className="mt-8 space-y-4">
            {contactItems.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <div className="glass group flex items-center gap-4 rounded-xl p-4 transition-all hover:-translate-y-1 hover:border-ice/50 hover:shadow-glow">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-ice/10 text-ice transition-colors group-hover:bg-ice group-hover:text-navy">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-ink-muted">{label}</p>
                    <p className="font-medium text-ink transition-colors group-hover:text-ice">{value}</p>
                  </div>
                </div>
              )
              return href ? (
                <a key={label} href={href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              )
            })}
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="glass flex h-11 w-11 items-center justify-center rounded-lg text-ink-muted transition-colors hover:text-ice"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="glass flex h-11 w-11 items-center justify-center rounded-lg text-ink-muted transition-colors hover:text-ice"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={onSubmit} className="glass space-y-4 rounded-xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="What's this about?" />
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-navy-border bg-navy-card px-4 py-2.5 text-ink placeholder:text-ink-muted/60 outline-none transition-colors focus:border-ice"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-ice to-ice-blue px-6 py-3 font-semibold text-navy transition-all hover:shadow-glow-lg"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} />
                  Message Sent
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-navy-border bg-navy-card px-4 py-2.5 text-ink placeholder:text-ink-muted/60 outline-none transition-colors focus:border-ice"
      />
    </div>
  )
}
