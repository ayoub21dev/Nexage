import type { Metadata } from "next";
import "./globals.css";

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
      <body className="font-sans min-h-screen bg-white text-black antialiased relative">
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}
