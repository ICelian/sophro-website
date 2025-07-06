import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Maria LOPEZ - Aidante en écoute émotionnelle et sophrologie",
  description: "Accompagnement thérapeutique personnalisé selon l'approche de Laurent Martinez. Aide pour stress, anxiété, confiance en soi, gestion émotionnelle. Séances d'audio-thérapie à 45€.",
  keywords: "sophrologie, thérapie, écoute émotionnelle, stress, anxiété, confiance en soi, Laurent Martinez, audio-thérapie",
  author: "Maria LOPEZ",
  openGraph: {
    title: "Maria LOPEZ - Aidante en écoute émotionnelle et sophrologie",
    description: "Accompagnement thérapeutique personnalisé pour votre bien-être émotionnel",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo-removebg.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-stone-50`}>
        {children}
      </body>
    </html>
  );
}
