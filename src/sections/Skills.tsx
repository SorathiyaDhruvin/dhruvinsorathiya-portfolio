import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SectionHeading from "../components/SectionHeading"
import Reveal from "../components/Reveal"
import { skillGroups } from "../data"
import { skillIcons, fallbackSkillIcon } from "../skillIcons"

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const group = skillGroups[activeTab]

  return (
    <section id="skills" className="section-pad bg-navy-deep/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="// TECHNICAL SKILLS" title="My Tech Stack" />

        <Reveal className="mt-12">
          <div className="flex flex-wrap justify-center gap-2">
            {skillGroups.map((g, i) => (
              <button
                key={g.category}
                onClick={() => setActiveTab(i)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  activeTab === i
                    ? "bg-ice text-navy shadow-glow"
                    : "border border-navy-border bg-white/5 text-ink-muted hover:text-ink"
                }`}
              >
                {g.category}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          >
            {group.items.map((skill) => {
              const { Icon, color } = skillIcons[skill] ?? fallbackSkillIcon
              return (
                <div
                  key={skill}
                  className="glass group flex flex-col items-center gap-3 rounded-xl p-5 text-center transition-all hover:-translate-y-1 hover:border-ice/50 hover:shadow-glow"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ice/10 transition-transform group-hover:scale-110">
                    <Icon size={32} color={color} aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-ink">{skill}</span>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
