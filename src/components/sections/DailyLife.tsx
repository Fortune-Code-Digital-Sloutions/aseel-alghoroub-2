import { Play, ShieldCheck, Leaf, UsersRound, Scale } from "lucide-react";
import { DAILY } from "@/lib/content";
import { Eyebrow, GoldButton } from "@/components/ui";

const FEATURE_ICONS = [ShieldCheck, Leaf, UsersRound, Scale];

export default function DailyLife() {
  return (
    <section id="daily" data-section className="relative isolate overflow-hidden bg-green-850 py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(27,77,46,0.5),transparent_60%)]" />

      <div className="mx-auto grid w-full max-w-[1400px] items-start gap-14 px-6 lg:grid-cols-[1.15fr_1fr] lg:px-14">
        {/* مشغل الفيديو الرئيسي + الثامبنيلز — يسار بصريًا (ثاني في RTL) */}
        <div className="order-2 flex flex-col gap-4 lg:order-2">
          <div
            data-reveal
            className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-green-800"
          >
            <img
              src={DAILY.video.poster}
              alt="الحياة داخل أصيل الغروب"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-green-900/35" />
            {/* زر تشغيل */}
            <button
              aria-label="تشغيل الفيديو"
              className="absolute left-1/2 top-1/2 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold-300/60 bg-green-900/70 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-green-900/90"
            >
              <Play size={26} className="text-offwhite" fill="currentColor" />
            </button>
            {/* شريط تقدم شكلي */}
            <div className="absolute inset-x-6 bottom-5 flex items-center gap-3">
              <span className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/25">
                <span className="block h-full w-1/3 rounded-full bg-gold-500" />
              </span>
              <span className="num text-[11.5px] text-offwhite/90">00:04 / 00:12</span>
            </div>
          </div>

          {/* thumbnails */}
          <div data-reveal-group className="grid grid-cols-4 gap-3.5">
            {DAILY.thumbs.map((t) => (
              <figure
                key={t.label}
                data-reveal-item
                className="group relative aspect-[3/2] cursor-pointer overflow-hidden rounded-xl border border-white/8"
              >
                <img
                  src={t.image}
                  alt={t.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-green-900/45 transition-colors duration-300 group-hover:bg-green-900/20" />
                <Play size={13} className="absolute top-2.5 start-3 text-offwhite" />
                <figcaption className="absolute bottom-2 start-3 font-body text-[11.5px] font-medium text-offwhite">
                  {t.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* المحتوى — يمين */}
        <div className="order-1 flex flex-col items-start gap-7 lg:order-1 lg:pt-4">
          <Eyebrow num={DAILY.eyebrow.num} label={DAILY.eyebrow.label} />
          <h2 data-reveal className="font-display text-[clamp(2rem,3.8vw,2.9rem)] font-bold leading-[1.3] text-offwhite">
            {DAILY.headline}
          </h2>
          <p data-reveal className="max-w-md font-body text-[17px] leading-[1.8] text-cream-dim">
            {DAILY.sub}
          </p>

          <div data-reveal-group className="grid w-full max-w-md grid-cols-2 gap-x-6 gap-y-5">
            {DAILY.features.map((f, i) => {
              const Icon = FEATURE_ICONS[i];
              return (
                <div key={f.title} data-reveal-item className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/12">
                    <Icon size={17} className="text-gold-300" />
                  </span>
                  <span className="flex flex-col leading-snug">
                    <span className="font-body text-[14px] font-semibold text-offwhite">{f.title}</span>
                    <span className="font-body text-[11.5px] text-[#9fb0a0]">{f.sub}</span>
                  </span>
                </div>
              );
            })}
          </div>

          <div data-reveal>
            <GoldButton href="#amenities">{DAILY.cta}</GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
}
