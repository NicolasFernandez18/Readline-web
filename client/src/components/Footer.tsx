import { MessageCircle, ArrowRight, ShieldCheck, Zap, Mail, MapPin, Instagram } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteContent";

export default function Footer() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("¡Hola Redline! Quiero dar el salto y tener una web profesional para mi negocio.");
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\+/g, "")}?text=${text}`, "_blank");
  };

  return (
    <footer className="bg-[#06080c] relative border-t border-red-500/20 pt-20 pb-12 overflow-hidden">
      
      {/* Resplandor decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner CTA gigante de cierre */}
        <div className="rounded-3xl bg-gradient-to-r from-[#170e13] via-[#151b2a] to-[#120a0f] border border-red-500/30 p-8 sm:p-14 text-center max-w-5xl mx-auto mb-20 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-500/20 blur-2xl rounded-full" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-semibold mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>EL MOMENTO DE DESTACAR ES HOY</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white max-w-3xl mx-auto leading-tight">
            ¿Listo para que tu negocio juegue en <span className="text-red-500">primera división</span>?
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mt-4 mb-8">
            Cada día que pasas sin una web profesional son clientes que se van con tus competidores. Empecemos hoy mismo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base shadow-xl shadow-emerald-950/60 active:scale-95 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Chatear por WhatsApp Ahora</span>
            </button>

            <a
              href="/calculadora"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#1c2436] hover:bg-[#253047] border border-white/10 text-white font-semibold text-base transition-all"
            >
              <span>Calcular mi web</span>
              <ArrowRight className="w-4 h-4 text-red-500" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Presupuestos 100% sin compromiso
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Respuesta en menos de 15 minutos</span>
          </div>
        </div>

        {/* Columnas del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10 text-xs text-gray-400">
          
          {/* Logo y descripción */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={SITE_CONFIG.logoSrc}
                alt="REDLINE Logo"
                className="w-10 h-10 rounded-full object-cover border border-red-500/50"
              />
              <div>
                <span className="font-heading text-xl font-black text-white tracking-wider">
                  RED<span className="text-red-500">LINE</span>
                </span>
                <p className="text-[10px] tracking-widest uppercase text-gray-400">
                  {SITE_CONFIG.slogan}
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-xs max-w-sm leading-relaxed">
              Estudio creativo especializado en diseño web de alta retención para pequeñas empresas, profesionales independientes y emprendimientos en expansión.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-3">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="/servicios" className="hover:text-red-400 transition-colors">Servicios</a></li>
              <li><a href="/ventajas" className="hover:text-red-400 transition-colors">Por qué elegirnos</a></li>
              <li><a href="/proyectos" className="hover:text-red-400 transition-colors">Casos de Éxito</a></li>
              <li><a href="/proceso" className="hover:text-red-400 transition-colors">Proceso de Trabajo</a></li>
              <li><a href="/precios" className="hover:text-red-400 transition-colors">Planes y Precios</a></li>
              <li><a href="/calculadora" className="hover:text-red-400 transition-colors">Calculadora en Vivo</a></li>
            </ul>
          </div>

          {/* Contacto Directo */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-3">Contacto Directo</h4>
            <div className="space-y-3">
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: {SITE_CONFIG.whatsappNumber}</span>
              </button>

              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-red-500" />
                <span>{SITE_CONFIG.email}</span>
              </div>

              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors"
              >
                <Instagram className="w-4 h-4 text-red-500" />
                <span>@redline.web</span>
              </a>

              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded bg-red-950/40 border border-red-500/30 text-[10px] text-red-400 font-semibold">
                  Horario de atención: Lun a Sáb de 9:00 a 20:00
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} REDLINE Digital Studio. Todos los derechos reservados.</p>
          <p className="text-gray-400">
            Hecho con pasión para pequeñas empresas que van por más.
          </p>
        </div>

      </div>
    </footer>
  );
}
