import { Briefcase } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import Reveal from "../components/Reveal"
import { experience } from "../data"

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-navy-deep/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="// EXPERIENCE" title="Work Journey" />

        <div className="relative mt-14 pl-8">
          <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-ice via-navy-border to-transparent" />
          {experience.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 0.1} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[26px] top-6 h-3.5 w-3.5 rounded-full border-2 border-navy bg-ice shadow-glow" />
              <div className="glass rounded-xl border-l-2 border-l-ice p-6 transition-all hover:shadow-glow">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-ice/10 text-ice">
                      <Briefcase size={18} />
                    </span>
                    <div>
                      <h3 className="font-bold text-ink">{exp.role}</h3>
                      <p className="text-sm text-ice">{exp.company}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-navy-border bg-navy-card px-3 py-1 text-xs font-medium text-ink-muted">
                    {exp.type}
                  </span>
                </div>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ink-muted">{exp.period}</p>
                <p className="mt-3 leading-relaxed text-ink-muted">{exp.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
