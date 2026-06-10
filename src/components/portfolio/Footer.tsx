import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const GITHUB_URL = "https://github.com/Axel200110";
const LINKEDIN_URL = "https://www.linkedin.com/in/thuwan-dev/";
const EMAIL_URL = "mailto:thuwanrajap076@gmail.com";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-primary-foreground">
              <Code2 className="h-4 w-4" />
            </span>
            <span className="text-gradient">Thuwan Sajin</span>
          </div>

          <p className="text-center text-sm italic text-muted-foreground">
            "Building software that solves real-world problems."
          </p>

          <div className="flex items-center gap-3">
            <a
              href={GITHUB_URL}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg glass p-2 transition-colors hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg glass p-2 transition-colors hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={EMAIL_URL}
              aria-label="Email"
              className="rounded-lg glass p-2 transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          © 2026 Thuwan Sajin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
