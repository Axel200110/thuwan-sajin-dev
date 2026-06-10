import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, MapPin, Sparkles } from "lucide-react";

const ROLES = [
  "React Developer",
  "Next.js Developer",
  "Java Developer",
  "Python Developer",
  "PHP Developer",
  "Go Developer",
];

function useTyping(words: string[], typeMs = 80, holdMs = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((p) => p + 1);
      return;
    }
    const t = setTimeout(
      () =>
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1),
        ),
      deleting ? typeMs / 2 : typeMs,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words, typeMs, holdMs]);
  return text;
}

const CODE = `const dev = {
  name: "Thuwan Sajin",
  role: "Full Stack Developer",
  location: "Sri Lanka",
  stack: ["React", "Next.js", "Node", "Go"],
  loves: ["clean code", "scalable APIs"],
  open_to_work: true,
};`;

export function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for work
            <MapPin className="h-3 w-3" /> Sri Lanka
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-6xl">
            Hi, I'm <span className="text-gradient animate-gradient-x bg-gradient-brand">Thuwan Sajin</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground md:text-2xl">Full Stack Developer</p>

          <div className="mt-4 flex h-8 items-center gap-2 font-mono text-lg">
            <Sparkles className="h-4 w-4 text-[var(--brand-cyan)]" />
            <span className="text-gradient">{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-foreground" />
          </div>

          <p className="mt-6 max-w-xl text-muted-foreground">
            I build scalable web applications, backend systems, machine learning solutions,
            and mobile applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium transition-colors hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href="#" className="rounded-lg glass p-2.5 transition-colors hover:bg-white/10" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-lg glass p-2.5 transition-colors hover:bg-white/10" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-lg glass p-2.5 transition-colors hover:bg-white/10" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-30 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl glass-strong shadow-[var(--shadow-elegant)]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">developer.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 text-sm leading-relaxed">
              <code className="font-mono">
                {CODE.split("\n").map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="whitespace-pre"
                  >
                    <span className="mr-4 inline-block w-5 select-none text-right text-muted-foreground/50">
                      {i + 1}
                    </span>
                    <Highlighted line={line} />
                  </motion.div>
                ))}
              </code>
            </pre>
          </div>

          <FloatingChip className="absolute -left-4 top-10 animate-float" icon="⚛" label="React" />
          <FloatingChip className="absolute -right-2 top-32 animate-float [animation-delay:-2s]" icon="◆" label="Next.js" />
          <FloatingChip className="absolute -bottom-4 left-12 animate-float [animation-delay:-4s]" icon="🐹" label="Go" />
        </motion.div>
      </div>
    </section>
  );
}

function Highlighted({ line }: { line: string }) {
  const colored = line
    .replace(/(".*?")/g, '<span class="text-emerald-300">$1</span>')
    .replace(/\b(const|true|false)\b/g, '<span class="text-fuchsia-300">$1</span>')
    .replace(/(\w+):/g, '<span class="text-sky-300">$1</span>:');
  return <span dangerouslySetInnerHTML={{ __html: colored }} />;
}

function FloatingChip({ className, icon, label }: { className?: string; icon: string; label: string }) {
  return (
    <div className={`glass-strong flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium shadow-lg ${className ?? ""}`}>
      <span>{icon}</span>
      {label}
    </div>
  );
}
