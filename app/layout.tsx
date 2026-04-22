import type { Metadata } from "next";
import { Rajdhani, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "NEXAGE | Digital Solutions. Intelligent Future.",
  description: "From powerful websites to AI automation, we build digital solutions that help businesses grow, scale and lead the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-brand-black text-brand-offwhite font-body selection:bg-brand-crimson selection:text-white">
        {children}
      </body>
    </html>
  );
}
