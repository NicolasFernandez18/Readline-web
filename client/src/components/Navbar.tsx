import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteContent";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "/servicios" },
    { name: "Ventajas", href: "/ventajas" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Proceso", href: "/proceso" },
    { name: "Precios", href: "/precios" },
    { name: "Calculadora", href: "/calculadora" },
    { name: "Preguntas", href: "/preguntas" },
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(SITE_CONFIG.whatsappDefaultMsg);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\\+/g, "")}?text=${text}`, "_blank");
  };

  return <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-red-500/20 bg-[#090b10]/90 py-3 shadow-2xl shadow-red-950/20 backdrop-blur-xl" : "bg-transparent py-5"}`}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex items-center justify-between">
      <a href="/" className="group flex items-center gap-3"><div className="relative h-11 w-11 rounded-full bg-gradient-to-tr from-red-600 via-red-500 to-red-900 p-0.5 shadow-lg shadow-red-950/40 transition-transform group-hover:scale-105"><img src={SITE_CONFIG.logoSrc} alt="REDLINE Logo" className="h-full w-full rounded-full object-cover" /></div><div className="flex flex-col"><span className="font-heading text-xl font-extrabold tracking-wider text-white">RED<span className="text-red-500">LINE</span></span><span className="text-[10px] font-medium uppercase tracking-widest text-gray-400">Hechos Para Ir Más Lejos</span></div></a>
      <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-[#121622]/80 px-3 py-2 shadow-inner md:flex">{navLinks.map((link) => <a key={link.name} href={link.href} className="rounded-full px-3 py-1.5 text-xs font-medium text-gray-300 transition-all hover:bg-white/5 hover:text-white lg:text-sm">{link.name}</a>)}</nav>
      <div className="hidden items-center gap-3 sm:flex"><button onClick={handleWhatsAppClick} className="flex items-center gap-2 rounded-full bg-emerald-600/90 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-emerald-950/50 transition-all hover:bg-emerald-500 active:scale-95 lg:text-sm"><MessageCircle className="h-4 w-4 fill-current" /> WhatsApp Directo</button><a href="/contacto" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-red-950/50 transition-all hover:from-red-500 hover:to-red-600 active:scale-95 lg:text-sm">Cotizar Web <ArrowRight className="h-3.5 w-3.5" /></a></div>
      <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-lg p-2 text-gray-300 hover:bg-white/5 hover:text-white md:hidden" aria-label="Abrir menú">{mobileMenuOpen ? <X className="h-6 w-6 text-red-500" /> : <Menu className="h-6 w-6" />}</button>
    </div></div>
    {mobileMenuOpen && <div className="border-b border-red-500/20 bg-[#0e121a] px-4 pb-6 pt-3 md:hidden"><div className="flex flex-col gap-2">{navLinks.map((link) => <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-white/5 hover:text-red-400">{link.name}</a>)}<div className="flex flex-col gap-2 border-t border-white/10 pt-3"><button onClick={() => { setMobileMenuOpen(false); handleWhatsAppClick(); }} className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white"><MessageCircle className="h-4 w-4 fill-current" /> Hablar por WhatsApp</button><a href="/contacto" onClick={() => setMobileMenuOpen(false)} className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-sm font-semibold text-white">Cotizar Presupuesto <ArrowRight className="h-4 w-4" /></a></div></div></div>}
  </header>;
}
