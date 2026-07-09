import { JOURNEY } from "@/lib/content";

/** شريط الرحلة الجانبي 01–10 — ثابت على الحافة، يتفعّل مع السكرول */
export default function JourneyRail() {
  return (
    <aside
      aria-label="رحلة الصفحة"
      className="fixed end-7 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-[15px] xl:flex"
    >
      {JOURNEY.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          data-rail={s.id}
          className="group flex items-center gap-2.5 opacity-75 transition-all duration-300 hover:opacity-100 [&.is-active]:opacity-100"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#5f7266] transition-all duration-300 group-hover:bg-gold-500 group-[.is-active]:h-2 group-[.is-active]:w-2 group-[.is-active]:bg-gold-500 group-[.is-active]:shadow-[0_0_10px_rgba(209,169,82,0.7)]" />
          <span className="flex flex-col leading-none">
            <span className="num text-[9.5px] tracking-[0.22em] text-[#6e7f72] group-[.is-active]:text-gold-300">
              {s.num}
            </span>
            <span className="mt-0.5 font-body text-[11.5px] font-medium text-[#8b9c8f] transition-colors duration-300 group-hover:text-cream-dim group-[.is-active]:font-bold group-[.is-active]:text-offwhite">
              {s.label}
            </span>
          </span>
        </a>
      ))}
    </aside>
  );
}
