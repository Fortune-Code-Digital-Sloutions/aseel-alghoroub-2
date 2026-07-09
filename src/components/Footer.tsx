import Image from "next/image";
import { Camera, AtSign, Music2, Ghost } from "lucide-react";
import { NAV_LINKS, FOOTER } from "@/lib/content";

const SOCIAL = [Camera, AtSign, Music2, Ghost];

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/18 bg-[#07130a] pb-8 pt-12">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-6 lg:px-14">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          {/* البراند — يمين */}
          <a href="#hero" className="flex items-center gap-3.5">
            <Image
              src="/media/logo-aseel-gold.png"
              alt="أصيل الغروب 2"
              width={52}
              height={58}
              className="h-[54px] w-auto"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-[17px] font-bold text-offwhite">{FOOTER.brand}</span>
              <span className="font-body text-[11.5px] text-[#8b9c8f]">{FOOTER.brandSub}</span>
            </span>
          </a>

          {/* روابط */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {NAV_LINKS.filter((l) => l.label !== "عن المشروع").map((l) => (
              <a key={l.href} href={l.href} className="font-body text-[13.5px] font-medium text-cream-dim transition-colors duration-300 hover:text-gold-300">
                {l.label}
              </a>
            ))}
          </nav>

          {/* سوشيال — يسار */}
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <div className="flex gap-2.5">
              {SOCIAL.map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/ambattdeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="سوشيال ميديا أمباط"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/60 hover:bg-gold-500/10"
                >
                  <Icon size={16} className="text-cream-dim" />
                </a>
              ))}
            </div>
            <span className="font-body text-[12.5px] text-[#9fb0a0]">{FOOTER.social}</span>
          </div>
        </div>

        <div className="h-px w-full bg-white/8" />

        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <span className="font-body text-[12px] text-[#6e7f72]">{FOOTER.copyright}</span>
          <div className="flex items-center gap-5">
            <span className="font-body text-[12px] text-[#6e7f72]">{FOOTER.partners}</span>
            <span className="h-5 w-px bg-white/10" />
            <a
              href="https://www.instagram.com/ambattdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 opacity-75 transition-opacity duration-300 hover:opacity-100"
              aria-label="أمباط للتطوير العقاري"
            >
              <span className="font-body text-[11px] text-[#8b9c8f]">تطوير</span>
              <Image
                src="/media/ambatt-logo-light.svg"
                alt="Ambatt Real Estate — أمباط للتطوير العقاري"
                width={452}
                height={81}
                className="h-7 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
