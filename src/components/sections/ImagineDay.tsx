import { Sun, Footprints, Moon } from "lucide-react";
import { IMAGINE } from "@/lib/content";
import { Eyebrow, GhostButton } from "@/components/ui";

const MINI_ICONS = [Sun, Footprints, Moon];

export default function ImagineDay() {
  return (
    <section id="imagine" data-section className="relative isolate overflow-hidden bg-green-900 py-28 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-[1fr_1.05fr] lg:px-14">
        {/* المحتوى — يمين */}
        <div className="order-1 flex flex-col items-start gap-7">
          <Eyebrow num={IMAGINE.eyebrow.num} label={IMAGINE.eyebrow.label} />
          <h2 data-reveal className="font-display text-[clamp(2.2rem,4.4vw,3.4rem)] font-bold leading-[1.28] text-offwhite">
            {IMAGINE.headline}
          </h2>
          <p data-reveal className="max-w-md font-body text-[17.5px] leading-[1.8] text-cream-dim">
            {IMAGINE.sub}
          </p>
          <div data-reveal className="flex items-center gap-6">
            {IMAGINE.mini.map((m, i) => {
              const Icon = MINI_ICONS[i];
              return (
                <span key={m} className="flex items-center gap-2">
                  <Icon size={16} className="text-gold-300" />
                  <span className="font-body text-[14px] font-medium text-cream-dim">{m}</span>
                </span>
              );
            })}
          </div>
          <div data-reveal>
            <GhostButton href="#daily">{IMAGINE.cta}</GhostButton>
          </div>
        </div>

        {/* الكولاج — شبكة 2×2 بإزاحة عمودية */}
        <div data-reveal-group className="order-2 grid grid-cols-2 gap-4">
          {IMAGINE.collage.map((c, i) => (
            <figure
              key={c.label}
              data-reveal-item
              className={`brackets group relative aspect-[6/5] overflow-hidden rounded-2xl border border-white/8 ${
                i % 2 === 1 ? "translate-y-8" : ""
              }`}
            >
              <img
                src={c.image}
                alt={c.label}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/10 to-transparent" />
              <figcaption className="absolute bottom-4 start-5 font-body text-[14.5px] font-semibold text-offwhite">
                {c.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
