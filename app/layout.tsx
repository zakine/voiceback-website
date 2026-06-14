import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  title: "Voiceback — Tu número de negocio. Tus clientes. Una sola app.",
  description: "Un número profesional para llamadas, WhatsApp e IA. Gestiona chats, pagos y catálogo de tus clientes desde una sola app. Hecho para emprendedores de LATAM.",
  keywords: "WhatsApp business, número profesional, LATAM, emprendedores, pagos, catálogo, AI assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
