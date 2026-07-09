import {
  Waves, Orbit, Clapperboard,
  Users, HeartHandshake, ShieldCheck, Trees, Footprints, UsersRound, Landmark,
} from "lucide-react";
import { HERO, ENTRANCE, LIFE } from "@/lib/content";
import { Eyebrow, GoldButton } from "@/components/ui";
import FrameScrub from "@/components/FrameScrub";

const TECH_ICONS = [Waves, Orbit, Clapperboard];
const PILL_ICONS = [ShieldCheck, HeartHandshake, Users];
const STRIP_ICONS = [Trees, Footprints, UsersRound, Landmark];

/**
 * المشهد السينمائي الموحّد — ثلاث سلاسل فريمات تكمل بعضها في pin واحد:
 * البوابة تتفتح → تحليق فوق المخطط → نزول على العائلة.
 * النصوص (3 فصول) تتبدل crossfade في مكانها — الـ Animator يقود كل شيء.
 */
export default function CinematicJourney() {
  return (
    <section
      id="hero"
      data-section
      data-pin-scene
      className="relative isolate h-svh overflow-hidden bg-green-900"
    >
      {/* ── طبقات الميديا الثلاث ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div data-hero-bg className="relative h-full w-full">
          <img
            src={HERO.image}
            alt="بوابة أصيل الغروب"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <FrameScrub
            name="01-gate"
            count={61}
            priority
            className="absolute inset-0 h-full w-full"
          />
          <div data-seq-layer="02" className="absolute inset-0 opacity-0">
            <FrameScrub
              name="02-rise"
              count={61}
              priority
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <div data-seq-layer="03" className="absolute inset-0 opacity-0">
            <FrameScrub
              name="03-family"
              count={61}
              priority
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>

      {/* ── الأوفرلاي السينمائي (مطابق لتدرج Figma) ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,31,18,0.8) 0%, rgba(10,31,18,0.63) 15%, rgba(10,31,18,0.19) 30%, rgba(10,31,18,0.48) 53%, rgba(10,31,18,0.95) 100%)",
        }}
      />

      {/* ════ الفصل 1 — افتح باب حياتك القادمة ════ */}
      <div data-ch1 className="absolute inset-0 flex flex-col">
        <div className="mx-auto flex w-full max-w-[752px] flex-1 translate-y-10 flex-col items-center justify-center gap-10 px-6 text-center">
          <div className="flex w-full flex-col items-center gap-6">
            <div
              data-hero-item
              className="inline-flex items-center gap-[13px] rounded-[80px] bg-green-850/60 p-4 backdrop-blur-sm"
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-gold-500" />
              <span className="font-body text-[16px] font-medium leading-[1.35] text-[#ffdb8c]">
                {HERO.badge}
              </span>
            </div>

            <div className="flex w-full flex-col items-center gap-4">
              <h1
                data-hero-item
                className="w-full font-display text-[clamp(2.2rem,4.9vw,3.625rem)] font-bold leading-[1.35] text-white [text-shadow:0_2px_40px_rgba(0,0,0,0.45)] lg:whitespace-nowrap"
              >
                {HERO.headline}
              </h1>
              <p
                data-hero-item
                className="w-full font-body text-[18px] leading-[1.7] text-cream-dim [text-shadow:0_1px_18px_rgba(0,0,0,0.5)]"
              >
                {HERO.sub}
              </p>
            </div>
          </div>

          <div data-hero-item className="flex items-center gap-3">
            <a
              href="#contact"
              className="flex h-[60px] items-center justify-center bg-gold-500 px-[30px] font-display text-[17px] font-bold text-green-900 transition-colors duration-300 hover:bg-gold-300"
            >
              {HERO.ctaPrimary}
            </a>
            <a
              href="#imagine"
              className="flex h-[60px] items-center justify-center border-[0.7px] border-gold-300/50 px-[30px] font-display text-[16px] font-bold text-gold-300 transition-colors duration-300 hover:bg-gold-500/10"
            >
              {HERO.ctaSecondary}
            </a>
          </div>
        </div>

        {/* مؤشر السكرول */}
        <div
          data-hero-item
          className="absolute bottom-[31px] left-1/2 z-10 flex w-[120px] -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="font-body text-[13px] tracking-[0.5px] text-[#c9c3b4]">
            {HERO.scrollHint}
          </span>
          <span className="h-[26px] w-px bg-gold-500/55" />
        </div>
      </div>

      {/* ════ الفصل 2 — الدخول / التحليق فوق المشروع ════ */}
      <div data-ch2 className="absolute inset-0 opacity-0">
        <div className="mx-auto flex h-full w-full max-w-[1400px] flex-col items-start justify-center gap-6 px-6 lg:px-14">
          <Eyebrow still num={ENTRANCE.eyebrow.num} label={ENTRANCE.eyebrow.label} />
          <h2 className="max-w-xl font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-bold leading-[1.25] text-offwhite [text-shadow:0_2px_30px_rgba(0,0,0,0.55)]">
            {ENTRANCE.headline}
          </h2>
          <p className="max-w-md font-body text-[17px] leading-[1.75] text-cream-dim [text-shadow:0_1px_16px_rgba(0,0,0,0.55)]">
            {ENTRANCE.sub}
          </p>
        </div>

        {/* callouts تقنية */}
        <div className="absolute bottom-16 end-6 hidden flex-col gap-4 lg:end-14 lg:flex">
          {ENTRANCE.tech.map((t, i) => {
            const Icon = TECH_ICONS[i];
            return (
              <div key={t.en} className="flex items-center gap-3.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/30 bg-green-900/50 backdrop-blur-sm">
                  <Icon size={16} className="text-gold-300" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-body text-[13.5px] font-semibold text-offwhite">
                    {t.ar}
                  </span>
                  <span className="num text-[10.5px] tracking-[0.14em] text-[#9fb0a0]">
                    {t.en}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ════ الفصل 3 — هنا تبدأ الحياة ════ */}
      <div data-ch3 className="absolute inset-0 flex flex-col justify-between opacity-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-green-900/80 via-green-900/25 to-transparent" />
        <div className="relative mx-auto grid w-full max-w-[1400px] flex-1 items-center px-6 pt-32 lg:px-14">
          <div className="flex max-w-xl flex-col items-start gap-6 justify-self-start">
            <Eyebrow still num={LIFE.eyebrow.num} label={LIFE.eyebrow.label} />
            <h2 className="font-display text-[clamp(2rem,4.2vw,3.2rem)] font-bold leading-[1.28] text-offwhite [text-shadow:0_2px_30px_rgba(0,0,0,0.5)]">
              {LIFE.headline}
            </h2>
            <p className="max-w-lg font-body text-[17px] leading-[1.8] text-cream-dim [text-shadow:0_1px_16px_rgba(0,0,0,0.5)]">
              {LIFE.sub}
            </p>

            <div className="flex gap-3.5">
              {LIFE.pills.map((p, i) => {
                const Icon = PILL_ICONS[i];
                return (
                  <div
                    key={p}
                    className="flex flex-col items-center gap-2.5 rounded-2xl border border-gold-500/25 bg-green-900/60 px-6 py-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/60"
                  >
                    <Icon size={22} className="text-gold-300" />
                    <span className="font-body text-[15px] font-semibold text-offwhite">
                      {p}
                    </span>
                  </div>
                );
              })}
            </div>

            <GoldButton href="#imagine">{LIFE.cta}</GoldButton>
          </div>
        </div>

        {/* شريط المميزات السفلي */}
        <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-8 lg:px-14">
          <div className="glass grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl px-7 py-5 lg:grid-cols-4">
            {LIFE.strip.map((f, i) => {
              const Icon = STRIP_ICONS[i];
              return (
                <div key={f.title} className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/12">
                    <Icon size={18} className="text-gold-300" />
                  </span>
                  <span className="flex flex-col leading-snug">
                    <span className="font-body text-[14.5px] font-semibold text-offwhite">
                      {f.title}
                    </span>
                    <span className="font-body text-[12px] text-[#9fb0a0]">
                      {f.sub}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
