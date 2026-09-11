import { useState } from "react";
import { FAQS, SITE_CONFIG } from "@/data/siteContent";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-24 bg-[#090b10] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>RESPUESTAS DIRECTAS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Todo lo que necesitas saber antes de dar el paso con Redline.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-[#10141f] border border-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#141b2a] transition-colors"
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-red-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 bg-[#0d101a]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Banner de contacto si quedó alguna duda */}
        <div className="mt-12 p-6 rounded-2xl bg-[#121724] border border-red-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="font-heading font-bold text-white text-base">¿Tenés otra pregunta puntual?</p>
            <p className="text-xs text-gray-400">Escribinos directo a WhatsApp y un especialista te asesora en minutos.</p>
          </div>
          <button
            onClick={() => {
              const text = encodeURIComponent("¡Hola Redline! Tengo una consulta sobre el desarrollo web para mi empresa.");
              window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\+/g, "")}?text=${text}`, "_blank");
            }}
            className="shrink-0 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 active:scale-95 transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultar por WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
