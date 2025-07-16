import { useEffect, useRef } from "react";

interface ParticleBackgroundProps {
  theme?: "dark" | "light";
}

const ParticleBackground = ({ theme = "light" }: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    if (theme !== "dark") return; // Only render in Hero section
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    let color = "#888";
    let particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1 + Math.random() * 2,
      dx: -0.5 + Math.random(),
      dy: -0.5 + Math.random(),
      alpha: 0.5 + Math.random() * 0.5
    }));
    let animationId: number;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.globalAlpha = 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      // Draw particles and interact with mouse
      for (let p of particles) {
        // Interactivity: attract to mouse if close
        const distToMouse = Math.hypot(p.x - mouse.current.x, p.y - mouse.current.y);
        if (distToMouse < 120) {
          const angle = Math.atan2(mouse.current.y - p.y, mouse.current.x - p.x);
          p.x += Math.cos(angle) * 1.2;
          p.y += Math.sin(angle) * 1.2;
        }
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [theme]);

  if (theme !== "dark") return null;
  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1]"
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, pointerEvents: 'none' }}
    />
  );
};

export default ParticleBackground; 