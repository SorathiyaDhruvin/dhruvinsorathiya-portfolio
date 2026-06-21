import Reveal from "./Reveal"

interface SectionHeadingProps {
  label: string
  title: string
  align?: "left" | "center"
}

export default function SectionHeading({ label, title, align = "center" }: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl md:text-5xl">{title}</h2>
      <div
        className={`mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-ice to-ice-blue ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </Reveal>
  )
}
