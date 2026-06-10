import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const ITEMS = [
  {
    year: "2024",
    title: "Software Engineer Intern - Ceylon Academy",
    text: "Built practical web solutions during a six-month internship and strengthened full-stack development skills.",
  },
  {
    year: "2024",
    title: "Student Management System",
    text: "Developed a full-stack platform for student records, enrollment, grading, and administrative workflows.",
  },
  {
    year: "2025",
    title: "GPA Calculator Mobile App",
    text: "Created a React Native app for GPA and CGPA calculations with a clean mobile-first experience.",
  },
  {
    year: "2025",
    title: "eLearning Platform",
    text: "Built an online learning system with courses, quizzes, certificates, and progress tracking.",
  },
  {
    year: "2025",
    title: "Movie and Music Streaming Platforms",
    text: "Designed responsive entertainment platforms focused on modern layouts and media-rich user flows.",
  },
  {
    year: "2025",
    title: "MCQ Learning App and Medalist Recommendation System",
    text: "Delivered an educational mobile app and a research-based recommendation system for achievement analysis.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading eyebrow="Experience" title="My Journey" />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:left-1/2" />
          <ul className="space-y-10">
            {ITEMS.map((it, i) => {
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  <div
                    className={`pl-12 md:pl-0 ${left ? "md:pr-10 md:text-right" : "md:order-2 md:pl-10"}`}
                  >
                    <div className="inline-flex rounded-full bg-gradient-brand px-3 py-1 text-xs font-medium text-primary-foreground">
                      {it.year}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold">{it.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{it.text}</p>
                  </div>
                  <span className="absolute left-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-background ring-2 ring-[var(--brand-purple)] md:left-1/2 md:-translate-x-1/2">
                    <span className="h-2 w-2 rounded-full bg-gradient-brand" />
                  </span>
                  <div className={left ? "md:order-2" : ""} />
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
