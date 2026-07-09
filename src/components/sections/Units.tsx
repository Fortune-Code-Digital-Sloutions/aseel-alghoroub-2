import { BedDouble, Layers, ArrowLeft, Download, Headset } from "lucide-react";
import { UNITS } from "@/lib/content";
import { Eyebrow, GoldButton } from "@/components/ui";

export default function Units() {
  return (
    <section id="units" data-section className="relative isolate overflow-hidden bg-green-850 pb-24 pt-28 lg:pt-32">
      {/* باند علوي بصورة الشارع */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] overflow-hidden">
        <img src="/media/villa-street.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-850" />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-14">
        {/* الهيدر */}
        <div className="flex flex-col-reverse items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="flex flex-col gap-4" data-reveal>
            <div className="flex gap-2.5">
              {UNITS.filters.map((f, i) => (
                <button
                  key={f}
                  className={`rounded-full px-4.5 py-2 font-body text-[13px] font-semibold transition-all duration-300 ${
                    i === 0
                      ? "bg-gold-500 text-green-900"
                      : "border border-white/15 bg-green-900/60 text-cream-dim hover:border-gold-500/50 hover:text-offwhite"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <a href="#" className="group inline-flex items-center gap-2 font-body text-[14px] font-medium text-cream-dim transition-colors hover:text-gold-300">
              <Download size={15} className="text-gold-300" />
              {UNITS.catalog}
            </a>
          </div>

          <div className="flex max-w-2xl flex-col items-start gap-5">
            <Eyebrow num={UNITS.eyebrow.num} label={UNITS.eyebrow.label} />
            <h2 data-reveal className="font-display text-[clamp(2.2rem,4.2vw,3.2rem)] font-bold leading-[1.25] text-offwhite [text-shadow:0_2px_26px_rgba(0,0,0,0.5)]">
              {UNITS.headline}
            </h2>
            <p data-reveal className="font-body text-[16.5px] leading-[1.75] text-cream-dim">
              {UNITS.sub}
            </p>
          </div>
        </div>

        {/* الكروت */}
        <div data-reveal-group className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {UNITS.cards.map((u) => (
            <article
              key={u.name}
              data-reveal-item
              className="group overflow-hidden rounded-2xl border border-white/10 bg-green-800 transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/45 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)]"
            >
              <div className="relative aspect-[8/5] overflow-hidden">
                <img
                  src={u.image}
                  alt={u.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent" />
                <span className="absolute top-4 start-4 rounded-full bg-gold-500 px-3.5 py-1.5">
                  <span className="num text-[12.5px] font-semibold text-green-900">{u.area} م²</span>
                </span>
              </div>

              <div className="flex flex-col gap-3.5 p-5">
                <h3 className="font-display text-[22px] font-bold text-offwhite">{u.name}</h3>
                <div className="flex items-center gap-5">
                  <span className="flex items-center gap-1.5 font-body text-[13px] font-medium text-cream-dim">
                    <BedDouble size={15} className="text-gold-300" />
                    {u.beds}
                  </span>
                  <span className="flex items-center gap-1.5 font-body text-[13px] font-medium text-cream-dim">
                    <Layers size={15} className="text-gold-300" />
                    {u.floors}
                  </span>
                </div>
                <p className="font-body text-[13px] leading-[1.7] text-[#9fb0a0]">{u.desc}</p>
                <div className="mt-1 h-px w-full bg-white/8" />
                <div className="flex items-center justify-between">
                  <a href="#contact" className="group/link inline-flex items-center gap-1.5 font-body text-[14px] font-semibold text-gold-300 transition-colors hover:text-gold-500">
                    اطلب التفاصيل
                    <ArrowLeft size={14} className="transition-transform duration-300 group-hover/link:-translate-x-1" />
                  </a>
                  <span className="font-body text-[10.5px] text-[#6e7f72]">{UNITS.disclaimer}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTAs */}
        <div data-reveal className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <GoldButton href="#contact">{UNITS.ctaPrimary}</GoldButton>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-md border border-gold-600/70 px-7 py-[15px] font-display text-[15px] font-medium text-gold-300 transition-all duration-300 hover:border-gold-300 hover:bg-gold-500/10"
          >
            <Headset size={16} />
            {UNITS.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
