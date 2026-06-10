import { motion } from "framer-motion";
import { Globe, ServerCog, Smartphone, Database, BrainCircuit, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    text: "Modern, responsive apps built with React, Next.js and TypeScript.",
  },
  {
    icon: ServerCog,
    title: "Backend API Development",
    text: "Robust REST APIs in Node.js, Java Spring Boot, Go and Python.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    text: "Cross-platform apps with React Native and Expo.",
  },
  {
    icon: Database,
    title: "Database Design",
    text: "Schemas, modeling, and optimization across SQL and NoSQL.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning Solutions",
    text: "Predictive models, data pipelines and analytics.",
  },
  {
    icon: Sparkles,
    title: "Custom Software Development",
    text: "Tailored software solutions for specific problem domains.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Services" title="What I Do" />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:glow-ring"
            >
              <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-[var(--shadow-glow)]">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
