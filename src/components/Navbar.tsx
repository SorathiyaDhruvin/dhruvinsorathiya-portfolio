import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Menu, X, FileDown, Sun, Moon } from "lucide-react"
import { navLinks, profile } from "../data"
import { useTheme } from "../theme"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("home")
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // 1. Check if we're at the very bottom of the page (to force last section)
      // We use a small threshold like 20px to account for fractional zooming/scrolling
      if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 20) {
        setActive("contact")
        return
      }

      // 2. Otherwise find the active section by reading bounding rects
      const sectionIds = navLinks.map((l) => l.href.slice(1))
      let current = "home" // default
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          // If the section top crosses the middle of the viewport (or is near the top), it is active
          if (rect.top <= window.innerHeight / 3) {
            current = id
          }
        }
      }
      setActive(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const go = useCallback(
    (href: string) => {
      setOpen(false)
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    },
    [],
  )

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-navy border-b border-navy-border" : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <button
            onClick={() => go("#home")}
            className="text-2xl font-bold tracking-tight text-ice focus:outline-none transition-opacity hover:opacity-80"
          >
            {profile.logo}
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1)
              const isActive = active === id
              return (
                <li key={link.href}>
                  <button
                    onClick={() => go(link.href)}
                    className={`relative px-4 py-2 text-[13px] md:text-[14px] lg:text-[15px] font-medium tracking-[0.2px] focus:outline-none transition-colors ${
                      isActive ? "text-ice" : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-ice"
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            {/* Theme toggle button — placed BEFORE GitHub icon */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="rounded-lg p-2 text-ink-muted transition-colors hover:text-ice"
            >
              {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 text-ink-muted transition-colors hover:text-ice"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-ink-muted transition-colors hover:text-ice"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.resume}
              download
              className="flex items-center gap-2 rounded-lg bg-ice px-4 py-2 text-sm font-medium text-navy transition-all hover:bg-ice/90 hover:shadow-glow"
            >
              <FileDown size={16} />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            {/* Theme toggle on mobile too */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="rounded-lg p-2 text-ink-muted transition-colors hover:text-ice"
            >
              {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="rounded-lg p-2 text-ink"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer — slides in from RIGHT */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/60"
              onClick={() => setOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.4, 0, 0.2, 1], duration: 0.3 }}
              className="fixed right-0 top-0 z-[70] flex h-full w-3/4 max-w-[300px] flex-col bg-navy shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-navy-border px-5 py-4">
                <span className="text-lg font-bold text-ice">{profile.logo}</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="rounded-lg p-2 text-ink-muted transition-colors hover:text-ice"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Nav links */}
              <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-5">
                {navLinks.map((link) => {
                  const isActive = active === link.href.slice(1)
                  return (
                    <li key={link.href}>
                      <button
                        onClick={() => go(link.href)}
                        className={`flex w-full items-center rounded-lg px-4 py-3 text-left text-[13px] md:text-[14px] font-medium tracking-[0.2px] focus:outline-none transition-colors ${
                          isActive
                            ? "border-l-[3px] border-l-ice bg-ice/10 text-ice"
                            : "border-l-[3px] border-l-transparent text-ink-muted hover:bg-white/5 hover:text-ink"
                        }`}
                      >
                        {link.label}
                      </button>
                    </li>
                  )
                })}
              </ul>

              {/* Bottom section: social + resume */}
              <div className="border-t border-navy-border px-5 py-5">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-3">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-border text-ink-muted transition-colors hover:text-ice"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-border text-ink-muted transition-colors hover:text-ice"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                  <a
                    href={profile.resume}
                    download
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-ice px-4 py-2.5 text-sm font-medium text-navy transition-all hover:bg-ice/90 hover:shadow-glow"
                  >
                    <FileDown size={16} />
                    Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
