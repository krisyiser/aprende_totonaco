import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Convocatoria: Curso–Taller de Lengua Tutunakú | Ayuntamiento de Papantla",
  description:
    "El H. Ayuntamiento de Papantla convoca a la ciudadanía a inscribirse al Curso–Taller de Lengua Tutunakú, Etapa Inicial I y II. Totalmente gratis. Inicio: 9 de marzo de 2026.",
  keywords: [
    "Tutunakú", "Totonaco", "Lengua Indígena", "Papantla", "Veracruz",
    "curso taller", "convocatoria", "gratis", "ayuntamiento",
  ],
  openGraph: {
    title: "Convocatoria: Curso–Taller de Lengua Tutunakú",
    description: "Inscríbete al Curso–Taller de Lengua Tutunakú. Etapa Inicial I y II. Totalmente gratis. Papantla, Veracruz.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={inter.variable}>
      <body style={{ fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}
