import { useState } from "react";
import { PORTFOLIO, SITE_CONFIG } from "@/data/siteContent";
import { ExternalLink, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";

export default function PortfolioSection() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "Todos los proyectos" },
    { id: "landing", label: "Landing Pages" },
    { id: "corporate", label: "Webs Corporativas" },
    { id: "catalog", label: "Menú & Catálogos" }
  ];

  const filteredItems = PORTFOLIO.filter((item) => {
    if (filter === "all") return true;
    if (filter === "landing") return item.category.toLowerCase().includes("landing");
    if (filter === "corporate") return item.category.toLowerCase().includes("corporativa") || item.category.toLowerCase().includes("institucional");
    if (filter === "catalog") return item.category.toLowerCase().includes("catálogo") || item.category.toLowerCase().includes("menú");
    return true;
  });

  const handleAskSimilar = (title: string) => {
    const text = encodeURIComponent(`Hola Redline! Vi el caso de "${title}" en su web y me gustaría algo similar para mi negocio.`);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\+/g, "")}?text=${text}`, "_blank");
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0c0f17] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-semibold mb-3">
              <span>CASOS DE ÉXITO & RESULTADOS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Trabajos que generan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
                clientes reales
              </span>
            </h2>
            <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-xl">
              Cada negocio tiene su esencia. Mirá cómo ayudamos a pequeñas empresas de diferentes rubros a destacarse sobre sus competidores.
            </p>
          </div>

          {/* Botones de filtro */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === c.id
                    ? "bg-red-600 text-white shadow-lg shadow-red-950/50"
                    : "bg-[#141a27] text-gray-300 hover:text-white hover:bg-[#1a2233]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Rejilla de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-[#10141f] border border-white/5 hover:border-red-500/40 overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Imagen con overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10141f] via-transparent to-transparent opacity-80" />
                
                {/* Categoría flotante */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold bg-[#090b10]/80 backdrop-blur-md text-red-400 border border-red-500/30">
                  {item.category}
                </span>

                {/* Badge de resultado destacado */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#090b10]/90 backdrop-blur-md p-3 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold block">
                      Impacto conseguido
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-400 font-heading">
                      {item.results}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAskSimilar(item.title)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-md active:scale-95 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Quiero una así</span>
                  </button>
                </div>
              </div>

              {/* Contenido textual */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags de tecnología / características */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-gray-400 bg-[#161c2b] px-2.5 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Llamado de pie de portfolio */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-red-950/30 via-[#131826] to-red-950/30 border border-red-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-base text-white">¿Tu negocio tiene necesidades especiales?</h4>
            <p className="text-xs text-gray-400">Podemos armar una estructura a medida de tus fotos, tus clientes y tu forma de vender.</p>
          </div>
          <button
            onClick={() => {
              const text = encodeURIComponent("¡Hola Redline! Quiero consultar por un diseño web a medida para mi rubro.");
              window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\+/g, "")}?text=${text}`, "_blank");
            }}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-gray-950 hover:bg-gray-100 font-bold text-xs flex items-center gap-2 active:scale-95 transition-all"
          >
            <span>Consultar por mi rubro</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
