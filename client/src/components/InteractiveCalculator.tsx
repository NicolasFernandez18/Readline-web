import { useState } from "react";
import { Calculator, MessageCircle, Sparkles, Check, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteContent";

export default function InteractiveCalculator() {
  const [siteType, setSiteType] = useState<"landing" | "corporate" | "catalog">("landing");
  const [sectionsCount, setSectionsCount] = useState<number>(3);
  const [includeWhatsappButton, setIncludeWhatsappButton] = useState<boolean>(true);
  const [includeAnimations, setIncludeAnimations] = useState<boolean>(true);
  const [includeSpeedOptimization, setIncludeSpeedOptimization] = useState<boolean>(true);
  const [includeGoogleMaps, setIncludeGoogleMaps] = useState<boolean>(false);
  const [urgency, setUrgency] = useState<"normal" | "express">("normal");

  // Cálculo de precio base estimado en pesos argentinos (ARS)
  const basePrices = {
    landing: 90000,
    corporate: 170000,
    catalog: 220000,
  };
  const SECTION_EXTRA = 12000;
  const ANIMATIONS_EXTRA = 20000;
  const SPEED_EXTRA = 15000;
  const MAPS_EXTRA = 12000;
  const EXPRESS_EXTRA = 35000;

  const formatARS = (n: number) => n.toLocaleString("es-AR");

  let total = basePrices[siteType];

  if (sectionsCount > 4) {
    total += (sectionsCount - 4) * SECTION_EXTRA;
  }

  if (includeAnimations) total += ANIMATIONS_EXTRA;
  if (includeSpeedOptimization) total += SPEED_EXTRA;
  if (includeGoogleMaps) total += MAPS_EXTRA;
  if (urgency === "express") total += EXPRESS_EXTRA;

  const handleSendEstimate = () => {
    const typeNames = {
      landing: "Landing Page Directa",
      corporate: "Web Corporativa PyME",
      catalog: "Catálogo / Menú Interactivo",
    };

    const urgencyText = urgency === "express" ? "Express (48 a 72hs)" : "Estándar (5 a 8 días)";

    const summary = `¡Hola Redline! Usé la calculadora de su web y armé este presupuesto estimado:
• Tipo de sitio: ${typeNames[siteType]}
• Secciones estimadas: ${sectionsCount}
• Animaciones avanzadas: ${includeAnimations ? "Sí" : "No"}
• Optimización de velocidad extrema: ${includeSpeedOptimization ? "Sí" : "No"}
• Mapa de Google / Localización: ${includeGoogleMaps ? "Sí" : "No"}
• Tiempo de entrega deseado: ${urgencyText}
• Presupuesto calculado aprox: ~$${formatARS(total)} ARS.

¿Me podrían confirmar si podemos avanzar y cuál sería el siguiente paso?`;

    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(summary)}`, "_blank");
  };

  return (
    <section id="calculadora" className="py-24 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>HERRAMIENTA INTERACTIVA EN VIVO</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Calcula tu web en <span className="text-red-500">30 segundos</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Elige las opciones que necesita tu negocio y obtén una cotización transparente en tiempo real lista para enviar por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Formulario de opciones interactivas */}
          <div className="lg:col-span-7 bg-[#10141f] rounded-3xl border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl">
            
            {/* Paso 1: Tipo de web */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 block">
                1. ¿Qué tipo de página web necesitas?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "landing", label: "Landing Page", sub: "1 página para vender" },
                  { id: "corporate", label: "Web Corporativa", sub: "3 a 5 secciones PyME" },
                  { id: "catalog", label: "Catálogo Online", sub: "Productos & Pedidos" },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSiteType(t.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      siteType === t.id
                        ? "bg-red-950/40 border-red-500 text-white shadow-md shadow-red-950/50"
                        : "bg-[#161c2a] border-white/5 text-gray-400 hover:text-white hover:bg-[#1a2233]"
                    }`}
                  >
                    <p className="font-heading font-bold text-xs">{t.label}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{t.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Paso 2: Cantidad de secciones */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  2. Cantidad de secciones aproximadas
                </label>
                <span className="font-heading font-extrabold text-sm text-red-400 bg-red-950/50 px-2.5 py-0.5 rounded-lg border border-red-500/30">
                  {sectionsCount} {sectionsCount === 1 ? "sección" : "secciones"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="1"
                value={sectionsCount}
                onChange={(e) => setSectionsCount(parseInt(e.target.value))}
                className="w-full accent-red-500 cursor-pointer h-2 bg-[#1b2333] rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                <span>1 (Esencial)</span>
                <span>3 a 4 (Estándar)</span>
                <span>8+ (Completa)</span>
              </div>
            </div>

            {/* Paso 3: Complementos de alto impacto */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 block">
                3. Funciones y optimizaciones
              </label>
              
              <div className="space-y-2.5">
                <label className="flex items-center justify-between p-3 rounded-xl bg-[#151b28] border border-white/5 cursor-pointer hover:bg-[#1a2233] transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeAnimations}
                      onChange={(e) => setIncludeAnimations(e.target.checked)}
                      className="w-4 h-4 accent-red-500 rounded"
                    />
                    <div>
                      <p className="text-xs font-semibold text-white">Animaciones interactivas estilo Redline</p>
                      <p className="text-[10px] text-gray-400">Efectos modernos de entrada y hover para retener visitas</p>
                    </div>
                  </div>
                  <span className="text-xs text-red-400 font-mono">+$20.000</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-[#151b28] border border-white/5 cursor-pointer hover:bg-[#1a2233] transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeSpeedOptimization}
                      onChange={(e) => setIncludeSpeedOptimization(e.target.checked)}
                      className="w-4 h-4 accent-red-500 rounded"
                    />
                    <div>
                      <p className="text-xs font-semibold text-white">Aceleración Extrema de Carga</p>
                      <p className="text-[10px] text-gray-400">Compresión de imágenes y código para abrir en &lt; 1 seg</p>
                    </div>
                  </div>
                  <span className="text-xs text-red-400 font-mono">+$15.000</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-[#151b28] border border-white/5 cursor-pointer hover:bg-[#1a2233] transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeGoogleMaps}
                      onChange={(e) => setIncludeGoogleMaps(e.target.checked)}
                      className="w-4 h-4 accent-red-500 rounded"
                    />
                    <div>
                      <p className="text-xs font-semibold text-white">Mapa de Google & Localización PyME</p>
                      <p className="text-[10px] text-gray-400">Ideal si tienes local a la calle, consultorio o taller</p>
                    </div>
                  </div>
                  <span className="text-xs text-red-400 font-mono">+$12.000</span>
                </label>
              </div>
            </div>

            {/* Paso 4: Plazo de entrega */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                4. Plazo de Entrega
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUrgency("normal")}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    urgency === "normal"
                      ? "bg-red-950/40 border-red-500 text-white"
                      : "bg-[#151b28] border-white/5 text-gray-400"
                  }`}
                >
                  <p className="text-xs font-bold">Estándar (5-8 días)</p>
                  <p className="text-[10px] text-gray-400">Sin recargo</p>
                </button>
                <button
                  type="button"
                  onClick={() => setUrgency("express")}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    urgency === "express"
                      ? "bg-red-950/40 border-red-500 text-white"
                      : "bg-[#151b28] border-white/5 text-gray-400"
                  }`}
                >
                  <p className="text-xs font-bold text-red-400">⚡ Express (48-72 hs)</p>
                  <p className="text-[10px] text-gray-400">+$35.000 ARS</p>
                </button>
              </div>
            </div>

          </div>

          {/* Tarjeta de Resumen en Vivo */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#182133] to-[#10141f] rounded-3xl border-2 border-red-500 p-6 sm:p-8 shadow-2xl relative sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Presupuesto Estimado
              </span>
              <span className="text-[10px] bg-red-950 px-2.5 py-0.5 rounded-full text-red-400 font-bold border border-red-500/30">
                PAGO ÚNICO
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-5xl font-black text-white">
                  ${formatARS(total)}
                </span>
                <span className="text-gray-400 text-sm font-semibold">ARS</span>
              </div>
              <p className="text-xs text-emerald-400 mt-1 font-medium">
                ✓ Incluye botón flotante de WhatsApp sin cargo adicional
              </p>
            </div>

            <div className="space-y-2 text-xs text-gray-300 pb-6 border-b border-white/10 mb-6">
              <div className="flex justify-between">
                <span>Base ({siteType}):</span>
                <span className="font-semibold text-white">${formatARS(basePrices[siteType])} ARS</span>
              </div>
              <div className="flex justify-between">
                <span>Secciones ({sectionsCount}):</span>
                <span className="font-semibold text-white">
                  {sectionsCount > 4 ? `+$${formatARS((sectionsCount - 4) * SECTION_EXTRA)} ARS` : "Incluidas"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Animaciones interactivas:</span>
                <span className="font-semibold text-white">{includeAnimations ? `+$${formatARS(ANIMATIONS_EXTRA)} ARS` : "No"}</span>
              </div>
              <div className="flex justify-between">
                <span>Aceleración de carga:</span>
                <span className="font-semibold text-white">{includeSpeedOptimization ? `+$${formatARS(SPEED_EXTRA)} ARS` : "No"}</span>
              </div>
              <div className="flex justify-between">
                <span>Plazo seleccionado:</span>
                <span className="font-semibold text-emerald-400">
                  {urgency === "express" ? "Express 48-72h" : "Normal 5-8d"}
                </span>
              </div>
            </div>

            <button
              onClick={handleSendEstimate}
              className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/60 active:scale-95 transition-all group"
            >
              <MessageCircle className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform" />
              <span>Enviar este presupuesto a WhatsApp</span>
            </button>

            <p className="text-[11px] text-gray-400 text-center mt-3">
              Sin compromiso. Te respondemos al instante con la viabilidad técnica y muestras de ejemplo.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
