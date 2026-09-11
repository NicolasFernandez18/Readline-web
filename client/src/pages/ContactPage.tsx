import { Mail, MapPin, MessageCircle, ArrowRight, Clock, ShieldCheck, Instagram } from "lucide-react";
import InternalPage from "@/components/InternalPage";
import { SITE_CONFIG } from "@/data/siteContent";

export default function ContactPage() {
  const whatsapp = () => {
    const message = encodeURIComponent("Hola Redline, quiero conversar sobre una web para mi negocio.");
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\\+/g, "")}?text=${message}`, "_blank");
  };

  return <InternalPage eyebrow="Contacto" title="Hablemos de tu próximo salto" description="Contanos qué hace tu negocio y te respondemos con una idea clara para llevarlo al mundo digital.">
    <section className="bg-[#090b10] py-16"><div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div className="rounded-3xl border border-red-500/25 bg-gradient-to-br from-[#17131b] to-[#10141f] p-7 sm:p-9"><div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600/20 text-emerald-400"><MessageCircle className="h-7 w-7 fill-current" /></div><h2 className="font-heading text-3xl font-extrabold text-white">La vía más rápida es WhatsApp.</h2><p className="mt-4 text-sm leading-relaxed text-gray-400">Mandanos tu rubro, qué querés mejorar y si ya tenés una web. Te respondemos con orientación concreta, sin compromiso.</p><button onClick={whatsapp} className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white transition hover:bg-emerald-500 active:scale-95"><MessageCircle className="h-5 w-5 fill-current" /> Escribir a Redline</button><div className="mt-5 flex items-center gap-2 text-xs text-gray-400"><ShieldCheck className="h-4 w-4 text-emerald-400" /> Respuesta estimada en menos de 15 minutos</div></div>
      <div className="rounded-3xl border border-white/10 bg-[#10141f] p-7 sm:p-9"><h2 className="font-heading text-2xl font-extrabold text-white">Datos de contacto</h2><div className="mt-7 space-y-5 text-sm text-gray-300"><div className="flex gap-3"><Mail className="h-5 w-5 text-red-500" /><div><p className="font-semibold text-white">Email</p><p className="mt-1 text-gray-400">{SITE_CONFIG.email}</p></div></div><div className="flex gap-3"><MapPin className="h-5 w-5 text-red-500" /><div><p className="font-semibold text-white">Disponibilidad</p><p className="mt-1 text-gray-400">{SITE_CONFIG.location}</p></div></div><div className="flex gap-3"><Clock className="h-5 w-5 text-red-500" /><div><p className="font-semibold text-white">Horario</p><p className="mt-1 text-gray-400">Lunes a sábado, de 9:00 a 20:00</p></div></div><a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition hover:opacity-80"><Instagram className="h-5 w-5 text-red-500" /><div><p className="font-semibold text-white">Instagram</p><p className="mt-1 text-gray-400">@redline.web</p></div></a></div><a href="/calculadora" className="mt-10 flex items-center gap-2 text-sm font-bold text-red-400 transition hover:text-red-300">Preparar mi presupuesto <ArrowRight className="h-4 w-4" /></a></div>
    </div></section>
  </InternalPage>;
}
