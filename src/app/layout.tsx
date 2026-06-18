import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { HtmlLangSync } from "@/components/html-lang-sync";
import { ThemeProvider } from "@/components/theme-provider";
import { brand } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.baseUrl),
  applicationName: brand.name,
  category: "local business",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr-CA" suppressHydrationWarning>
      <body className={`${inter.variable} ${jakarta.variable}`}>
        <ThemeProvider>
          <HtmlLangSync />
          {children}
        </ThemeProvider>
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" async defer />
      </body>
    </html>
  );
}
