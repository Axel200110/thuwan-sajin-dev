import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Project = {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  category: "Web" | "Mobile" | "Research";
  gradient: string;
  emoji: string;
};

const PROJECTS: Project[] = [
  {
    title: "Student Management System",
    description: "Full-stack platform for managing student records, enrollment, and grading.",
    tech: ["React", "Node.js", "MongoDB"],
    features: [
      "Student registration",
      "Course enrollment",
      "Grade management",
      "Dashboard analytics",
    ],
    category: "Web",
    gradient: "from-sky-500/40 via-blue-500/30 to-indigo-500/40",
    emoji: "🎓",
  },
  {
    title: "GPA Calculator Mobile App",
    description: "Cross-platform mobile app for students to compute GPA and CGPA with insights.",
    tech: ["React Native", "Expo"],
    features: [
      "GPA calculation",
      "CGPA calculation",
      "Degree classification",
      "Dark mode",
      "Charts and analytics",
    ],
    category: "Mobile",
    gradient: "from-fuchsia-500/40 via-purple-500/30 to-violet-500/40",
    emoji: "📱",
  },
  {
    title: "eLearning Platform",
    description:
      "Online learning system with courses, quizzes, certificates and progress tracking.",
    tech: ["PHP", "MySQL"],
    features: ["Video lessons", "Quiz system", "Certificates", "Progress tracking"],
    category: "Web",
    gradient: "from-emerald-500/40 via-teal-500/30 to-cyan-500/40",
    emoji: "📚",
  },
  {
    title: "Movie and Music Streaming Platforms",
    description: "Modern streaming experiences built for web and mobile with responsive UIs.",
    tech: ["Next.js", "Supabase", "React Native", "Expo"],
    features: [
      "Responsive playback UI",
      "Cross-platform experience",
      "Modern navigation",
      "Media-focused layouts",
    ],
    category: "Web",
    gradient: "from-rose-500/40 via-orange-500/30 to-amber-500/40",
    emoji: "🎬",
  },
  {
    title: "MCQ Learning App",
    description: "Interactive educational mobile app for quiz-based learning and practice.",
    tech: ["React Native", "Expo"],
    features: [
      "Interactive MCQs",
      "Mobile-friendly UI",
      "Learner-focused flows",
      "Simple navigation",
    ],
    category: "Mobile",
    gradient: "from-cyan-500/40 via-sky-500/30 to-blue-500/40",
    emoji: "🧠",
  },
  {
    title: "Medalist Recommendation System",
    description: "Research project for achievement-based event evaluation and recommendations.",
    tech: ["Python", "Data Analysis"],
    features: [
      "Recommendation logic",
      "Research-driven workflow",
      "Automated evaluation",
      "Result-focused output",
    ],
    category: "Research",
    gradient: "from-violet-500/40 via-fuchsia-500/30 to-pink-500/40",
    emoji: "🏅",
  },
];

const FILTERS = ["All", "Web", "Mobile", "Research"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Work"
          description="A selection of projects across web, mobile, and research work."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-sm transition-all ${
                filter === f
                  ? "bg-gradient-brand text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl glass transition-all hover:-translate-y-1 hover:glow-ring"
              >
                <div
                  className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${p.gradient}`}
                >
                  <div className="absolute inset-0 bg-grid opacity-50" />
                  <div className="absolute inset-0 grid place-items-center text-6xl opacity-90 transition-transform duration-700 group-hover:scale-110">
                    {p.emoji}
                  </div>
                  <div className="absolute left-3 top-3 rounded-full glass-strong px-2.5 py-1 text-xs">
                    {p.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.description}</p>

                  <ul className="mt-4 grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-gradient-brand" /> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-2">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 rounded-lg glass px-3 py-1.5 text-xs transition-colors hover:bg-white/10"
                    >
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-brand px-3 py-1.5 text-xs text-primary-foreground transition-transform hover:scale-105"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
