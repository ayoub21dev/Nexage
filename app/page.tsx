import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-black">
      <Navbar />
      <Hero />
    </main>
  );
}
