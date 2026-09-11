import { WORK_PROCESS, SITE_CONFIG } from "@/data/siteContent";
import { Compass, Layout, Code2, Flame, ArrowRight } from "lucide-react";

export default function ProcessSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Compass":
        return <Compass className="w-6 h-6 text-red-500" />;
      case "Layout":
        return <Layout className="w-6 h-6 text-red-500" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-red-500" />;
      case "Flame":
      default:
        return <Flame className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="proceso" className="py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-semibold mb-3">
            <span>PASO A PASO SIMPLE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            De la idea a tu web activa en{" "}
            <span className="text-red-500">4 pasos simples</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            No te pedimos tareas complicadas. Nos ocupamos de todo el desarrollo para que vos sigas enfocado en atender a tus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {WORK_PROCESS.map((p, idx) => (
            <div
              key={p.step}
              className="relative p-6 rounded-2xl bg-[#10141f] border border-white/5 hover:border-red-500/30 hover:bg-[#141b2a] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#171f2f] flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                    {getIcon(p.icon)}
                  </div>
                  <span className="font-heading text-2xl font-black text-gray-600 group-hover:text-red-500 transition-colors">
                    {p.step}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-red-400 transition-colors">
                  {p.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1 text-[11px] font-semibold text-gray-500 group-hover:text-white transition-colors">
                <span>Fase asegurada</span>
                <ArrowRight className="w-3 h-3 text-red-500" />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
