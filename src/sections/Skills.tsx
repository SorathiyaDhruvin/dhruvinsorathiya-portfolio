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
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            {group.items.map((skill) => {
              const { Icon, color } = skillIcons[skill] ?? fallbackSkillIcon
              return (
                <div
                  key={skill}
                  className="glass group flex flex-col items-center justify-center gap-3 rounded-xl w-32 sm:w-36 h-32 sm:h-36 transition-all hover:-translate-y-1 hover:border-ice/50 hover:shadow-glow"
                >
                  <Icon size={36} color={color} className="flex-shrink-0 transition-transform group-hover:scale-110" aria-hidden />
                  <span className="text-sm font-medium text-ink mt-1">{skill}</span>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
