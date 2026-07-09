import type { Metadata } from "next";
import { Tajawal, IBM_Plex_Sans_Arabic, Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

/** خط العرض الرسمي — 29LT Bukra Bold Italic (كل الأوزان تُخدم من هذا الوجه بدون تسمين صناعي) */
const bukra = localFont({
  src: "../../public/font/29ltbukrabolditalic.otf",
  variable: "--font-bukra",
  weight: "100 900",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "أصيل الغروب ٢ | افتح باب حياتك القادمة",
  description:
    "المرحلة الثانية من أصيل الغروب — مجتمع سكني متكامل داخل وجهة الغروب غرب المدينة المنورة، على بُعد 15 دقيقة من الحرم النبوي الشريف. أكثر من 490 وحدة سكنية بتصاميم عصرية.",
  openGraph: {
    title: "أصيل الغروب ٢ | افتح باب حياتك القادمة",
    description:
      "مجتمع سكني متكامل داخل وجهة الغروب — المدينة المنورة. فلل وتاون هاوس بتصاميم مستلهمة من التراث المديني.",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${bukra.variable} ${tajawal.variable} ${plex.variable} ${jost.variable}`}
    >
      <body className="antialiased">
        {children}
        {/* film grain overlay */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[100] opacity-[0.045] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </body>
    </html>
  );
}
