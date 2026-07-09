import {
  DoorOpen, User, Phone, Mail, ChevronDown, PencilLine, Send, Lock,
  MessageCircle, MapPin, CalendarCheck, FileDown, Headset,
} from "lucide-react";
import { CONTACT } from "@/lib/content";
import { Scene } from "@/components/ui";

const INFO_ICONS = [Phone, MessageCircle, Mail, MapPin];
const ACTION_ICONS = [CalendarCheck, FileDown, Headset];
const FIELD_ICONS = [User, Phone, Mail, ChevronDown];

export default function Contact() {
  return (
    <Scene
      id="contact"
      image={CONTACT.image}
      imageAlt="باب أصيل الغروب مفتوح"
      className="pt-28 lg:pt-32"
      overlay={
        <>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-900/85 via-green-900/95 to-green-900" />
          <div className="absolute left-1/2 top-10 -z-10 h-[320px] w-[560px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(209,169,82,0.2),transparent_65%)]" />
        </>
      }
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-14">
        {/* الهيدر العاطفي */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <span data-reveal className="inline-flex items-center gap-2.5 rounded-full border border-gold-500/35 bg-green-900/60 px-4.5 py-2 backdrop-blur-sm">
            <DoorOpen size={15} className="text-gold-300" />
            <span className="font-body text-[13px] font-medium text-gold-300">{CONTACT.kicker}</span>
          </span>
          <h2 data-reveal className="font-display text-[clamp(2.4rem,5vw,3.7rem)] font-extrabold leading-[1.18] text-offwhite">
            {CONTACT.headline}
          </h2>
          <p data-reveal className="max-w-xl font-body text-[17.5px] leading-[1.75] text-cream-dim">
            {CONTACT.sub}
          </p>
        </div>

        {/* الشبكة: معلومات + فورم */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          {/* معلومات التواصل — يمين */}
          <div className="flex flex-col gap-4">
            <div data-reveal-group className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {CONTACT.info.map((c, i) => {
                const Icon = INFO_ICONS[i];
                return (
                  <div key={c.title} data-reveal-item className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-green-800/55 p-4.5 transition-colors duration-300 hover:border-gold-500/35">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/12">
                      <Icon size={18} className="text-gold-300" />
                    </span>
                    <span className="flex flex-col leading-snug">
                      <span className="font-body text-[14px] font-semibold text-offwhite">{c.title}</span>
                      <span className={`text-[12.5px] text-cream-dim ${/[A-Za-z0-9@+]/.test(c.value) ? "num" : "font-body"}`}>
                        {c.value}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>

            {/* الخريطة */}
            <figure data-reveal className="relative h-[210px] overflow-hidden rounded-2xl border border-white/10">
              <img src={CONTACT.map} alt="موقع المشروع — غرب المدينة المنورة" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-green-900/20" />
            </figure>

            {/* أكشنز */}
            <div data-reveal-group className="grid grid-cols-3 gap-3.5">
              {CONTACT.actions.map((a, i) => {
                const Icon = ACTION_ICONS[i];
                return (
                  <a key={a.title} href="#" data-reveal-item className="group flex flex-col items-start gap-2.5 rounded-2xl border border-gold-500/15 bg-green-800/45 p-4.5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/45">
                    <Icon size={19} className="text-gold-300" />
                    <span className="font-body text-[13.5px] font-bold text-offwhite">{a.title}</span>
                    <span className="font-body text-[11px] text-[#9fb0a0]">{a.sub}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* الفورم — يسار */}
          <form data-reveal className="glass flex flex-col gap-3.5 self-start rounded-3xl p-8 lg:p-9">
            <h3 className="font-display text-[24px] font-bold text-offwhite">{CONTACT.form.title}</h3>
            <p className="-mt-1 font-body text-[13.5px] text-[#9fb0a0]">{CONTACT.form.sub}</p>

            {CONTACT.form.fields.map((f, i) => {
              const Icon = FIELD_ICONS[i];
              return (
                <label key={f} className="flex items-center justify-between gap-3 rounded-xl border border-white/12 bg-green-900/70 px-4.5 py-3.5 transition-colors duration-300 focus-within:border-gold-500/60">
                  <input
                    type={i === 1 ? "tel" : i === 2 ? "email" : "text"}
                    placeholder={f}
                    className="w-full bg-transparent font-body text-[14.5px] text-offwhite placeholder:text-[#8b9c8f] focus:outline-none"
                  />
                  <Icon size={16} className="shrink-0 text-gold-300" />
                </label>
              );
            })}

            <label className="flex items-start justify-between gap-3 rounded-xl border border-white/12 bg-green-900/70 px-4.5 py-3.5 transition-colors duration-300 focus-within:border-gold-500/60">
              <textarea
                placeholder={CONTACT.form.message}
                rows={3}
                className="w-full resize-none bg-transparent font-body text-[14.5px] text-offwhite placeholder:text-[#8b9c8f] focus:outline-none"
              />
              <PencilLine size={16} className="mt-0.5 shrink-0 text-gold-300" />
            </label>

            <button
              type="submit"
              className="group mt-1 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gold-500 px-6 py-4 font-display text-[16px] font-bold text-green-900 transition-all duration-300 hover:bg-gold-300 hover:shadow-[0_12px_36px_-10px_rgba(209,169,82,0.6)]"
            >
              <Send size={16} className="transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-0.5" />
              {CONTACT.form.submit}
            </button>

            <span className="flex items-center justify-center gap-1.5 font-body text-[11.5px] text-[#6e7f72]">
              <Lock size={11} />
              {CONTACT.form.privacy}
            </span>
          </form>
        </div>
      </div>
    </Scene>
  );
}
