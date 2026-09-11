import { useState } from "react";
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2, ShieldCheck, Zap, Laptop } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteContent";

export default function HeroSection() {
  const [devicePreview, setDevicePreview] = useState<"desktop" | "mobile">("desktop");

  const handleWhatsApp = () => {
    const text = encodeURIComponent("¡Hola Redline! Vi la página y quiero una propuesta para crear la web de mi negocio.");
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\+/g, "")}?text=${text}`, "_blank");
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#090b10]">
      {/* Background radial glow & grid patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-red-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-red-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Decorative dynamic lines */}
      <div className="absolute top-24 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Copy de atracción y ventas */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Badge de estado */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-semibold tracking-wide backdrop-blur-md shadow-lg shadow-red-950/30">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>ESTUDIO ESPECIALIZADO EN PEQUEÑAS EMPRESAS</span>
            </div>

            {/* Titular principal con impacto */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Tu negocio merece una web que{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-white">
                atrape clientes
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full" />
              </span>{" "}
              en segundos.
            </h1>

            {/* Bajada persuasiva */}
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              En <strong className="text-white font-semibold">REDLINE</strong> creamos páginas web modernas, ultrarrápidas y con animaciones diseñadas para convertir curiosos en clientes por WhatsApp. Sin tecnicismos raros: directo a vender más.
            </p>

            {/* Micro-puntos de valor */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Carga en &lt; 1 segundo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Botón WhatsApp integrado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Diseño 100% móvil</span>
              </div>
            </div>

            {/* Botones de acción principales */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base shadow-xl shadow-emerald-950/60 hover:shadow-emerald-600/40 transition-all duration-300 active:scale-95 group"
              >
                <MessageCircle className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform" />
                <span>Quiero mi web por WhatsApp</span>
              </button>

              <a
                href="/proyectos"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#141a26] hover:bg-[#1b2333] border border-white/10 hover:border-red-500/40 text-gray-200 hover:text-white font-semibold text-base transition-all duration-300 active:scale-95"
              >
                <span>Ver demostraciones</span>
                <ArrowRight className="w-4 h-4 text-red-500" />
              </a>
            </div>

            {/* Social proof rápido */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-gray-400">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#090b10]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Cliente" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#090b10]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Cliente" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#090b10]" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Cliente" />
              </div>
              <p>
                Más de <span className="text-white font-bold">45+ negocios locales</span> ya compiten con imagen de primera división.
              </p>
            </div>

          </div>

          {/* Columna Derecha: Mockup Interactivo de Web Moderna con el logo Redline */}
          <div className="lg:col-span-5 relative">
            
            {/* Resplandor trasero de la tarjeta */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-red-900/30 blur-2xl rounded-3xl" />

            {/* Marco de dispositivo interactivo */}
            <div className="relative bg-[#10141f] rounded-2xl border border-red-500/30 shadow-2xl p-4 sm:p-5 text-left overflow-hidden">
              
              {/* Header simulado de navegador */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                
                <div className="flex items-center gap-2 bg-[#090b10] px-3 py-1 rounded-full text-[11px] text-gray-400 font-mono border border-white/5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>redlinestudio.com/tu-negocio</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-red-400 bg-red-950/40 px-2 py-0.5 rounded border border-red-500/30 font-semibold">
                  <Zap className="w-3 h-3" />
                  <span>0.8s</span>
                </div>
              </div>

              {/* Contenido interactivo simulado */}
              <div className="space-y-4">
                
                {/* Banner interno con logo */}
                <div className="relative rounded-xl overflow-hidden p-5 bg-gradient-to-br from-[#1c0f13] via-[#151a28] to-[#0c0f17] border border-red-500/20">
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src={SITE_CONFIG.logoSrc}
                      alt="Redline Concept"
                      className="w-14 h-14 rounded-full object-cover border-2 border-red-500 shadow-lg glow-red-sm"
                    />
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-red-400">
                        {SITE_CONFIG.slogan}
                      </span>
                      <h3 className="font-heading font-extrabold text-lg text-white">
                        REDLINE DESIGN SYSTEM
                      </h3>
                      <p className="text-xs text-gray-400">
                        Potenciado para convertir visitas en ventas
                      </p>
                    </div>
                  </div>

                  {/* Tarjetas de métricas en vivo */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/10">
                    <div className="bg-[#0b0e14]/80 p-2.5 rounded-lg border border-white/5">
                      <p className="text-[10px] text-gray-400">Retención de usuario</p>
                      <p className="font-heading text-lg font-bold text-emerald-400">+78%</p>
                    </div>
                    <div className="bg-[#0b0e14]/80 p-2.5 rounded-lg border border-white/5">
                      <p className="text-[10px] text-gray-400">Clics a WhatsApp</p>
                      <p className="font-heading text-lg font-bold text-red-400">3.4x</p>
                    </div>
                  </div>
                </div>

                {/* Simulador de mensaje instantáneo */}
                <div className="bg-[#141b29] p-3.5 rounded-xl border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                      WA
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Mensaje directo preconfigurado</p>
                      <p className="text-[11px] text-gray-400">"Hola, quiero reservar una cita..."</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] bg-emerald-950 text-emerald-300 font-bold border border-emerald-500/30">
                    Activo
                  </span>
                </div>

                {/* Sello de confianza */}
                <div className="flex items-center justify-between text-[11px] text-gray-400 px-1 pt-1">
                  <span>✓ 100% Propiedad del cliente</span>
                  <span>✓ Sin mensualidades sorpresa</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
