import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import { projects } from "../data"

export default function Projects() {
  return (
    <section id="projects" className="section-pad mx-auto max-w-7xl">
      <SectionHeading label="// PROJECTS" title="Featured Work" />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
            className="glass group flex flex-col rounded-xl p-6 transition-all hover:-translate-y-1.5 hover:border-ice/50 hover:shadow-glow-lg"
          >
            {/* Project Image */}
            {p.image && (
              <div className="relative mb-5 overflow-hidden rounded-lg border border-navy-border bg-navy-deep aspect-video">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="rounded-full border border-ice/40 bg-ice/5 px-3 py-1 text-xs font-medium text-ice">
                {p.category}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} source code`}
                  className="rounded-lg p-2 text-ink-muted transition-colors hover:text-ice"
                >
                  <Github size={18} />
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${p.title} live demo`}
                  className="rounded-lg p-2 text-ink-muted transition-colors hover:text-ice"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <h3 className="mt-4 text-xl font-bold text-ink">{p.title}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-ink-muted">{p.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-navy-border bg-navy-card px-2.5 py-1 text-xs font-medium text-ice"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
