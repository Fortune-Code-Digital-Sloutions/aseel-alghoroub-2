"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

/**
 * العقل الحركي الوحيد للصفحة — Lenis smooth scroll + كل ربط GSAP بالسكرول.
 * كل السكاشن server components والحركة كلها attributes:
 * [data-reveal] / [data-reveal-group]>[data-reveal-item] / [data-parallax] / [data-count]
 */
export default function Animator() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    document.documentElement.classList.add("js-anim");

    const lenis = new Lenis({ lerp: 0.065, wheelMultiplier: 0.9, autoRaf: false });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // anchor links → smooth scroll (مع مواضع فصول الرحلة السينمائية)
    let journeyST: InstanceType<typeof ScrollTrigger> | null = null;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.("a[href^='#']");
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      if ((id === "#entrance" || id === "#life") && journeyST) {
        e.preventDefault();
        const frac = id === "#entrance" ? 0.4 : 0.78;
        lenis.scrollTo(
          journeyST.start + frac * (journeyST.end - journeyST.start),
          { duration: 1.8 }
        );
        return;
      }
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: 0, duration: 1.6 });
    };
    document.addEventListener("click", onClick);

    // header: glass after hero + hide on scroll down
    const header = document.getElementById("site-header");
    let lastY = 0;
    const onScroll = ({ scroll }: { scroll: number }) => {
      if (!header) return;
      header.classList.toggle("is-scrolled", scroll > 60);
      header.classList.toggle("is-hidden", scroll > 500 && scroll > lastY + 4);
      if (scroll < lastY - 4 || scroll <= 500) header.classList.remove("is-hidden");
      lastY = scroll;
    };
    lenis.on("scroll", onScroll);

    // journey rail active state (الرحلة السينمائية تُدار يدويًا داخل الـ pin)
    document.querySelectorAll<HTMLElement>("[data-section]").forEach((sec) => {
      if (sec.id === "hero") return;
      ScrollTrigger.create({
        trigger: sec,
        start: "top 55%",
        end: "bottom 55%",
        onToggle: (self) => {
          document
            .querySelectorAll(`[data-rail='${sec.id}']`)
            .forEach((r) => r.classList.toggle("is-active", self.isActive));
        },
      });
    });

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      /* ── hero: انترو التحميل، ثم pin — السكرول يفتح البوابة فريمًا فريمًا ── */
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          "[data-hero-bg]",
          { scale: 1.08, filter: "brightness(0.55)" },
          { scale: 1, filter: "brightness(1)", duration: 2.2, ease: "power2.out" },
          0
        )
        .fromTo(
          "[data-hero-item]",
          { y: 36, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.12 },
          0.45
        );

      /* ── الرحلة السينمائية الموحّدة: البوابة → التحليق → العائلة ── */
      const journey = document.getElementById("hero");
      if (journey) {
        const seg = (p: number, a: number, b: number) =>
          Math.min(1, Math.max(0, (p - a) / (b - a)));
        const setRail = (id: string, on: boolean) =>
          document
            .querySelectorAll(`[data-rail='${id}']`)
            .forEach((r) => r.classList.toggle("is-active", on));

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: journey,
            start: "top top",
            end: "+=520%",
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const p = self.progress;
              // السلاسل الثلاث تكمل بعضها
              window.__scrubs?.["01-gate"]?.(seg(p, 0, 0.32));
              window.__scrubs?.["02-rise"]?.(seg(p, 0.34, 0.66));
              window.__scrubs?.["03-family"]?.(seg(p, 0.68, 1));
              // محطات الرحلة الجانبية
              setRail("hero", self.isActive && p < 0.34);
              setRail("entrance", self.isActive && p >= 0.34 && p < 0.68);
              setRail("life", self.isActive && p >= 0.68);
            },
            onToggle: (self) => {
              if (!self.isActive)
                ["hero", "entrance", "life"].forEach((id) => setRail(id, false));
            },
          },
        });
        journeyST = tl.scrollTrigger ?? null;

        tl
          // الفصل 1 يخرج مبكرًا ليترك المشهد للبوابة
          .to(
            "[data-ch1]",
            { autoAlpha: 0, y: -40, duration: 0.08, ease: "power1.out" },
            0.04
          )
          // crossfade → التحليق + دخول نص الفصل 2 وخروجه
          .to("[data-seq-layer='02']", { opacity: 1, duration: 0.05 }, 0.31)
          .fromTo(
            "[data-ch2]",
            { autoAlpha: 0, y: 26 },
            { autoAlpha: 1, y: 0, duration: 0.06, ease: "power1.out" },
            0.37
          )
          .to(
            "[data-ch2]",
            { autoAlpha: 0, y: -26, duration: 0.06, ease: "power1.in" },
            0.58
          )
          // crossfade → العائلة + الفصل 3 يستقر حتى نهاية الرحلة
          .to("[data-seq-layer='03']", { opacity: 1, duration: 0.05 }, 0.65)
          .fromTo(
            "[data-ch3]",
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.08, ease: "power1.out" },
            0.84
          )
          // مثبّت مدة التايملاين = 1 حتى تطابق المواضع نسب التقدم
          .set({}, {}, 1);
      }

      /* ── generic reveals (خارج المشاهد المثبتة) ── */
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        if (el.closest("[data-pin-scene]")) return;
        gsap.fromTo(
          el,
          { y: 32, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1.05,
            ease: "power3.out",
            delay: parseFloat(el.dataset.delay || "0"),
            scrollTrigger: { trigger: el, start: "top 86%" },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        if (group.closest("[data-pin-scene]")) return;
        const items = group.querySelectorAll("[data-reveal-item]");
        if (!items.length) return;
        gsap.fromTo(
          items,
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: { trigger: group, start: "top 83%" },
          }
        );
      });

      /* ── parallax للخلفيات ── */
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "14");
        gsap.fromTo(
          el,
          { yPercent: -speed / 2 },
          {
            yPercent: speed / 2,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      /* ── العدادات ── */
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count || "0");
        const suffix = el.dataset.suffix || "";
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: "power1.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toLocaleString("en-US") + suffix;
          },
        });
      });
    });

    // reduced motion: أظهر كل شيء فورًا
    mm.add("(prefers-reduced-motion: reduce)", () => {
      document.documentElement.classList.remove("js-anim");
    });

    // إعادة قياس نهائية بعد تركيب الـ pins حتى تكون مواضع كل السكاشن دقيقة
    const refreshId = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(refreshId);
      document.removeEventListener("click", onClick);
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.ticker.remove(raf);
      lenis.destroy();
      document.documentElement.classList.remove("js-anim");
    };
  }, []);

  return null;
}
