import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Brain,
  Server,
  Database,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const GITHUB_URL = "https://github.com/Axel200110";
const EMAIL_URL = "mailto:thuwanrajap076@gmail.com";

const highlights = [
  { icon: Code, label: "Full Stack Development" },
  { icon: Smartphone, label: "Mobile Development" },
  { icon: Brain, label: "Research-Based Software" },
  { icon: Server, label: "REST API Development" },
  { icon: Database, label: "Database Design" },
];

const stats = [
  { value: "6", label: "Months Internship" },
  { value: "6+", label: "Featured Projects" },
  { value: "20+", label: "Technologies Used" },
  { value: "3", label: "Certifications" },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="About" title="Summary" />

        <div className="grid gap-10 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <div className="rounded-2xl glass p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoPill
                  icon={Mail}
                  label="Email"
                  value="thuwanrajap076@gmail.com"
                  href={EMAIL_URL}
                />
                <InfoPill icon={MapPin} label="Location" value="Sri Lanka" />
                <InfoPill icon={Phone} label="Phone" value="0789479949" href="tel:+94789479949" />
                <InfoPill icon={Github} label="Profile" value="Axel200110" href={GITHUB_URL} />
              </div>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Passionate and detail-oriented Full-Stack Developer with experience in developing
                modern web and mobile applications using React, Next.js, Node.js, PHP, Java, Python,
                and Go. Skilled in building scalable systems including student management platforms,
                GPA calculator applications, eLearning systems, streaming platforms, and
                research-based software solutions. Experienced in frontend and backend development,
                database management, REST API integration, and mobile app development using React
                Native and Expo.
              </p>

              <p className="mt-4 text-muted-foreground">
                Strong understanding of the Software Development Life Cycle (SDLC), Agile
                methodologies, and modern UI and UX practices. Enthusiastic about full-stack
                development, cloud technologies, and creating innovative digital solutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm"
                  >
                    <h.icon className="h-4 w-4 text-[var(--brand-cyan)]" />
                    {h.label}
                  </div>
                ))}
              </div>
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
                <div
                  className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ background: "var(--gradient-primary)", filter: "blur(40px)" }}
                />
                <div className="text-3xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
            <a
              href="#projects"
              className="col-span-2 inline-flex items-center justify-center gap-2 rounded-2xl glass p-4 text-sm transition-colors hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> View featured projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoPill({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-brand text-primary-foreground">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}
