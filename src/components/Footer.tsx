import { Github, Linkedin, MapPin } from "lucide-react"
import { profile } from "../data"

export default function Footer() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })

  return (
    <footer className="border-t border-navy-border bg-navy-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-8 lg:px-8 md:grid-cols-2">
        <div>
          <button onClick={() => go("#home")} className="text-xl font-bold text-ice">
            {profile.name}.
          </button>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
            Building scalable solutions with an AI-first mindset.
          </p>
        </div>

        <div className="md:text-right">
          <div className="flex gap-3 md:justify-end">
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
          <p className="mt-4 flex items-center gap-1.5 text-sm text-ink-muted md:justify-end">
            <MapPin size={15} className="text-ice" />
            Vadodara, India
          </p>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-ice to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-4 lg:px-8">
        <p className="text-center text-sm text-ink-muted">
          {"\u00A9"} 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
