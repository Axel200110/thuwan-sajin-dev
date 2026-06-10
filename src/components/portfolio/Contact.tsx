import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2, Phone, Loader2, AlertCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const GITHUB_URL = "https://github.com/Axel200110";
const LINKEDIN_URL = "https://www.linkedin.com/in/thuwan-dev/";
const EMAIL_URL = "mailto:thuwanrajap076@gmail.com";

// We'll read the access key from Vite's env variables, or default to a reminder string
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

export function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setSent(false); // Clear any old state before starting
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    // Add the Web3Forms access key to the form data
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    // Add a subject line for the email notification
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setError(null);
        e.currentTarget.reset();
        setTimeout(() => setSent(false), 5000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect to the email server. Please check your internet connection.");
      console.error("Web3Forms Error:", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          description="Have a project in mind? Reach out and I would love to hear about it."
        />

        <div className="grid gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:col-span-2"
          >
            <InfoRow icon={MapPin} label="Location" value="Sri Lanka" />
            <InfoRow icon={Mail} label="Email" value="thuwanrajap076@gmail.com" href={EMAIL_URL} />
            <InfoRow icon={Phone} label="Phone" value="0789479949" href="tel:+94789479949" />
            <InfoRow icon={Github} label="GitHub" value="github.com/Axel200110" href={GITHUB_URL} />
            <InfoRow icon={Linkedin} label="LinkedIn" value="linkedin.com/in/thuwan-dev" href={LINKEDIN_URL} />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl glass p-6 md:col-span-3"
          >
            {/* Show setup warning to you in dev mode if you haven't set your key yet */}
            {WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE" && (
              <div className="flex items-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/20 p-3 text-xs text-amber-400">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>
                  <strong>Setup Reminder:</strong> Add your Web3Forms access key. Register at{" "}
                  <a href="https://web3forms.com" target="_blank" rel="noreferrer" className="underline font-semibold">
                    web3forms.com
                  </a>{" "}
                  and place it in your <code>.env</code> file as <code>VITE_WEB3FORMS_ACCESS_KEY</code>.
                </span>
              </div>
            )}

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Subject" name="subject" />
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--brand-blue)] focus:bg-white/10 text-foreground"
                placeholder="Tell me about your project..."
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-xs text-red-400">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.01] disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Message sent successfully!
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
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--brand-blue)] focus:bg-white/10 text-foreground"
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
