import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Code2, Server, Database, Wrench } from "lucide-react";

type Skill = { name: string; level: number };

const groups: { title: string; icon: typeof Code2; color: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-sky-400 to-blue-500",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Bootstrap", level: 82 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-fuchsia-400 to-purple-500",
    skills: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Node.js", level: 88 },
      { name: "Python", level: 84 },
      { name: "PHP", level: 80 },
      { name: "Go", level: 72 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-cyan-400 to-teal-500",
    skills: [
      { name: "MongoDB", level: 86 },
      { name: "MySQL", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "SQLite", level: 84 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-amber-400 to-orange-500",
    skills: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Docker", level: 74 },
      { name: "Postman", level: 88 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Skills" title="My Tech Stack" description="Tools and technologies I use to ship modern, scalable software." />

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:glow-ring"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${g.color} text-white shadow-md`}>
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">{g.title}</h3>
              </div>
              <div className="space-y-3">
                {g.skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-brand"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
