import { PRICING_PLANS, SITE_CONFIG } from "@/data/siteContent";
import { Check, MessageCircle, Sparkles, Clock, HelpCircle } from "lucide-react";

export default function PricingSection() {
  const handleSelectPlan = (planName: string, planPrice: string) => {
    const text = encodeURIComponent(`Hola Redline! Me interesa contratar el "${planName}" (${planPrice}) para mi negocio. ¿Podemos coordinar los detalles?`);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\+/g, "")}?text=${text}`, "_blank");
  };

  return (
    <section id="precios" className="py-24 bg-[#0c0f17] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-semibold mb-3">
            <span>INVERSIÓN CLARA & TRANSPARENTE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Planes adaptados a la realidad de tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              pequeña empresa
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Precios únicos y accesibles. Sin letras chicas ni cuotas escondidas. Pagas una vez y el sitio web es tuyo para siempre.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#182133] to-[#10141f] border-2 border-red-500 shadow-2xl shadow-red-950/40 lg:-translate-y-2"
                  : "bg-[#10141f] border border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-[11px] tracking-wider uppercase shadow-lg shadow-red-950/50 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className="font-heading text-2xl font-extrabold text-white">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 min-h-[36px]">
                    {plan.description}
                  </p>
                </div>

                <div className="py-4 border-y border-white/10 my-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-4xl font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-gray-400">pago único</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium mt-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{plan.deliveryTime}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Incluye para tu empresa:
                  </p>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-red-400" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] text-gray-400 italic mb-4 bg-[#090b10] p-2.5 rounded-xl border border-white/5">
                  <strong className="text-gray-300 not-italic">Ideal para:</strong> {plan.recommendedFor}
                </p>

                <button
                  onClick={() => handleSelectPlan(plan.name, plan.price)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg ${
                    plan.popular
                      ? "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white shadow-red-950/60"
                      : "bg-[#182030] hover:bg-[#202b40] text-white hover:text-white border border-white/10"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Elegir este Plan por WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Nota de garantía y flexibilidad */}
        <div className="mt-12 text-center text-xs text-gray-400 flex flex-wrap items-center justify-center gap-6">
          <span>🔒 Pago seguro en 2 partes (50% al iniciar / 50% al finalizar)</span>
          <span>⚡ Sin cobros mensuales forzados</span>
          <span>🤝 Asistencia directa con los diseñadores</span>
        </div>

      </div>
    </section>
  );
}
