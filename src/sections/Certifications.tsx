import { motion } from "framer-motion"
import { ShieldCheck, ArrowUpRight } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import { certifications } from "../data"

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad bg-navy-deep/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="// CERTIFICATIONS" title="Certifications" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="glass group flex items-start gap-4 rounded-xl p-5 transition-all hover:-translate-y-1 hover:border-ice/50 hover:shadow-glow"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-ice/10 text-ice transition-colors group-hover:bg-ice group-hover:text-navy">
                <ShieldCheck size={20} />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-ink">{cert.name}</h3>
                <p className="mt-0.5 text-sm text-ink-muted">{cert.issuer}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-ice">
                  View Certificate
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
