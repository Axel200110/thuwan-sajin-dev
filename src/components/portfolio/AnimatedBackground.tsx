import { useEffect, useRef, useState } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLight, setIsLight] = useState(false);

  /* ── Watch for theme changes ── */
  useEffect(() => {
    const check = () => setIsLight(document.documentElement.classList.contains("light"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  /* ── Constellation canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let W = 0,
      H = 0;

    interface Dot {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }
    const DOTS = 55;
    const dots: Dot[] = [];

    function resize() {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    }
    function seed() {
      dots.length = 0;
      for (let i = 0; i < DOTS; i++) {
        dots.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.4 + 0.15,
        });
      }
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      const light = document.documentElement.classList.contains("light");
      const lineColor = light ? "100,120,220" : "140,120,255";
      const dotColor = light ? "90,100,200" : "180,160,255";

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > W) d.vx *= -1;
        if (d.y < 0 || d.y > H) d.vy *= -1;
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(${lineColor},${0.13 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor},${d.alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    resize();
    seed();
    draw();
    const ro = new ResizeObserver(() => {
      resize();
      seed();
    });
    ro.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  if (isLight) {
    /* ════════════════════════════════════════
       LIGHT MODE — soft, airy, professional
    ════════════════════════════════════════ */
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Crisp white base */}
        <div className="absolute inset-0 bg-[oklch(0.97_0.005_250)]" />

        {/* Soft pastel aurora — very low opacity */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 60% at 10% 5%,
                oklch(0.75 0.12 270 / 20%) 0%, transparent 65%),
              radial-gradient(ellipse 80% 55% at 90% 15%,
                oklch(0.72 0.14 305 / 16%) 0%, transparent 60%),
              radial-gradient(ellipse 70% 50% at 50% 100%,
                oklch(0.80 0.10 195 / 14%) 0%, transparent 55%)
            `,
          }}
        />

        {/* Animated aurora blobs */}
        <div
          className="absolute -top-[25%] -left-[15%] w-[70%] h-[70%] rounded-full"
          style={{
            background: "radial-gradient(ellipse, oklch(0.78 0.12 270 / 18%) 0%, transparent 70%)",
            animation: "aurora-drift-1 20s ease-in-out infinite alternate",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute -bottom-[15%] -right-[10%] w-[60%] h-[60%] rounded-full"
          style={{
            background: "radial-gradient(ellipse, oklch(0.76 0.13 305 / 14%) 0%, transparent 70%)",
            animation: "aurora-drift-2 25s ease-in-out infinite alternate",
            filter: "blur(60px)",
          }}
        />

        {/* Fine dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.60 0.08 265 / 35%) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)",
          }}
        />

        {/* Constellation canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />

        {/* Subtle diagonal lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            background: `repeating-linear-gradient(
              -55deg, transparent, transparent 60px,
              oklch(0.40 0.10 265) 60px, oklch(0.40 0.10 265) 61px
            )`,
          }}
        />

        {/* Top shimmer */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.65 0.18 270 / 35%), oklch(0.60 0.20 305 / 30%), transparent)",
          }}
        />

        {/* Light vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, oklch(0.88 0.01 265 / 50%) 100%)",
          }}
        />

        <style>{KEYFRAMES}</style>
      </div>
    );
  }

  /* ════════════════════════════════════════
     DARK MODE — aurora / constellation
  ════════════════════════════════════════ */
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep base */}
      <div className="absolute inset-0 bg-[oklch(0.13_0.018_265)]" />

      {/* Aurora bands */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(ellipse 120% 60% at 15% 10%,
              oklch(0.45 0.22 270 / 28%) 0%, transparent 65%),
            radial-gradient(ellipse 90% 70% at 85% 20%,
              oklch(0.42 0.24 305 / 22%) 0%, transparent 60%),
            radial-gradient(ellipse 80% 50% at 50% 95%,
              oklch(0.55 0.18 195 / 18%) 0%, transparent 55%)
          `,
        }}
      />

      {/* Diagonal light shafts */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          background: `repeating-linear-gradient(
            -55deg, transparent, transparent 80px,
            oklch(0.75 0.08 265 / 60%) 80px, oklch(0.75 0.08 265 / 60%) 81px
          )`,
        }}
      />

      {/* Animated aurora blobs */}
      <div
        className="absolute -top-[30%] -left-[20%] w-[80%] h-[80%] rounded-full"
        style={{
          background: "radial-gradient(ellipse, oklch(0.50 0.25 270 / 18%) 0%, transparent 70%)",
          animation: "aurora-drift-1 18s ease-in-out infinite alternate",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute -bottom-[20%] -right-[15%] w-[70%] h-[70%] rounded-full"
        style={{
          background: "radial-gradient(ellipse, oklch(0.48 0.26 305 / 15%) 0%, transparent 70%)",
          animation: "aurora-drift-2 22s ease-in-out infinite alternate",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute top-[40%] left-[30%] w-[50%] h-[50%] rounded-full"
        style={{
          background: "radial-gradient(ellipse, oklch(0.60 0.18 195 / 12%) 0%, transparent 70%)",
          animation: "aurora-drift-3 26s ease-in-out infinite alternate",
          filter: "blur(60px)",
        }}
      />

      {/* Constellation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(0.75 0.05 265) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Top shimmer */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.65 0.22 270 / 40%), oklch(0.60 0.24 305 / 35%), transparent)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, oklch(0.10 0.02 265 / 60%) 100%)",
        }}
      />

      <style>{KEYFRAMES}</style>
    </div>
  );
}

const KEYFRAMES = `
  @keyframes aurora-drift-1 {
    0%   { transform: translate(0, 0)    scale(1);    }
    50%  { transform: translate(8%, 5%)  scale(1.08); }
    100% { transform: translate(-5%, 8%) scale(0.95); }
  }
  @keyframes aurora-drift-2 {
    0%   { transform: translate(0, 0)     scale(1);    }
    50%  { transform: translate(-6%, -4%) scale(1.1);  }
    100% { transform: translate(5%, 6%)   scale(0.92); }
  }
  @keyframes aurora-drift-3 {
    0%   { transform: translate(0, 0)    scale(1);    }
    50%  { transform: translate(4%, -6%) scale(1.05); }
    100% { transform: translate(-4%, 4%) scale(1.12); }
  }
`;
