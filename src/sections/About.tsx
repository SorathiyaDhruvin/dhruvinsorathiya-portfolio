import { Check, User, Code, Cpu, Trophy, ArrowUpRight } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import Reveal from "../components/Reveal"
import { profile, interests, whatIDo, codingProfiles } from "../data"

export default function About() {
  return (
    <section id="about" className="section-pad mx-auto max-w-7xl">
      <SectionHeading label="// ABOUT ME" title="Know Who I Am" />

      <div className="mt-14 grid items-start gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="relative mx-auto w-fit">
            <div className="absolute -left-3 -top-3 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-ice" />
            <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-ice" />
            <img
              src={profile.photo || "/placeholder.svg"}
              alt={`${profile.name} portrait`}
              className="h-80 w-72 rounded-2xl object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-3 grid gap-6 sm:grid-cols-2">
          {/* Professional Summary */}
          <Reveal className="sm:col-span-2">
            <div className="glass rounded-2xl p-6 hover:border-ice/50 hover:shadow-glow transition-all">
              <h3 className="text-lg font-bold text-ink mb-3 flex items-center gap-2">
                <span className="text-ice"><User size={18} /></span>
                Professional Summary
              </h3>
              <p className="leading-relaxed text-ink-muted text-[15px]">
                Aspiring Software Engineer with hands-on experience in full-stack and web application development
                through real-world projects and internships. Skilled in Java, JavaScript, HTML, CSS, Kotlin, MongoDB,
                and modern software development practices with experience building AI-driven and interactive web
                applications. Passionate about developing scalable, secure, and user-focused software solutions.
              </p>
            </div>
          </Reveal>

          {/* Coding Profiles */}
          <Reveal className="sm:col-span-2">
            <div className="glass rounded-2xl p-6 hover:border-ice/50 hover:shadow-glow transition-all">
              <h3 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
                <span className="text-ice"><Trophy size={18} /></span>
                Coding Profiles
              </h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                {codingProfiles.map((p) => (
                  <a
                    key={p.platform}
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col justify-between rounded-xl border border-navy-border bg-navy-card/40 p-5 transition-all hover:border-ice/50 hover:bg-navy-card/80 group relative overflow-hidden"
                  >
                    <div 
                      className="absolute top-0 left-0 w-full h-[3px] opacity-70 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: p.accent }}
                    />
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-ink text-base">{p.platform}</span>
                        <ArrowUpRight size={16} className="text-ink-muted group-hover:text-ice transition-colors" />
                      </div>
                      <div className="text-[11px] text-ink-muted font-mono">@{p.username}</div>
                      
                      <div className="grid grid-cols-2 gap-3 mt-4 border-t border-navy-border/50 pt-3">
                        {p.stats.map((s) => (
                          <div key={s.label}>
                            <div className="text-[9px] uppercase tracking-wider text-ink-muted">{s.label}</div>
                            <div className="text-xs font-bold text-ink mt-0.5">{s.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {p.note && (
                      <div 
                        className="text-[11px] font-medium px-2 py-1 rounded-md w-fit border"
                        style={{ 
                          color: p.accent, 
                          backgroundColor: `${p.accent}12`, 
                          borderColor: `${p.accent}30` 
                        }}
                      >
                        {p.note}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
