import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const ITEMS = [
  { year: "2024", title: "Started Full Stack Development", text: "Began the journey into building full stack web applications." },
  { year: "2025", title: "Built Student Management System", text: "Delivered a complete platform with React, Node and MongoDB." },
  { year: "2025", title: "Created GPA Calculator Mobile App", text: "Shipped a React Native app with charts and analytics." },
  { year: "2025", title: "Developed eLearning Platform", text: "Built a PHP & MySQL platform with video lessons and quizzes." },
  { year: "2026", title: "Built Dengue Risk Prediction System", text: "Designed an ML model for outbreak risk classification." },
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
                  <div className={`pl-12 md:pl-0 ${left ? "md:pr-10 md:text-right" : "md:order-2 md:pl-10"}`}>
                    <div className="inline-flex rounded-full bg-gradient-brand px-3 py-1 text-xs font-medium text-primary-foreground">{it.year}</div>
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
