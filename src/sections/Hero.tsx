import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, ArrowDown, FileDown, BadgeCheck, CodeXml, Briefcase, Award, Trophy } from "lucide-react"
import { profile, roles, stats } from "../data"
import CountUp from "../components/CountUp"

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    const speed = deleting ? 45 : 90
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setTimeout(() => setDeleting(true), 1400)
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === "") {
          setDeleting(false)
          setIndex((i) => i + 1)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return text
}

export default function Hero() {
  const typed = useTypewriter(roles)

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:pt-28 overflow-hidden">
      {/* grid dots background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(6,182,212,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-ice/20 blur-[120px]"
      />

      <div className="relative z-20 mx-auto grid max-w-7xl w-full items-center gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-ice/20 bg-ice/10 px-4 py-1.5 text-sm font-medium text-ice w-fit"
          >
            <span className="h-2 w-2 rounded-full bg-ice animate-pulse" />
            Open to Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Hello, I&apos;m <span className="block mt-2 text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 flex h-9 items-center text-xl font-semibold text-ice sm:text-2xl"
          >
            <span>{typed}</span>
            <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-ice" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            Building AI-powered applications, AR/VR campus navigation, and full-stack solutions that solve
            real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="flex items-center gap-2 rounded-md bg-ice px-6 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-ice/90 shadow-lg shadow-ice/20"
            >
              View Projects
              <ArrowDown size={16} />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 rounded-md border border-navy-border bg-navy-card/30 px-6 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-ice hover:text-navy"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right - photo & stats */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative mr-4 mb-4">
              <div className="absolute -inset-3 animate-spin-slow rounded-full bg-gradient-to-tr from-ice via-transparent to-ice-blue opacity-60 blur-md" />
              <div className="relative rounded-full border-2 border-ice/50 p-2 shadow-glow-lg">
                <img
                  src={profile.photo || "/placeholder.svg"}
                  alt={`Portrait of ${profile.name}`}
                  className="h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2 rounded-full border border-navy-border bg-navy-card px-7 py-2.5 text-sm font-medium text-ink shadow-glow whitespace-nowrap">
                <BadgeCheck size={16} className="text-ice" />
                Available for Work
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-3"
          >
            {stats.map((s, i) => {
              const icons = [CodeXml, Briefcase, Award, Trophy]
              const Icon = icons[i % icons.length]
              return (
                <div
                  key={s.label}
                  className="group rounded-xl border border-navy-border bg-navy-card p-4 transition-all duration-300 hover:border-ice/50 hover:shadow-glow hover:shadow-ice/5"
                >
                  <div className="mb-2 flex items-start justify-between">
                    <div className="rounded-lg bg-ice/10 p-2 text-ice transition-colors group-hover:bg-ice group-hover:text-black w-fit">
                      <Icon size={16} />
                    </div>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xl font-bold text-ink sm:text-2xl">
                      <CountUp end={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-[11px] leading-snug text-ink-muted sm:text-[13px]">{s.label}</p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
