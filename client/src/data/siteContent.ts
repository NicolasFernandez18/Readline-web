export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  price: string;
  deliveryTime: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  results: string;
  image: string;
  tags: string[];
  mockupUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  metric: string;
  metricLabel: string;
}

export const SITE_CONFIG = {
  name: "REDLINE",
  legalName: "Redline Digital Studio",
  slogan: "HECHOS PARA IR MÁS LEJOS",
  whatsappNumber: "+5491123456789", // Modificable por el cliente
  whatsappDefaultMsg: "Hola Redline, quiero potenciar mi negocio con una página web moderna. ¿Podemos hablar sobre mi proyecto?",
  email: "contacto@redlinestudio.com",
  location: "Disponible para clientes en toda Latinoamérica y España",
  logoSrc: "/redline-logo.jpg",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "landing",
    title: "Landing Pages de Alta Conversión",
    subtitle: "Diseñadas para convertir visitas en ventas",
    description: "Páginas simples, rápidas y con textos que invitan a comprar o consultar, con botones directos a WhatsApp para captar clientes desde el primer segundo.",
    icon: "Rocket",
    benefits: [
      "Carga en menos de 1.2 segundos",
      "Ideal para usar con anuncios de Instagram, Facebook y Google",
      "Botones de WhatsApp con el mensaje ya escrito",
      "Se ve perfecto desde el celular"
    ]
  },
  {
    id: "corporate",
    title: "Webs Corporativas para PyMEs",
    subtitle: "Presencia que transmite confianza y solidez",
    description: "Muestra la historia, el catálogo de servicios, casos de éxito y el equipo de tu pequeña empresa con una imagen digital impecable y seria.",
    icon: "Building2",
    benefits: [
      "Múltiples secciones con jerarquía clara",
      "Formularios inteligentes y cotizadores",
      "Integración con Google Maps y reseñas",
      "Optimización SEO local para aparecer en Google"
    ]
  },
  {
    id: "catalog",
    title: "Catálogos & E-commerce Ágil",
    subtitle: "Vende las 24 horas sin complicaciones",
    description: "Muestra tus productos con galerías interactivas, pedidos directos por WhatsApp o carrito simple para que tus clientes compren rápido.",
    icon: "ShoppingBag",
    benefits: [
      "Filtros de productos y búsqueda rápida",
      "Generador de pedidos con desglose en WhatsApp",
      "Galería interactiva con zoom y detalles",
      "Cero comisiones por venta"
    ]
  },
  {
    id: "redesign",
    title: "Rediseño & Aceleración Web",
    subtitle: "Transforma una web obsoleta en una máquina de ventas",
    description: "Si tu página actual se ve anticuada, es lenta o no genera consultas, la reconstruimos con animaciones modernas y tecnología actual.",
    icon: "Zap",
    benefits: [
      "Auditoría previa de puntos de fuga de clientes",
      "Modernización estética con estilo premium",
      "Indexación limpia y seguridad SSL",
      "Capacitación para que edites tus contenidos"
    ]
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "fitpulse",
    title: "Gimnasio & Centro FitPulse",
    category: "Landing Page & Membresías",
    description: "Sitio web de alto impacto visual con llamada a la acción para clase de prueba y registro instantáneo por WhatsApp.",
    results: "+180% en consultas mensuales de nuevos socios",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    tags: ["Dark Mode", "Animaciones Dinámicas", "WhatsApp Lead"],
    mockupUrl: "#"
  },
  {
    id: "alfa-mecanica",
    title: "Taller & Servicios AlfaPro",
    category: "Web Corporativa PyME",
    description: "Plataforma clara con reserva de turnos para diagnóstico computarizado y localización de taller en tiempo real.",
    results: "3.2x más turnos agendados desde móviles",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80",
    tags: ["Turnos Online", "SEO Local", "Velocidad Extrema"],
    mockupUrl: "#"
  },
  {
    id: "sabor-artesanal",
    title: "Cafetería & Pastelería Botánica",
    category: "Menú Digital & Pedidos",
    description: "Carta digital QR interactiva con carrito rápido que envía la comanda exacta al WhatsApp del mostrador.",
    results: "-40% en tiempo de toma de pedidos",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
    tags: ["Menú QR", "Catálogo WhatsApp", "Diseño Gastronómico"],
    mockupUrl: "#"
  },
  {
    id: "vanguard-abogados",
    title: "Estudio Contable & Jurídico V&R",
    category: "Sitio Institucional de Confianza",
    description: "Estética minimalista y prestigiosa orientada a captar clientes corporativos que buscan asesoramiento.",
    results: "99.4% de retención de usuarios en la portada",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    tags: ["Elegancia", "Casos de Éxito", "Formulario Seguro"],
    mockupUrl: "#"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Plan Impulso Express",
    badge: "Ideal para iniciar",
    popular: false,
    price: "$130.000 ARS",
    deliveryTime: "Listo en 3 a 5 días",
    description: "Una página simple y directa para mostrar tu negocio y empezar a recibir consultas por WhatsApp.",
    recommendedFor: "Profesionales independientes, oficios y emprendimientos que recién arrancan.",
    features: [
      "Una sola página, rápida y fácil de navegar",
      "Textos pensados para convencer y generar confianza",
      "Botón de WhatsApp siempre visible para que te escriban",
      "Formulario de contacto simple",
      "Se ve bien en el celular, la tablet y la computadora",
      "Carga rápida, sin trabas",
      "Estadísticas de visitas para saber cuánta gente entra",
      "1 ronda de cambios incluida"
    ]
  },
  {
    id: "pro",
    name: "Plan Pyme Imparable",
    badge: "MÁS ELEGIDO",
    popular: true,
    price: "$230.000 ARS",
    deliveryTime: "Listo en 7 a 10 días",
    description: "Un sitio web completo, con varias secciones, para que tu negocio se vea profesional y serio.",
    recommendedFor: "Pymes ya armadas, negocios de servicios y comercios locales.",
    features: [
      "Hasta 5 secciones completas (inicio, servicios, nosotros, etc.)",
      "Animaciones modernas que le dan un toque premium",
      "Catálogo de tus productos o servicios destacados",
      "Calculadora de presupuesto interactiva para tus clientes",
      "Muestra tus reseñas reales de Google",
      "Preparado para aparecer en búsquedas locales de Google",
      "Soporte prioritario y un video explicando cómo usarlo",
      "WhatsApp Business con mensajes automáticos según la sección",
      "2 rondas de cambios incluidas"
    ]
  },
  {
    id: "custom",
    name: "Plan E-commerce & Escala",
    badge: "Máximo rendimiento",
    popular: false,
    price: "$340.000 ARS",
    deliveryTime: "Listo en 12 a 15 días",
    description: "Solución a medida para marcas que venden muchos productos o necesitan funciones más avanzadas.",
    recommendedFor: "Marcas con catálogo grande, ventas todo el año o varias sucursales.",
    features: [
      "Sitio web con todas las secciones que necesites",
      "Catálogo interactivo con carrito que arma el pedido para WhatsApp",
      "Diseño 100% personalizado y exclusivo para tu marca",
      "Animaciones de alta calidad en cada detalle",
      "Posibilidad de sumar pagos online",
      "Textos redactados para resolver las dudas típicas del cliente",
      "Te ayudamos paso a paso con el dominio y el hosting",
      "3 meses de soporte técnico incluido"
    ]
  }
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Estrategia & Briefing Rápido",
    desc: "En una breve conversación entendemos qué vendes, tu público ideal y la meta concreta de tu web.",
    icon: "Compass"
  },
  {
    step: "02",
    title: "Prototipo & Diseño Visual",
    desc: "Creamos la interfaz con colores de impacto, animaciones atrapantes y textos que invitan a contactar.",
    icon: "Layout"
  },
  {
    step: "03",
    title: "Desarrollo Ágil & Pruebas",
    desc: "Construimos el sitio con código veloz, probamos cada botón de WhatsApp y verificamos en todos los celulares.",
    icon: "Code2"
  },
  {
    step: "04",
    title: "Lanzamiento & Crecimiento",
    desc: "Publicamos tu web en vivo con dominio propio, lista para recibir tráfico y convertir prospectos en clientes.",
    icon: "Flame"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Esteban Morales",
    role: "Fundador",
    company: "Climatizaciones Sur",
    quote: "Antes mandábamos presupuestos en PDF por chat y nos dejaban en visto. Con la web que nos armó Redline, los clientes entran, ven nuestros trabajos y nos escriben decididos.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    metric: "+240%",
    metricLabel: "En respuestas de cotización"
  },
  {
    name: "Luciana Rossi",
    role: "Directora Comercial",
    company: "Estética Médica Aura",
    quote: "La interacción y las animaciones causan una primera impresión impresionante. El botón de WhatsApp directo a las secretarias duplicó las reservas en menos de 30 días.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    metric: "4.9★",
    metricLabel: "Feedback de pacientes"
  },
  {
    name: "Gabriel Benítez",
    role: "Gerente Operativo",
    company: "Logística y Envíos Express",
    quote: "La web vuela, carga instantáneo en cualquier teléfono. Redline cumplió los tiempos y el diseño superó por mucho lo que esperábamos de una agencia tradicional.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    metric: "0.8s",
    metricLabel: "Tiempo de carga promedio"
  }
];

