"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
  color: string;
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      isHovering: false,
      radius: 140,
    };

    const particleColors = [
      "rgba(255, 255, 255,",      // Pure starlight
      "rgba(240, 243, 255,",      // Diamond white
      "rgba(196, 181, 253,",      // Soft lilac (Chamba purple accent)
      "rgba(167, 139, 250,",      // Violet accent
      "rgba(186, 230, 253,",      // Celestial cyan
    ];

    const sparkColors = [
      "#ffffff",
      "#c4b5fd",
      "#a78bfa",
      "#fef08a",
      "#93c5fd",
    ];

    // Responsive particle count
    const isMobile = width < 768;
    const count = isMobile ? 40 : 85;

    const particles: Particle[] = [];
    const sparks: Spark[] = [];

    // Initialize particles
    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const baseAlpha = 0.2 + Math.random() * 0.55;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.6 + 0.8, // Tiny stars
        alpha: baseAlpha,
        baseAlpha,
        twinkleSpeed: 0.015 + Math.random() * 0.03,
        twinklePhase: Math.random() * Math.PI * 2,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
      });
    }

    // Handle Window Resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Track mouse / pointer movement
    let lastSparkTime = 0;
    const handlePointerMove = (e: PointerEvent | MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovering = true;

      const now = performance.now();
      // Emit tiny stardust sparks when mouse moves (throttled ~30ms)
      if (now - lastSparkTime > 32 && sparks.length < 25) {
        lastSparkTime = now;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5 + 0.3;
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 1.8 + 0.8,
          alpha: 0.9,
          life: 0,
          maxLife: Math.floor(Math.random() * 25 + 20),
          color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
        });
      }
    };

    const handleMouseLeave = () => {
      mouse.targetX = -9999;
      mouse.targetY = -9999;
      mouse.isHovering = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.18;
      mouse.y += (mouse.targetY - mouse.y) * 0.18;

      // 1. Draw connecting constellation lines between nearby particles
      ctx.lineWidth = 0.55;
      const maxDistance = 95;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            // Brighten lines if near mouse
            const midX = (particles[i].x + particles[j].x) / 2;
            const midY = (particles[i].y + particles[j].y) / 2;
            const distToMouse = Math.hypot(midX - mouse.x, midY - mouse.y);
            const mouseBoost = distToMouse < mouse.radius ? (1 - distToMouse / mouse.radius) * 0.35 : 0;

            const lineAlpha = (1 - dist / maxDistance) * (0.12 + mouseBoost);
            if (lineAlpha > 0.02) {
              ctx.strokeStyle = `rgba(167, 139, 250, ${lineAlpha.toFixed(3)})`;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      // 2. Update & Draw Particles (Stars)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Idle drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries smoothly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Twinkle oscillation
        p.twinklePhase += p.twinkleSpeed;
        const twinkle = Math.sin(p.twinklePhase) * 0.25;
        let currentAlpha = Math.max(0.1, Math.min(1, p.baseAlpha + twinkle));

        // Mouse interaction (Repulsion / Gravitational push & pull)
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const force = 1 - dist / mouse.radius;
          // Scatter away smoothly ("alejándose")
          const pushFactor = force * 2.8;
          p.x += (dx / (dist || 1)) * pushFactor;
          p.y += (dy / (dist || 1)) * pushFactor;

          // Glow brighter when user hovers over stars
          currentAlpha = Math.min(1, currentAlpha + force * 0.55);

          // Draw small star halo glow near cursor
          const glowRadius = p.size * (2 + force * 3);
          const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
          glowGrad.addColorStop(0, `${p.color} ${(force * 0.5).toFixed(3)})`);
          glowGrad.addColorStop(1, `${p.color} 0)`);
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw star point
        ctx.fillStyle = `${p.color} ${currentAlpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Update & Draw Stardust Sparks (trailing from cursor)
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.96;
        s.vy *= 0.96;
        s.life++;

        const progress = s.life / s.maxLife;
        const sparkAlpha = Math.max(0, (1 - progress) * s.alpha);

        ctx.fillStyle = s.color;
        ctx.globalAlpha = sparkAlpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * (1 - progress * 0.5), 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;

        if (s.life >= s.maxLife) {
          sparks.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] select-none"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
}
