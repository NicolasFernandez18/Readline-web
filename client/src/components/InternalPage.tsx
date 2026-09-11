import { ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import WhatsAppFloating from "@/components/WhatsAppFloating";

interface InternalPageProps {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function InternalPage({ eyebrow, title, description, children }: InternalPageProps) {
  return (
    <div className="min-h-screen bg-[#090b10] text-[#f3f4f6]">
      <Navbar />
      <main className="pt-28">
        <header className="relative overflow-hidden border-b border-white/5 bg-[#0c0f17] py-16 sm:py-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-red-600/15 blur-[120px]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-5 flex items-center gap-2 text-xs text-gray-500">
              <a href="/" className="transition-colors hover:text-white">Inicio</a>
              <ChevronRight className="h-3.5 w-3.5 text-red-500" />
              <span className="text-gray-300">{eyebrow}</span>
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-red-400">{eyebrow}</p>
            <h1 className="max-w-4xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">{description}</p>
          </div>
        </header>
        {children}
      </main>
      <WhatsAppFloating />
    </div>
  );
}
