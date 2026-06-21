import type { IconType } from "react-icons"
import {
  SiJavascript,
  SiPython,
  SiKotlin,
  SiC,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiAndroid,
  SiUnity,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiOpenai,
  SiReplit,
  SiCplusplus,
  SiFlask,
  SiPostgresql,
  SiDocker,
  SiLinux,
  SiArduino,
  SiRender,
} from "react-icons/si"
import { FaJava, FaDatabase, FaAws } from "react-icons/fa"
import { VscVscode } from "react-icons/vsc"
import { Code2, Zap, Cpu } from "lucide-react"

export interface SkillIcon {
  Icon: IconType
  color: string
}

/**
 * Maps a skill name (from data.ts) to its official brand icon + color.
 * Falls back to a generic code icon for skills without a dedicated logo.
 */
export const skillIcons: Record<string, SkillIcon> = {
  Java: { Icon: FaJava, color: "#f89820" },
  JavaScript: { Icon: SiJavascript, color: "#f7df1e" },
  Python: { Icon: SiPython, color: "#3776ab" },
  Kotlin: { Icon: SiKotlin, color: "#a97bff" },
  C: { Icon: SiC, color: "#283593" },
  "C++": { Icon: SiCplusplus, color: "#00599c" },
  HTML5: { Icon: SiHtml5, color: "#e34f26" },
  CSS3: { Icon: SiCss, color: "#1572b6" },
  React: { Icon: SiReact, color: "#61dafb" },
  "React.js": { Icon: SiReact, color: "#61dafb" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06b6d4" },
  "Framer Motion": { Icon: SiFramer, color: "#0055ff" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  "Express.js": { Icon: SiExpress, color: "currentColor" },
  MongoDB: { Icon: SiMongodb, color: "#47a248" },
  MySQL: { Icon: SiMysql, color: "#00758f" },
  PostgreSQL: { Icon: SiPostgresql, color: "#336791" },
  Firebase: { Icon: SiFirebase, color: "#ffca28" },
  "Android (Kotlin)": { Icon: SiAndroid, color: "#3ddc84" },
  Unity: { Icon: SiUnity, color: "currentColor" },
  Git: { Icon: SiGit, color: "#f05032" },
  GitHub: { Icon: SiGithub, color: "currentColor" },
  "VS Code": { Icon: VscVscode, color: "#007acc" },
  Postman: { Icon: SiPostman, color: "#ff6c37" },
  Vercel: { Icon: SiVercel, color: "currentColor" },
  Render: { Icon: SiRender, color: "#46e3b7" },
  Replit: { Icon: SiReplit, color: "#f26207" },
  "OpenAI API": { Icon: SiOpenai, color: "#10a37f" },
  Flask: { Icon: SiFlask, color: "currentColor" },
  Docker: { Icon: SiDocker, color: "#2496ed" },
  Linux: { Icon: SiLinux, color: "#fcc624" },
  "REST API": { Icon: Zap as unknown as IconType, color: "#00d4ff" },
  "AR Foundation": { Icon: Cpu as unknown as IconType, color: "#3ddc84" },
  "Prompt Engineering": { Icon: SiOpenai, color: "#10a37f" },
  AWS: { Icon: FaAws, color: "#ff9900" },
  SQL: { Icon: FaDatabase, color: "#00758f" },
  NodeJS: { Icon: SiNodedotjs, color: "#339933" },
}

export const fallbackSkillIcon: SkillIcon = { Icon: Code2 as unknown as IconType, color: "#00d4ff" }
