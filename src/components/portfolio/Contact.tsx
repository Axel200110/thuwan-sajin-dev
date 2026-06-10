import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Contact" title="Let's Work Together" description="Have a project in mind? Reach out — I'd love to hear about it." />

        <div className="grid gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:col-span-2"
          >
            <InfoRow icon={MapPin} label="Location" value="Sri Lanka" />
            <InfoRow icon={Mail} label="Email" value="your-email@example.com" href="mailto:your-email@example.com" />
            <InfoRow icon={Github} label="GitHub" value="github.com/thuwansajin" href="#" />
            <InfoRow icon={Linkedin} label="LinkedIn" value="linkedin.com/in/thuwansajin" href="#" />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="space-y-4 rounded-2xl glass p-6 md:col-span-3"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Subject" name="subject" />
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--brand-blue)] focus:bg-white/10"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.01]"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--brand-blue)] focus:bg-white/10"
        placeholder={label}
      />
    </div>
  );
}

function InfoRow({
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
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl glass p-4 transition-colors hover:bg-white/10">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
