import { useState } from "react";
import { SERVICES, SITE_CONFIG } from "@/data/siteContent";
import { Rocket, Building2, ShoppingBag, Zap, Check, ArrowRight, MessageCircle } from "lucide-react";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(SERVICES[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Rocket":
        return <Rocket className="w-6 h-6 text-red-500" />;
      case "Building2":
        return <Building2 className="w-6 h-6 text-red-500" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-red-500" />;
      case "Zap":
      default:
        return <Zap className="w-6 h-6 text-red-500" />;
    }
  };

  const current = SERVICES.find((s) => s.id === activeService) || SERVICES[0];

  const handleConsult = (serviceTitle: string) => {
    const text = encodeURIComponent(`Hola Redline! Me interesa información sobre el servicio: ${serviceTitle} para mi negocio.`);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\+/g, "")}?text=${text}`, "_blank");
  };

  return (
    <section id="servicios" className="py-24 bg-[#0c0f17] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-semibold mb-3">
            <span>SOLUCIONES DIGITALES REDLINE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Páginas web creadas a la medida de tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              pequeña empresa
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            No usamos plantillas genéricas aburridas. Desarrollamos cada proyecto para que tu negocio luzca como una empresa líder en su rubro.
          </p>
        </div>

        {/* Selector de servicios (Tabs interactivas) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {SERVICES.map((s) => {
            const isSelected = s.id === activeService;
            return (
              <button
                key={s.id}
                onClick={() => setActiveService(s.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#182030] border-red-500 shadow-lg shadow-red-950/40 scale-[1.02]"
                    : "bg-[#10141e] border-white/5 hover:border-white/15 text-gray-400 hover:text-white"
                }`}
              >
                <div className="mb-3">{getIcon(s.icon)}</div>
                <div>
                  <h3 className={`font-heading text-sm font-bold ${isSelected ? "text-white" : "text-gray-300"}`}>
                    {s.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">{s.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detalle ampliado del servicio activo */}
        <div className="bg-gradient-to-br from-[#121724] to-[#0d101a] rounded-3xl border border-red-500/20 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold">
                {current.subtitle}
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                {current.title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Lo que incluye para tu negocio:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-200 bg-[#090b10]/60 p-2.5 rounded-lg border border-white/5">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-red-400" />
                      </div>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleConsult(current.title)}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Consultar por este servicio</span>
                </button>

                <a
                  href="/calculadora"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1a2233] hover:bg-[#222c42] text-gray-200 hover:text-white font-semibold text-sm transition-all"
                >
                  <span>Calcular presupuesto aproximado</span>
                  <ArrowRight className="w-4 h-4 text-red-500" />
                </a>
              </div>
            </div>

            {/* Ilustración interactiva de la característica */}
            <div className="lg:col-span-5 bg-[#090b10] rounded-2xl border border-white/10 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs text-gray-400 font-mono">REDLINE_DELIVERY_STANDARD</span>
                <span className="text-xs text-emerald-400 font-semibold">100% Garantizado</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-[#131926] rounded-xl border border-white/5">
                  <div className="flex justify-between text-xs text-gray-300 mb-1">
                    <span>Velocidad de carga en móviles</span>
                    <span className="text-emerald-400 font-bold">98/100 Google PageSpeed</span>
                  </div>
                  <div className="w-full bg-[#0a0d14] h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[98%]" />
                  </div>
                </div>

                <div className="p-3 bg-[#131926] rounded-xl border border-white/5">
                  <div className="flex justify-between text-xs text-gray-300 mb-1">
                    <span>Adaptabilidad responsive</span>
                    <span className="text-red-400 font-bold">Smartphones, Tablets & PCs</span>
                  </div>
                  <div className="w-full bg-[#0a0d14] h-2 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full w-[100%]" />
                  </div>
                </div>

                <div className="p-3 bg-[#131926] rounded-xl border border-white/5">
                  <div className="flex justify-between text-xs text-gray-300 mb-1">
                    <span>Integración WhatsApp Directo</span>
                    <span className="text-emerald-400 font-bold">Configurado & Probado</span>
                  </div>
                  <div className="w-full bg-[#0a0d14] h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[100%]" />
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/20 text-xs text-gray-300">
                💡 <strong className="text-white">¿Por qué importa?</strong> El 82% de las personas que buscan un negocio local lo hacen desde su celular. Si la web tarda más de 2 segundos en cargar, se van con tu competencia.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
