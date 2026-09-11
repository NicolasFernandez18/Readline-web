import { ArrowRight, CheckCircle2, MessageCircle, Sparkles, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { SITE_CONFIG } from "@/data/siteContent";

export default function Home() {
  const whatsapp = () => {
    const message = encodeURIComponent("Hola Redline, quiero una web moderna para mi negocio.");
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\\+/g, "")}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-[#f3f4f6]">
      <Navbar />
      <main>
        <section className="relative flex min-h-[calc(100vh-78px)] items-center overflow-hidden pt-28 pb-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-15" />
          <div className="absolute left-1/2 top-1/3 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-red-600/15 blur-[140px]" />
          <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/50 px-3.5 py-1.5 text-xs font-semibold text-red-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                ESTUDIO ESPECIALIZADO EN PEQUEÑAS EMPRESAS
              </div>
              <h1 className="max-w-4xl font-heading text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Tu negocio merece una web que <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">atrape clientes.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                Creamos páginas modernas, rápidas y con animaciones para que tu pequeña empresa se vea profesional y reciba consultas reales por WhatsApp.
              </p>
              <div className="mt-6 grid max-w-xl grid-cols-1 gap-3 text-sm text-gray-300 sm:grid-cols-3">
                {['Carga ultrarrápida', 'WhatsApp integrado', 'Diseño responsive'].map((item) => (
                  <div key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-500" />{item}</div>
                ))}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button onClick={whatsapp} className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-4 font-bold text-white shadow-xl shadow-emerald-950/50 transition hover:bg-emerald-500 active:scale-95"><MessageCircle className="h-5 w-5 fill-current" /> Quiero mi web por WhatsApp</button>
                <a href="/servicios" className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#141a26] px-7 py-4 font-semibold text-gray-200 transition hover:border-red-500/40 hover:text-white">Explorar servicios <ArrowRight className="h-4 w-4 text-red-500" /></a>
              </div>
              <div className="mt-8 flex items-center gap-3 text-xs text-gray-400"><Sparkles className="h-4 w-4 text-red-500" /> Más de <strong className="text-white">45 negocios locales</strong> ya compiten con una imagen de primera división.</div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="absolute inset-0 rounded-3xl bg-red-600/20 blur-3xl" />
              <div className="relative rounded-3xl border border-red-500/30 bg-[#10141f] p-5 shadow-2xl">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4"><div className="flex gap-1.5"><span className="h-3 w-3 rounded-full bg-red-500" /><span className="h-3 w-3 rounded-full bg-amber-500" /><span className="h-3 w-3 rounded-full bg-emerald-500" /></div><span className="text-[11px] text-gray-500">redlinestudio.com</span><Zap className="h-4 w-4 text-red-400" /></div>
                <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-[#1c0f13] to-[#111827] p-6">
                  <img src={SITE_CONFIG.logoSrc} alt="Redline" className="mb-5 h-16 w-16 rounded-full border-2 border-red-500 object-cover shadow-lg" />
                  <p className="text-xs font-bold uppercase tracking-widest text-red-400">{SITE_CONFIG.slogan}</p>
                  <h2 className="mt-2 font-heading text-3xl font-extrabold text-white">Más presencia.<br />Más consultas.</h2>
                  <div className="mt-7 grid grid-cols-2 gap-3"><div className="rounded-xl bg-black/40 p-3"><p className="text-[10px] text-gray-500">Retención</p><strong className="font-heading text-2xl text-emerald-400">+78%</strong></div><div className="rounded-xl bg-black/40 p-3"><p className="text-[10px] text-gray-500">WhatsApp</p><strong className="font-heading text-2xl text-red-400">3.4x</strong></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-y border-white/5 bg-[#0c0f17] py-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 sm:flex-row sm:px-6 lg:px-8"><p className="font-heading text-xl font-bold text-white">Todo lo que necesitas, organizado en páginas claras.</p><a href="/contacto" className="flex items-center gap-2 text-sm font-bold text-red-400 transition hover:text-red-300">Hablar con Redline <ArrowRight className="h-4 w-4" /></a></div></section>
      </main>
      <WhatsAppFloating />
    </div>
  );
}
