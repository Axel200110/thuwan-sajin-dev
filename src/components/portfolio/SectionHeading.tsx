import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
        {title.split(" ").map((w, i, arr) =>
          i === arr.length - 1 ? (
            <span key={i} className="text-gradient">
              {" "}
              {w}
            </span>
          ) : (
            <span key={i}>
              {i === 0 ? "" : " "}
              {w}
            </span>
          ),
        )}
      </h2>
      {description && <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>}
    </motion.div>
  );
}
