import Image from "next/image";
import { NAV_LINKS } from "@/lib/content";

export default function Header() {
  return (
    <header
      id="site-header"
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500 [&.is-hidden]:-translate-y-full [&.is-scrolled]:bg-green-900/80 [&.is-scrolled]:shadow-[0_1px_0_rgba(209,169,82,0.16)] [&.is-scrolled]:backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[100px] w-full max-w-[1440px] items-center gap-6 px-8 lg:gap-[60px]">
        {/* اللوجو الرسمي — Ambatt Real Estate (نسخة فاتحة للخلفية الداكنة) */}
        <a href="#hero" className="shrink-0 transition-opacity duration-300 hover:opacity-80">
          <Image
            src="/media/ambatt-logo-light.svg"
            alt="Ambatt Real Estate — أمباط للتطوير العقاري"
            width={452}
            height={81}
            className="h-9 w-auto"
            priority
          />
        </a>

        {/* الروابط — وسط */}
        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
          {NAV_LINKS.map((l, i) =>
            i === 0 ? (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-[20px] font-normal leading-[1.4] text-gold-600 transition-colors duration-300 hover:text-gold-300"
              >
                {l.label}
              </a>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="relative py-2 font-body text-[15px] font-normal text-white transition-colors duration-300 after:absolute after:-bottom-0.5 after:start-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:text-gold-300 hover:after:w-full"
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        {/* CTA — يسار */}
        <a
          href="#contact"
          className="ms-auto flex items-center justify-center bg-gold-500 px-[30px] py-[17px] font-display text-[16px] font-bold text-green-900 transition-colors duration-300 hover:bg-gold-300 lg:ms-0"
        >
          احجز زيارتك الآن
        </a>
      </div>
    </header>
  );
}
