import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SavedProvider } from "@/components/saved-provider";
import { getChatGPTUser } from "@/app/chatgpt-auth";
import { viewerFor } from "@/lib/user-profile";
import { PrivacyConsent } from "@/components/privacy-consent";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://modomza.com.ar"),
  title: { default: "Modo MZA | Qué hacer en Mendoza", template: "%s | Modo MZA" },
  description: "Planes, agenda, lugares e información útil para disfrutar Mendoza. Contenido gratuito, fuentes oficiales y recorridos listos.",
  alternates: { canonical: "/" },
  keywords: ["Mendoza", "qué hacer en Mendoza", "agenda Mendoza", "turismo Mendoza", "lugares en Mendoza", "eventos Mendoza", "planes gratis Mendoza"],
  openGraph: {
    type: "website",
    url: "https://modomza.com.ar",
    locale: "es_AR",
    siteName: "Modo MZA",
    title: "Modo MZA | Qué hacer en Mendoza",
    description: "Planes reales, agenda, lugares y guías para entrar en modo Mendoza.",
    images: [{ url: "/assets/mendoza-hero.webp", width: 1983, height: 793, alt: "Modo MZA, guía para descubrir Mendoza" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modo MZA | Qué hacer en Mendoza",
    description: "Planes reales, agenda, lugares y guías para entrar en modo Mendoza.",
    images: ["/assets/mendoza-hero.webp"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user=await getChatGPTUser();
  const viewer=await viewerFor(user);
  return (
    <html lang="es">
      <body className="antialiased"><SavedProvider viewer={viewer}><SiteHeader viewer={viewer}/>{children}<SiteFooter/><PrivacyConsent/><Toaster/></SavedProvider></body>
    </html>
  );
}
