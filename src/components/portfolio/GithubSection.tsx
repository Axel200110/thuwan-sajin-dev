import { motion } from "framer-motion";
import { Github, Star, GitFork, Code2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const REPOS = [
  { name: "student-management-system", desc: "React + Node + MongoDB platform.", lang: "TypeScript", stars: 24, forks: 6 },
  { name: "gpa-calculator-app", desc: "React Native GPA calculator with charts.", lang: "TypeScript", stars: 18, forks: 3 },
  { name: "elearning-platform", desc: "PHP & MySQL learning platform.", lang: "PHP", stars: 12, forks: 2 },
  { name: "dengue-risk-ml", desc: "Python ML model for dengue prediction.", lang: "Python", stars: 31, forks: 8 },
];

const LANGS = [
  { name: "JavaScript", value: 28, color: "bg-amber-400" },
  { name: "TypeScript", value: 24, color: "bg-sky-400" },
  { name: "Python", value: 18, color: "bg-emerald-400" },
  { name: "Java", value: 14, color: "bg-orange-400" },
  { name: "PHP", value: 10, color: "bg-violet-400" },
  { name: "Go", value: 6, color: "bg-cyan-400" },
];

export function GithubSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="GitHub" title="Open Source Activity" />

        <div className="grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl glass p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-primary-foreground">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">@thuwansajin</h3>
                <p className="text-xs text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
              <Stat label="Repos" value="25+" />
              <Stat label="Stars" value="120+" />
              <Stat label="Followers" value="80+" />
            </div>
            <a href="#" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm text-primary-foreground transition-transform hover:scale-[1.02]">
              <Github className="h-4 w-4" /> View profile
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl glass p-6 md:col-span-2"
          >
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-sm font-semibold">Contributions</h4>
              <span className="text-xs text-muted-foreground">Last 12 months</span>
            </div>
            <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-1">
              {Array.from({ length: 26 * 7 }).map((_, i) => {
                const intensity = [0, 0, 1, 1, 2, 2, 3, 4][Math.floor(Math.random() * 8)];
                const opacity = [0.08, 0.2, 0.4, 0.65, 1][intensity];
                return (
                  <span
                    key={i}
                    className="aspect-square rounded-[3px]"
                    style={{
                      background: intensity === 0 ? "oklch(1 0 0 / 6%)" : `oklch(0.65 0.22 260 / ${opacity})`,
                    }}
                  />
                );
              })}
            </div>

            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold">Top Languages</h4>
              <div className="space-y-2">
                {LANGS.map((l) => (
                  <div key={l.name}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span>{l.name}</span>
                      <span className="text-muted-foreground">{l.value}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <div className={`h-full ${l.color}`} style={{ width: `${l.value * 3}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {REPOS.map((r, i) => (
            <motion.a
              key={r.name}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="block rounded-2xl glass p-5 transition-all hover:-translate-y-0.5 hover:glow-ring"
            >
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Code2 className="h-4 w-4 text-[var(--brand-cyan)]" /> {r.name}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
              <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                <span>● {r.lang}</span>
                <span className="inline-flex items-center gap-1"><Star className="h-3 w-3" /> {r.stars}</span>
                <span className="inline-flex items-center gap-1"><GitFork className="h-3 w-3" /> {r.forks}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/5 py-2">
      <div className="text-base font-bold text-gradient">{value}</div>
      <div className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</div>
    </div>
  );
}
