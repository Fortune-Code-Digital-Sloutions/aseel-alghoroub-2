import { Navigation, Download } from "lucide-react";
import { MASTERPLAN } from "@/lib/content";
import { Eyebrow, GoldButton, GhostButton } from "@/components/ui";

export default function MasterPlan() {
  return (
    <section id="masterplan" data-section className="relative isolate overflow-hidden bg-green-900 py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(18,57,31,0.9),transparent_65%)]" />

      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-[1.2fr_1fr] lg:px-14">
        {/* الخريطة — يسار */}
        <div data-reveal className="order-2 lg:order-2">
          <div className="group relative overflow-hidden rounded-3xl border border-gold-500/25 bg-green-800">
            <img
              src={MASTERPLAN.image}
              alt="المخطط العام للمرحلة الثانية"
              className="aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-green-900/15" />
            {/* بوصلة */}
            <span className="absolute top-5 end-5 flex h-12 w-12 flex-col items-center justify-center gap-0.5 rounded-full border border-gold-500/40 bg-green-900/75 backdrop-blur-sm">
              <Navigation size={14} className="text-gold-300" />
              <span className="num text-[9px] font-semibold text-offwhite">N</span>
            </span>
            {/* دبابيس */}
            {[
              { label: "المداخل", pos: "top-[30%] start-[32%]" },
              { label: "سكني", pos: "top-[52%] start-[56%]" },
              { label: "حديقة", pos: "top-[64%] start-[24%]" },
            ].map((p) => (
              <span
                key={p.label}
                className={`absolute ${p.pos} flex items-center gap-1.5 rounded-full border border-gold-500/45 bg-green-900/90 px-3 py-1.5 backdrop-blur-sm transition-transform duration-300 hover:scale-110`}
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-500" />
                <span className="font-body text-[11.5px] font-medium text-offwhite">{p.label}</span>
              </span>
            ))}
            {/* zone selector */}
            <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-center gap-2">
              {MASTERPLAN.zones.map((z, i) => (
                <span
                  key={z}
                  className={`cursor-pointer rounded-full px-4 py-2 font-body text-[12.5px] font-semibold transition-all duration-300 ${
                    i === 0
                      ? "bg-gold-500 text-green-900"
                      : "border border-white/15 bg-green-900/75 text-cream-dim backdrop-blur-sm hover:border-gold-500/50 hover:text-offwhite"
                  }`}
                >
                  {z}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* المحتوى — يمين */}
        <div className="order-1 flex flex-col items-start gap-7 lg:order-1">
          <Eyebrow num={MASTERPLAN.eyebrow.num} label={MASTERPLAN.eyebrow.label} />
          <h2 data-reveal className="font-display text-[clamp(2.2rem,4.2vw,3.3rem)] font-bold leading-[1.28] text-offwhite">
            {MASTERPLAN.headline}
          </h2>
          <p data-reveal className="max-w-md font-body text-[17px] leading-[1.8] text-cream-dim">
            {MASTERPLAN.sub}
          </p>

          {/* إحصائيات */}
          <div data-reveal-group className="grid w-full max-w-md grid-cols-2 gap-3.5">
            {MASTERPLAN.stats.map((s) => (
              <div
                key={s.label}
                data-reveal-item
                className="flex flex-col items-start gap-1 rounded-2xl border border-white/8 bg-green-800/50 px-5 py-4.5 transition-colors duration-300 hover:border-gold-500/35"
              >
                <span className="num text-[clamp(1.7rem,2.6vw,2.1rem)] font-medium text-gold-300">{s.value}</span>
                <span className="font-body text-[13px] font-medium text-cream-dim">{s.label}</span>
              </div>
            ))}
          </div>

          <div data-reveal className="flex flex-wrap gap-3.5">
            <GoldButton href="#units">{MASTERPLAN.ctaPrimary}</GoldButton>
            <a
              href="#"
              className="group inline-flex items-center gap-2.5 rounded-md border border-gold-600/70 px-6 py-[15px] font-display text-[15px] font-medium text-gold-300 transition-all duration-300 hover:border-gold-300 hover:bg-gold-500/10"
            >
              <Download size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              {MASTERPLAN.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
