import { BadgeCheck, CircleCheckBig, House, HeartHandshake } from "lucide-react";
import { TRUST } from "@/lib/content";
import { Eyebrow, GoldButton, Scene } from "@/components/ui";

const CARD_ICONS = [CircleCheckBig, House, HeartHandshake];

export default function Trust() {
  return (
    <Scene
      id="trust"
      image="/media/aerial-night.jpg"
      imageAlt="أصيل الغروب ليلاً"
      className="py-28 lg:py-32"
      overlay={<div className="absolute inset-0 -z-10 bg-green-900/85" />}
    >
      <div className="mx-auto grid w-full max-w-[1400px] items-start gap-12 px-6 lg:grid-cols-[1fr_1.05fr] lg:px-14">
        {/* الصورة + الجاليري — يسار */}
        <div className="order-2 flex flex-col gap-4 lg:order-2">
          <figure data-reveal className="brackets group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <img
              src={TRUST.image}
              alt="المرحلة الأولى من أصيل الغروب"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/85 via-transparent to-transparent" />
            <figcaption className="absolute bottom-5 start-5 inline-flex items-center gap-2.5 rounded-full border border-gold-500/40 bg-green-900/85 px-4.5 py-2.5 backdrop-blur-sm">
              <BadgeCheck size={17} className="text-gold-300" />
              <span className="font-body text-[13.5px] font-semibold text-offwhite">{TRUST.badge}</span>
            </figcaption>
          </figure>
          <div data-reveal-group className="grid grid-cols-4 gap-3.5">
            {TRUST.gallery.map((g, i) => (
              <div key={i} data-reveal-item className="relative aspect-[3/2] overflow-hidden rounded-xl border border-white/8">
                <img src={g} alt="" className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.08]" />
              </div>
            ))}
          </div>
        </div>

        {/* بانل الثقة — يمين */}
        <div data-reveal className="glass order-1 flex flex-col gap-6 rounded-3xl p-8 lg:order-1 lg:p-10">
          <Eyebrow num={TRUST.eyebrow.num} label={TRUST.eyebrow.label} />
          <h2 className="font-display text-[clamp(1.9rem,3.2vw,2.5rem)] font-bold leading-[1.32] text-offwhite">
            {TRUST.headline}
          </h2>
          <p className="font-body text-[16px] leading-[1.8] text-cream-dim">{TRUST.sub}</p>

          {/* كروت */}
          <div data-reveal-group className="grid grid-cols-3 gap-3">
            {TRUST.cards.map((c, i) => {
              const Icon = CARD_ICONS[i];
              return (
                <div key={c.title} data-reveal-item className="flex flex-col gap-2 rounded-xl border border-white/8 bg-green-800/50 p-4">
                  <Icon size={21} className="text-gold-300" />
                  <span className="font-body text-[14.5px] font-bold text-offwhite">{c.title}</span>
                  <span className="font-body text-[11.5px] text-[#9fb0a0]">{c.sub}</span>
                </div>
              );
            })}
          </div>

          {/* الضمانات */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {TRUST.warranty.map((w) => (
              <div key={w.title} className="flex items-center justify-between gap-3 rounded-xl border border-gold-500/30 bg-green-900/70 p-4">
                <span className="flex flex-col leading-snug">
                  <span className="font-body text-[14px] font-bold text-offwhite">{w.title}</span>
                  <span className="font-body text-[11px] text-[#9fb0a0]">{w.sub}</span>
                </span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/45 bg-gold-500/12">
                  <span className="num text-[16px] font-semibold text-gold-300">{w.years}</span>
                </span>
              </div>
            ))}
          </div>

          {/* أختام الثقة */}
          <div className="flex flex-wrap gap-2.5">
            {TRUST.badges.map((b) => (
              <span key={b} className="rounded-lg border border-white/10 bg-white/4 px-3.5 py-2 font-body text-[12.5px] font-medium text-cream-dim">
                {b}
              </span>
            ))}
          </div>

          <div>
            <GoldButton href="#masterplan">{TRUST.cta}</GoldButton>
          </div>
        </div>
      </div>
    </Scene>
  );
}
