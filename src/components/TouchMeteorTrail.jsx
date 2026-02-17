import React, { useEffect, useRef } from "react";

const TouchMeteorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const state = {
      isDark: document.documentElement.classList.contains("dark"),
      activeTouchId: null,
      head: null,
      lastPoint: null,
      trail: [],
      sparkles: [],
      sparkleAt: 0,
      rafId: 0,
      isRunning: false,
    };

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const pushTrailPoint = (x, y, life = 1) => {
      state.trail.push({ x, y, life });
      if (state.trail.length > 40) state.trail.splice(0, state.trail.length - 40);
    };

    const pushInterpolated = (x, y) => {
      const last = state.lastPoint;
      if (!last) {
        state.lastPoint = { x, y };
        state.head = { x, y };
        pushTrailPoint(x, y);
        return;
      }

      const dx = x - last.x;
      const dy = y - last.y;
      const distance = Math.hypot(dx, dy);
      const steps = Math.min(5, Math.max(1, Math.floor(distance / 10)));
      for (let i = 1; i <= steps; i += 1) {
        const t = i / steps;
        pushTrailPoint(last.x + dx * t, last.y + dy * t);
      }
      state.lastPoint = { x, y };
      state.head = { x, y };
    };

    const startLoop = () => {
      if (!state.isRunning) {
        state.isRunning = true;
        draw();
      }
    };

    const addSparkle = (x, y) => {
      const now = performance.now();
      if (now - state.sparkleAt < 16) return;
      state.sparkleAt = now;
      state.sparkles.push({
        x: x + (Math.random() - 0.5) * 24,
        y: y + (Math.random() - 0.5) * 24,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: 1 + Math.random() * 3,
        life: 1,
      });
      if (state.sparkles.length > 80) state.sparkles.splice(0, state.sparkles.length - 80);
    };

    const onTouchStart = (event) => {
      if (!state.isDark) return;
      if (!event.changedTouches || event.changedTouches.length === 0) return;
      const touch = event.changedTouches[0];
      state.activeTouchId = touch.identifier;
      state.lastPoint = { x: touch.clientX, y: touch.clientY };
      state.head = { x: touch.clientX, y: touch.clientY };
      pushTrailPoint(touch.clientX, touch.clientY);
      startLoop();
    };

    const onTouchMove = (event) => {
      if (!state.isDark) return;
      if (state.activeTouchId == null) return;
      const touch = Array.from(event.touches).find((t) => t.identifier === state.activeTouchId);
      if (!touch) return;
      pushInterpolated(touch.clientX, touch.clientY);
      addSparkle(touch.clientX, touch.clientY);
    };

    const onTouchEnd = (event) => {
      if (state.activeTouchId == null) return;
      const ended = Array.from(event.changedTouches).some((t) => t.identifier === state.activeTouchId);
      if (!ended) return;
      state.activeTouchId = null;
      state.lastPoint = null;
      state.head = null;
    };

    const classObserver = new MutationObserver(() => {
      state.isDark = document.documentElement.classList.contains("dark");
      if (!state.isDark) {
        state.activeTouchId = null;
        state.head = null;
        state.lastPoint = null;
        state.trail = [];
        state.sparkles = [];
      }
    });
    classObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (state.isDark) {
        ctx.globalCompositeOperation = "lighter";
        for (let i = 0; i < state.trail.length; i += 1) {
          const p = state.trail[i];
          p.life -= 0.04;
          if (p.life <= 0) continue;
          const t = i / Math.max(1, state.trail.length - 1);
          const radius = 1 + t * 6;
          const alpha = p.life * (0.2 + t * 0.6);

          ctx.fillStyle = `rgba(255, ${Math.floor(220 + t * 35)}, ${Math.floor(180 + t * 75)}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius * 2, 0, Math.PI * 2);
          ctx.fill();
        }
        state.trail = state.trail.filter((p) => p.life > 0);

        for (let i = 0; i < state.sparkles.length; i += 1) {
          const s = state.sparkles[i];
          s.x += s.vx;
          s.y += s.vy;
          s.life -= 0.04;
          if (s.life <= 0) continue;
          const alpha = s.life * (0.5 + Math.random() * 0.5);
          ctx.fillStyle = `rgba(255, 255, ${200 + Math.random() * 55}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();
        }
        state.sparkles = state.sparkles.filter((s) => s.life > 0);

        if (state.head) {
          const { x, y } = state.head;
          const rg = ctx.createRadialGradient(x, y, 1, x, y, 25);
          rg.addColorStop(0, "rgba(255,255,255,1)");
          rg.addColorStop(0.3, "rgba(255,240,150,0.8)");
          rg.addColorStop(0.6, "rgba(125,211,252,0.4)");
          rg.addColorStop(1, "rgba(125,211,252,0)");
          ctx.fillStyle = rg;
          ctx.beginPath();
          ctx.arc(x, y, 25, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalCompositeOperation = "source-over";
      }

      if (state.isDark && (state.trail.length > 0 || state.sparkles.length > 0 || state.activeTouchId !== null)) {
        state.rafId = requestAnimationFrame(draw);
      } else {
        state.isRunning = false;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(state.rafId);
      classObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  return <canvas ref={canvasRef} className="touch-meteor-canvas" aria-hidden="true" />;
};

export default TouchMeteorTrail;
