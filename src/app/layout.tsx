import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Lumière | Luxury Wellness & Spa",
  description:
    "Signature spa experiences — curated rituals for mind, body & soul. Massage therapy in a luxury wellness setting.",
  icons: {
    icon: [
      { url: "/seo/favicon-32x32.webp", sizes: "32x32" },
      { url: "/seo/favicon-192x192.webp", sizes: "192x192" },
    ],
    apple: "/seo/apple-touch-icon.webp",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${montserrat.variable} ${robotoSlab.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
