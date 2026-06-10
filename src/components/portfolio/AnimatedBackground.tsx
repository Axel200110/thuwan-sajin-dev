export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[oklch(0.55_0.25_265)] opacity-30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-[oklch(0.55_0.27_305)] opacity-25 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      <div className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-[oklch(0.7_0.18_200)] opacity-20 blur-3xl animate-blob" style={{ animationDelay: "-12s" }} />
    </div>
  );
}
