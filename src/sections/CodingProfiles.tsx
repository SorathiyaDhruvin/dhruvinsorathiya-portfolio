import { motion } from "framer-motion"
import { Code, ArrowUpRight } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import { codingProfiles } from "../data"

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="section-pad bg-navy-deep/70">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="// CODING PROFILES" title="Competitive Programming" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {codingProfiles.map((p, i) => (
            <motion.div
              key={p.platform}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group relative overflow-hidden rounded-xl p-6 transition-all hover:-translate-y-1.5 hover:shadow-glow-lg"
              style={{ borderTop: `3px solid ${p.accent}` }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ background: p.accent }}
              />

              <div className="flex items-center gap-3">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ background: `${p.accent}22`, color: p.accent }}
                >
                  <Code size={22} />
                </span>
                <div>
                  <h3 className="font-bold text-ink">{p.platform}</h3>
                  <p className="text-sm text-ink-muted">@{p.username}</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {p.stats.map((s) => (
                  <div key={s.label} className="rounded-lg border border-navy-border bg-navy-card/60 px-3 py-2.5">
                    <div className="text-lg font-bold text-ink">{s.value}</div>
                    <div className="text-xs text-ink-muted">{s.label}</div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm font-medium text-ice">{p.note}</p>

              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-navy-border bg-white/5 px-4 py-2.5 text-sm font-semibold text-ink transition-all hover:border-ice hover:text-ice"
              >
                View Profile
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
