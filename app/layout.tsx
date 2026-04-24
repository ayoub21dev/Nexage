import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexage | Engineering Digital Experiences",
  description: "Digital agency crafting high-performance websites and stunning designs for the next generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white text-black antialiased relative`}>
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}
