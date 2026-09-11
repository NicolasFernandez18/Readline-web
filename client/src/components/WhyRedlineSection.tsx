import { Shield, Smartphone, Zap, MessageSquareQuote, MousePointerClick, HeartHandshake } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteContent";

export default function WhyRedlineSection() {
  const features = [
    {
      icon: <MousePointerClick className="w-6 h-6 text-red-500" />,
      title: "Diseño que Atrapa a Primera Vista",
      desc: "Colores modernos, micro-animaciones fluidas y tipografías que transmiten poder y profesionalismo desde el primer segundo."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-red-500" />,
      title: "Optimizado 100% para Celulares",
      desc: "Tu cliente promedio visita tu web desde su teléfono en la calle o en casa. Nos aseguramos de que la navegación sea perfecta con un pulgar."
    },
    {
      icon: <Zap className="w-6 h-6 text-red-500" />,
      title: "Velocidad Imbatible",
      desc: "Páginas ligeras que abren al instante. Menos tiempo de espera significa menos rebotes y más ventas cerradas."
    },
    {
      icon: <MessageSquareQuote className="w-6 h-6 text-red-500" />,
      title: "WhatsApp como Canal de Cierre",
      desc: "Menos formularios eternos que nadie completa, más personas escribiéndote directo a tu WhatsApp con interés real."
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "La Web es Tuya (Sin Ataduras)",
      desc: "Entregamos el proyecto completo. No cobramos mensualidades forzosas ni secuestramos tu dominio o archivos."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-red-500" />,
      title: "Acompañamiento Cercano",
      desc: "Te hablamos en español claro, sin palabras raras de programación. Te guiamos antes, durante y después del lanzamiento."
    }
  ];

  return (
    <section id="por-que-redline" className="py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado izquierdo: Manifiesto */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-semibold">
              <span>EL ESTILO REDLINE</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Una web bonita no alcanza. Tu negocio necesita una web que{" "}
              <span className="text-red-500">venda</span>.
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Muchas pequeñas empresas pagan por sitios web que parecen folletos olvidados de 2012. En Redline unimos estética moderna con psicología de conversión para que cada persona que entre sienta que está tratando con la mejor empresa del mercado.
            </p>

            {/* Tarjeta de lema de marca */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-red-950/40 to-transparent border-l-4 border-red-500 bg-[#10141f]">
              <p className="text-xs uppercase tracking-widest text-red-400 font-bold mb-1">
                NUESTRO COMPROMISO
              </p>
              <p className="text-white font-heading font-extrabold text-xl">
                "{SITE_CONFIG.slogan}"
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Hacemos que pequeñas empresas compitan de igual a igual con las marcas más grandes.
              </p>
            </div>

          </div>

          {/* Lado derecho: Cuadrícula de beneficios */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#10141e] border border-white/5 hover:border-red-500/30 hover:bg-[#141a27] transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-xl bg-[#182030] w-fit mb-3 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-2 group-hover:text-red-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
