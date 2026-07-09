import { MapPin, ShieldCheck, CircleCheckBig, BadgeCheck, LayoutGrid, TrendingUp } from "lucide-react";
import { WHY } from "@/lib/content";
import { Eyebrow, Scene } from "@/components/ui";

const VALUE_ICONS = [MapPin, ShieldCheck, CircleCheckBig, BadgeCheck, LayoutGrid, TrendingUp];

export default function WhyAseel() {
  return (
    <Scene
      id="why"
      image={WHY.image}
      imageAlt="أصيل الغروب من الأعلى"
      className="py-28 lg:py-32"
      overlay={<div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-900/90 to-green-900/95" />}
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 px-6 lg:px-14">
        <div className="flex max-w-3xl flex-col items-start gap-5">
          <Eyebrow num={WHY.eyebrow.num} label={WHY.eyebrow.label} />
          <h2 data-reveal className="font-display text-[clamp(2rem,3.8vw,2.9rem)] font-bold leading-[1.32] text-offwhite">
            {WHY.headline}
          </h2>
        </div>

        <div data-reveal-group className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.values.map((v, i) => {
            const Icon = VALUE_ICONS[i];
            return (
              <div
                key={v.title}
                data-reveal-item
                className="glass group flex flex-col items-start gap-4 rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/45"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/12 transition-colors duration-300 group-hover:bg-gold-500/22">
                  <Icon size={22} className="text-gold-300" />
                </span>
                <h3 className="font-display text-[19px] font-bold text-offwhite">{v.title}</h3>
                <p className="font-body text-[13.5px] text-cream-dim">{v.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Scene>
  );
}
