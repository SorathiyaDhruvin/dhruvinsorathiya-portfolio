import { GraduationCap } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import Reveal from "../components/Reveal"
import { education } from "../data"

export default function Education() {
  return (
    <section id="education" className="section-pad mx-auto max-w-7xl">
      <SectionHeading label="// EDUCATION" title="Academic" />

      <div className="mt-14 space-y-5">
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.1}>
            <div className="glass flex flex-col gap-4 rounded-xl border-l-2 border-l-ice p-6 transition-all hover:shadow-glow sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-ice/10 text-ice">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <h3 className="font-bold text-ink">{edu.degree}</h3>
                  <p className="text-sm text-ice">{edu.school}</p>
                  <p className="mt-1 text-sm text-ink-muted">{edu.detail}</p>
                </div>
              </div>
              <span className="w-fit rounded-full border border-ice/40 bg-ice/5 px-3 py-1 text-sm font-medium text-ice">
                {edu.period}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
