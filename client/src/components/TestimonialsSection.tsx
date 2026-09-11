import { TESTIMONIALS } from "@/data/siteContent";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#0c0f17] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-semibold mb-3">
            <span>CLIENTES SATISFECHOS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Lo que dicen dueños de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              pequeñas empresas
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            No creas solo en nuestras palabras. Mirá la experiencia de quienes ya tienen su web funcionando con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="p-7 rounded-3xl bg-[#10141f] border border-white/5 hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between relative shadow-xl"
            >
              <div>
                {/* 5 estrellas */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-red-500/30 mb-2" />

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div>
                {/* Métrica lograda */}
                <div className="p-3 rounded-xl bg-[#161c2a] border border-white/5 mb-4 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400">{t.metricLabel}</span>
                  <span className="font-heading font-extrabold text-base text-emerald-400">{t.metric}</span>
                </div>

                {/* Perfil del cliente */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-red-500/40"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-gray-400">
                      {t.role} • {t.company}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
