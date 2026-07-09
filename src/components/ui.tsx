import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

/** ترويسة سكشن: رقم لاتيني + خط ذهبي + تسمية — still: بدون reveal ذاتي (داخل المشاهد المثبتة) */
export function Eyebrow({
  num,
  label,
  still = false,
}: {
  num: string;
  label: string;
  still?: boolean;
}) {
  return (
    <div className="flex items-center gap-3.5" {...(still ? {} : { "data-reveal": "" })}>
      <span className="num text-[15px] tracking-[0.2em] text-gold-300">{num}</span>
      <span className="h-px w-10 bg-gold-600" />
      <span className="font-body text-sm font-medium tracking-wide text-gold-500">
        {label}
      </span>
    </div>
  );
}

export function GoldButton({
  children,
  href = "#contact",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-md bg-gold-500 px-7 py-4 font-display text-[16px] font-bold text-green-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-[0_10px_34px_-8px_rgba(209,169,82,0.55)] ${className}`}
    >
      <ArrowLeft
        size={17}
        className="transition-transform duration-300 group-hover:-translate-x-1"
      />
      {children}
    </a>
  );
}

export function GhostButton({
  children,
  href = "#units",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-md border border-gold-600/70 px-7 py-[15px] font-display text-[15px] font-medium text-gold-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:bg-gold-500/10 ${className}`}
    >
      <ArrowLeft
        size={16}
        className="transition-transform duration-300 group-hover:-translate-x-1"
      />
      {children}
    </a>
  );
}

/** غلاف سكشن كامل الشاشة بخلفية صورة + طبقات تعتيم */
export function Scene({
  id,
  image,
  overlay,
  children,
  className = "",
  imageAlt = "",
  parallax = true,
  pin = false,
}: {
  id: string;
  image?: string;
  overlay?: ReactNode;
  children: ReactNode;
  className?: string;
  imageAlt?: string;
  parallax?: boolean;
  pin?: boolean;
}) {
  return (
    <section
      id={id}
      data-section
      {...(pin ? { "data-pin-scene": "" } : {})}
      className={`relative isolate overflow-hidden ${className}`}
    >
      {image && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            {...(parallax ? { "data-parallax": "16" } : {})}
            className="h-[112%] w-full scale-[1.02] object-cover"
          />
        </div>
      )}
      {overlay}
      {children}
    </section>
  );
}
