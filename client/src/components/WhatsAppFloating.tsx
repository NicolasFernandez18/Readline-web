import { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteContent";

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");
  const [businessType, setBusinessType] = useState("Pequeña Empresa / Negocio Local");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const fullText = `Hola Redline! Mi tipo de negocio es: ${businessType}. ${customMsg || "Quiero más información sobre una web para mi negocio."}`;
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(fullText)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  const directWhatsAppUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappDefaultMsg
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up rápido de contacto */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-[#111622] rounded-2xl border border-red-500/30 shadow-2xl p-4 text-white animate-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-red-500/50">
                <img
                  src={SITE_CONFIG.logoSrc}
                  alt="Redline Support"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-[#111622]" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white">Asesor Redline</h4>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  En línea • Respuesta en minutos
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-300 mb-3 bg-[#171e2e] p-2.5 rounded-xl border border-white/5">
            👋 ¡Hola! ¿Querés que diseñemos la web ideal para tu pequeña empresa? Contanos de qué es tu negocio y te respondemos por WhatsApp:
          </p>

          <form onSubmit={handleSend} className="space-y-2.5">
            <div>
              <label className="text-[10px] uppercase font-semibold text-gray-400 tracking-wider">
                Tipo de Negocio
              </label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full mt-1 bg-[#182030] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
              >
                <option value="Comercio / Tienda Local">Comercio / Tienda Local</option>
                <option value="Servicios Profesionales">Servicios Profesionales / Asesoría</option>
                <option value="Gastronomía / Cafetería">Gastronomía / Cafetería / Bar</option>
                <option value="Taller / Oficios">Taller / Reparaciones / Oficios</option>
                <option value="Salud & Bienestar">Salud / Estética / Gimnasio</option>
                <option value="Otro Emprendimiento">Otro Emprendimiento</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] uppercase font-semibold text-gray-400 tracking-wider">
                ¿Qué necesitas? (Opcional)
              </label>
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Ej: Quiero una landing con menú o catálogo..."
                className="w-full mt-1 bg-[#182030] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-xs shadow-lg shadow-emerald-950/60 active:scale-95 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Abrir WhatsApp Ahora</span>
            </button>
          </form>
        </div>
      )}

      {/* Botón flotante interactivo */}
      <div className="flex items-center gap-3">
        {/* Etiqueta tooltip invitadora */}
        <div className="hidden sm:flex items-center gap-1.5 bg-[#121622]/90 backdrop-blur-md text-white text-xs font-medium px-3.5 py-1.5 rounded-full border border-red-500/30 shadow-xl shadow-black/60 animate-bounce duration-1000">
          <Sparkles className="w-3.5 h-3.5 text-red-500" />
          <span>¡Chatea con nosotros!</span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Contactar por WhatsApp"
          className="relative group p-4 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-2xl shadow-emerald-950/80 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          {/* Anillos de pulsación */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping opacity-75 pointer-events-none" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 text-[9px] font-bold text-white items-center justify-center">
              1
            </span>
          </span>

          <MessageCircle className="w-7 h-7 fill-white text-emerald-600 relative z-10" />
        </button>
      </div>
    </div>
  );
}
