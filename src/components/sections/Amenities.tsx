import { Trees, Baby, Footprints, Armchair, ShieldCheck, CarFront, ChevronLeft } from "lucide-react";
import { AMENITIES } from "@/lib/content";
import { Eyebrow, GoldButton, Scene } from "@/components/ui";

const LIST_ICONS = [Trees, Baby, Footprints, Armchair, ShieldCheck, CarFront];

export default function Amenities() {
  return (
    <Scene
      id="amenities"
      image={AMENITIES.image}
      imageAlt="مرافق وجهة الغروب"
      className="flex min-h-svh flex-col justify-between"
      overlay={
        <>
          <div className="absolute inset-0 -z-10 bg-green-900/45" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-900/95 via-green-900/40 to-green-900/15" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-green-900 to-transparent" />
        </>
      }
    >
      <div className="mx-auto grid w-full max-w-[1400px] flex-1 items-center gap-14 px-6 pt-36 lg:grid-cols-[1fr_360px] lg:px-14">
        {/* المحتوى — يمين */}
        <div className="order-1 flex max-w-xl flex-col items-start gap-7 lg:order-1">
          <Eyebrow num={AMENITIES.eyebrow.num} label={AMENITIES.eyebrow.label} />
          <h2 data-reveal className="font-display text-[clamp(2.3rem,4.8vw,3.6rem)] font-bold leading-[1.25] text-offwhite [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]">
            {AMENITIES.headline}
          </h2>
          <p data-reveal className="max-w-md font-body text-[17.5px] leading-[1.8] text-cream-dim">
            {AMENITIES.sub}
          </p>
          <div data-reveal>
            <GoldButton href="#masterplan">{AMENITIES.cta}</GoldButton>
          </div>
        </div>

        {/* قائمة المرافق — يسار */}
        <div data-reveal-group className="order-2 flex flex-col gap-3 lg:order-2">
          {AMENITIES.list.map((a, i) => {
            const Icon = LIST_ICONS[i];
            const active = i === 0;
            return (
              <button
                key={a.title}
                data-reveal-item
                className={`group flex items-center justify-between gap-3 rounded-xl border px-4.5 py-3.5 text-start transition-all duration-300 hover:-translate-x-1 ${
                  active
                    ? "border-gold-500/55 bg-green-800/85"
                    : "border-white/8 bg-green-900/60 hover:border-gold-500/35 hover:bg-green-800/60"
                }`}
              >
                <span className="flex items-center gap-3.5">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 ${
                      active ? "bg-gold-500/18" : "bg-white/6 group-hover:bg-gold-500/12"
                    }`}
                  >
                    <Icon size={18} className={active ? "text-gold-300" : "text-cream-dim"} />
                  </span>
                  <span className="flex flex-col leading-snug">
                    <span className="font-body text-[15px] font-semibold text-offwhite">{a.title}</span>
                    <span className="font-body text-[11.5px] text-[#9fb0a0]">{a.sub}</span>
                  </span>
                </span>
                <ChevronLeft
                  size={15}
                  className={`transition-all duration-300 group-hover:-translate-x-0.5 ${
                    active ? "text-gold-300" : "text-[#7e8f82]"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* شريط الأرقام الرسمية */}
      <div className="mx-auto w-full max-w-[1400px] px-6 pb-10 lg:px-14">
        <div data-reveal className="glass flex flex-wrap items-center justify-between gap-x-8 gap-y-6 rounded-2xl px-8 py-6 lg:px-10">
          {AMENITIES.stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-1">
                <span
                  className="num text-[clamp(1.9rem,3vw,2.6rem)] font-medium text-gold-300"
                  data-count={s.value}
                  data-suffix={s.suffix}
                >
                  0{s.suffix}
                </span>
                <span className="font-body text-[13px] font-medium text-cream-dim">{s.label}</span>
              </div>
              {i < AMENITIES.stats.length - 1 && (
                <span className="hidden h-12 w-px bg-white/10 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Scene>
  );
}