export const FAQS = [
  {
    q: "¿Por qué una pequeña empresa necesita una página web si ya tiene Instagram o Facebook?",
    a: "Las redes sociales son excelentes para atraer personas, pero una web es tu oficina digital propia. Te da credibilidad inmediata, te posiciona en Google cuando alguien busca activamente tu servicio, y te permite cerrar ventas de forma ordenada sin perderte entre cientos de mensajes desordenados."
  },
  {
    q: "¿Cómo funciona el botón de WhatsApp?",
    a: "Ponemos un botón bien visible en toda la página. Cuando alguien lo toca, se le abre WhatsApp con un mensaje ya escrito (por ejemplo: 'Hola, vi el Plan PyME y quiero cotizar para mi negocio'). Vos solo tenés que responder y cerrar la venta."
  },
  {
    q: "¿Cuánto tiempo tardan en tener la página lista?",
    a: "Para la mayoría de las landing pages de pequeñas empresas, el plazo es de 3 a 7 días hábiles una vez que nos brindas la información básica. En proyectos con catálogo o múltiples secciones, de 10 a 14 días."
  },
  {
    q: "¿Tengo que pagar mantenimiento mensual obligatorio?",
    a: "No obligamos a contratos atados. La web es 100% tuya. Si deseas que nosotros nos encarguemos de respaldos, actualizaciones y soporte técnico continuo, ofrecemos planes mensuales opcionales muy accesibles."
  },
  {
    q: "¿Cómo es el proceso de pago?",
    a: "Trabajamos con 50% de anticipo para iniciar el diseño y 50% al finalizar, una vez que apruebes el sitio en vivo antes de la entrega final. Aceptamos transferencias locales, tarjetas y PayPal/Crypto para clientes internacionales."
  }
];
