import { motion } from "framer-motion";
import { Code, Smartphone, Brain, Server, Database, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  { icon: Code, label: "Full Stack Development" },
  { icon: Smartphone, label: "Mobile Development" },
  { icon: Brain, label: "Machine Learning" },
  { icon: Server, label: "REST API Development" },
  { icon: Database, label: "Database Design" },
];

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "20+", label: "Technologies Used" },
  { value: "3+", label: "Years of Learning" },
  { value: "25+", label: "GitHub Repositories" },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="About" title="About Me" />

        <div className="grid gap-10 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a <span className="text-foreground">Full Stack Developer</span> with experience in
              React, Next.js, Java, Python, PHP, JavaScript, Go, Node.js, MongoDB, MySQL, PostgreSQL, and SQLite.
              I enjoy building modern web applications, backend systems, mobile apps, and machine learning solutions.
            </p>
            <p className="mt-4 text-muted-foreground">
              I'm passionate about creating software solutions that solve real-world problems.
              My experience spans frontend development, backend systems, database design,
              machine learning, and mobile applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {highlights.map((h) => (
                <div key={h.label} className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm">
                  <h.icon className="h-4 w-4 text-[var(--brand-cyan)]" />
                  {h.label}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:col-span-2">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl glass p-5 transition-all hover:-translate-y-1 hover:glow-ring"
              >
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "var(--gradient-primary)", filter: "blur(40px)" }} />
                <div className="text-3xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
            <a href="#" className="col-span-2 inline-flex items-center justify-center gap-2 rounded-2xl glass p-4 text-sm transition-colors hover:bg-white/10">
              <Github className="h-4 w-4" /> View GitHub profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
