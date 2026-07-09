"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    __scrubs?: Record<string, (progress: number) => void>;
  }
}

/** السقف الأقصى لسرعة تقدم الفريمات (فريم / ثانية) — يمنع القفز مهما كان السحب عنيفًا */
const PLAYBACK_FPS = 45;

/**
 * معامل الانسياب (الثريشولد بعد التوقف):
 * أقل = ذيل انسياب أطول بعد رفع اليد من السكرول، أعلى = توقف أسرع.
 * عند 4 تقريبًا: الفريمات تكمل الحركة ~نصف ثانية بعد توقف السكرول وتهدأ تدريجيًا.
 */
const GLIDE = 4;

/**
 * سلسلة فريمات سينمائية بسرعة ثابتة:
 * - السكرول يحدد "الهدف" فقط، وplayhead داخلي يتقدم نحوه بسرعة ثابتة (PLAYBACK_FPS).
 * - يمر على كل فريم بالترتيب — لا يتخطى فريمًا أبدًا، ولا يتجاوز آخر فريم مكتمل التحميل.
 * - فك تشفير مسبق عبر ImageBitmap لرسم بدون أي تقطيع.
 */
export default function FrameScrub({
  name,
  count,
  priority = false,
  speed = PLAYBACK_FPS,
  className = "",
}: {
  name: string;
  count: number;
  priority?: boolean;
  speed?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frames: (ImageBitmap | HTMLImageElement | undefined)[] =
      new Array(count);
    let loadedUpTo = -1; // أعلى فريم كل ما قبله محمّل — سقف الـ playhead
    let target = 0; // الهدف من السكرول (index عشري)
    let current = 0; // موضع الـ playhead الفعلي
    let lastDrawn = -1;
    let synced = false;
    let started = false;
    let disposed = false;
    let raf = 0;
    let lastT = 0;

    const src = (i: number) =>
      `/frames/${name}/f_${String(i).padStart(3, "0")}.webp`;

    const draw = (i: number) => {
      const img = frames[i];
      if (!img) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = "naturalWidth" in img ? img.naturalWidth : img.width;
      const ih = "naturalHeight" in img ? img.naturalHeight : img.height;
      if (!iw || !ih) return;
      const s = Math.max(cw / iw, ch / ih); // object-cover
      const dw = iw * s;
      const dh = ih * s;
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
      lastDrawn = i;
    };

    const advanceLoaded = () => {
      while (loadedUpTo + 1 < count && frames[loadedUpTo + 1]) loadedUpTo++;
    };

    const loadFrame = async (i: number) => {
      try {
        if (typeof createImageBitmap === "function") {
          const res = await fetch(src(i));
          const blob = await res.blob();
          frames[i] = await createImageBitmap(blob);
        } else {
          const img = new Image();
          img.src = src(i);
          await img.decode();
          frames[i] = img;
        }
      } catch {
        /* فريم فاشل: يُتجاوز — الـ playhead سيقف عنده كحد أقصى */
      }
      if (disposed) return;
      advanceLoaded();
      if (lastDrawn < 0 && i === 0) draw(0);
    };

    const load = () => {
      if (started || disposed) return;
      started = true;
      for (let i = 0; i < count; i++) loadFrame(i);
    };

    // قلب المحرك: انسياب أسّي (يكمل بعد توقف السكرول ويهدأ تدريجيًا) + سقف سرعة ثابت
    const tick = (t: number) => {
      if (disposed) return;
      const dt = lastT ? Math.min(0.1, (t - lastT) / 1000) : 0;
      lastT = t;
      const cap = loadedUpTo < 0 ? 0 : loadedUpTo;
      const goal = Math.min(target, cap);
      const delta = goal - current;
      if (Math.abs(delta) > 0.001 && dt > 0) {
        // خطوة الانسياب (ease-out) — لا تتوقف فجأة مع توقف السكرول
        let step = delta * (1 - Math.exp(-GLIDE * dt));
        // سقف السرعة الثابت — يمنع تخطي الفريمات مهما كانت القفزة
        const maxStep = speed * dt;
        if (Math.abs(step) > maxStep) step = Math.sign(step) * maxStep;
        // قرب الاستقرار: أنهِ الوصول بدل الاهتزاز حول الهدف
        if (Math.abs(delta) < 0.05) step = delta;
        current += step;
        const idx = Math.round(current);
        if (idx !== lastDrawn) draw(idx);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
      if (lastDrawn >= 0) draw(lastDrawn);
      else if (frames[0]) draw(0);
    };

    window.__scrubs = window.__scrubs || {};
    window.__scrubs[name] = (p: number) => {
      target = Math.max(0, Math.min(count - 1, p * (count - 1)));
      // أول مزامنة (فتح الصفحة في منتصف السكرول): snap بدون إعادة تشغيل
      if (!synced) {
        current = Math.min(target, Math.max(0, loadedUpTo));
        synced = true;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    let io: IntersectionObserver | undefined;
    if (priority) {
      load();
    } else {
      io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            load();
            io?.disconnect();
          }
        },
        { rootMargin: "150% 0px" }
      );
      io.observe(canvas);
    }

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      io?.disconnect();
      delete window.__scrubs?.[name];
      frames.forEach((f) => {
        if (f && "close" in f) (f as ImageBitmap).close();
      });
    };
  }, [name, count, priority, speed]);

  return <canvas ref={canvasRef} className={className} />;
}
