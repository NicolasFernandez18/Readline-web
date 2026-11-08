---
name: REDLINE
description: Diseño web para negocios, presentado como una lámina técnica oscura.
colors:
  primary: "#FF1A2D"
  background: "#070709"
  surface: "#0F0F14"
  border: "#22222A"
  text: "#F4F4F5"
  muted: "#B4B4BD"
  placeholder: "#A1A1AA"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(54px, 6vw, 80px)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.025em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: "8px"
  md: "14px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "48px"
  service-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "28px 24px 24px"
  form-field:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
    height: "50px"
---

# Design System: REDLINE

## Overview

**Creative North Star: "La lámina técnica de REDLINE"**

REDLINE presenta sus servicios como una hoja de trabajo precisa: una retícula editorial, reglas finas, marcas de registro y diagramas que también sirven para orientarse. La identidad oscura y el rojo existente llevan el peso; los detalles técnicos aparecen donde explican estructura o navegación, no como decoración genérica.

La interfaz mantiene el tono directo del sitio y prioriza sus acciones reales: revisar servicios, explorar conceptos visuales y pedir una cotización. Las propuestas del portafolio deben identificarse como conceptos, no como sitios de clientes. El fondo incorpora un resplandor rojo lento y un trazo de luz en movimiento continuo; `prefers-reduced-motion` mantiene el fondo quieto por accesibilidad. Los controles responden con hovers breves, foco visible y feedback al presionar.

**Key Characteristics:**
- Oscura, editorial y técnica sin simular una interfaz de software.
- Líneas y marcas de registro como sistema gráfico, no como ornamento repetido.
- Jerarquía tipográfica condensada sobre texto de lectura neutral.
- Superficies planas; el contraste y la alineación construyen profundidad.

## Colors

La paleta se apoya en un único acento intenso, rodeado por superficies casi negras y grises de lectura.

### Primary
- **Rojo REDLINE**: identifica acciones principales, foco, enlaces activos y trazos de los diagramas.

### Neutral
- **Fondo carbón**: fondo principal de página y campos.
- **Superficie tinta**: tarjetas, paneles y menú móvil.
- **Borde de retícula**: divisores y contornos de bajo énfasis.
- **Texto claro**: titulares y contenido principal.
- **Gris de lectura**: párrafos secundarios y navegación inactiva.
- **Gris de campo**: placeholders legibles dentro de los formularios.

**The One Accent Rule.** El rojo marca interacción o estructura; no se usa como color de relleno para grandes bloques de texto.

## Typography

**Display Font:** Barlow Condensed (sans-serif)  
**Body Font:** DM Sans (sans-serif)

**Character:** La display es compacta, firme y de lectura inmediata; DM Sans mantiene párrafos y controles tranquilos. No se usa una tipografía monoespaciada como atajo visual para comunicar “tecnología”.

### Hierarchy
- **Display** (600): titulares principales, con interlínea ajustada y ancho controlado.
- **Headline** (600): títulos de páginas y secciones.
- **Title** (600): nombres de servicios, ejemplos y pilares.
- **Body** (400–600, 16–18px): lectura general, con interlínea amplia y ancho limitado.
- **Label** (500–600, 13–15px): navegación, campos y datos auxiliares; no competir con los títulos.

**The Two-Voice Rule.** Barlow Condensed se reserva para jerarquía; DM Sans para lectura e interacción.

## Layout

El contenido usa una retícula de doce columnas dentro de un contenedor centrado de hasta 1280px. Los laterales mantienen márgenes parejos y los módulos se alinean a la misma estructura. El hero de Inicio combina el mensaje de servicio con una composición tipográfica de marca, sin fotografías de proyectos. La sección de ventajas conecta cuatro beneficios con una línea animada que se adapta a una composición vertical en móvil.

Al reducir el ancho, el menú se vuelve compacto, las columnas se apilan y los formularios y acciones pasan a una columna. La composición está ajustada en los cortes de 1050px, 860px y 640px. El espacio sigue una escala corta basada en grupos de 8px; la separación entre secciones es mayor que la separación entre elementos relacionados.

## Elevation & Depth

El sistema de componentes sigue siendo plano: no hay sombras ambientales ni tarjetas flotantes. La separación se expresa con cambios sutiles de superficie y bordes finos. El único efecto de luz es el resplandor rojo lento del fondo; el foco de campos usa un contorno rojo nítido.

## Shapes

Los botones y campos usan esquinas suavemente redondeadas; las tarjetas tienen un radio algo mayor. Diagramas, separadores y marcas de registro conservan geometría recta. Los bordes son finos y discretos, excepto el acento activo o el estado de foco.

## Components

### Buttons
- **Shape:** esquinas suaves (8px).
- **Primary:** fondo rojo, texto oscuro, altura de 48px y padding horizontal de 20px.
- **Secondary:** superficie oscura y borde discreto; comparte dimensiones con el primario.
- **Hover / Focus:** cambia color o borde con transición breve; foco visible rojo y offset claro.
- **Active:** escala/traslación sutil para confirmar la presión.

### Cards / Containers
- **Corner Style:** radio de 14px.
- **Background:** superficie tinta con borde fino; sin sombra al reposo.
- **Internal Padding:** 24–28px, reducido en móvil.
- **Service cards:** jerarquía de título, descripción, lista y acción; no sumar datos no confirmados.
- **Portfolio cards:** imágenes de referencia, texto y enlace; la introducción identifica los ejemplos como conceptos, no como trabajos de clientes.

### Inputs / Fields
- **Style:** fondo de página, texto claro, borde discreto y esquinas de 8px.
- **Focus:** borde rojo y contorno visible con offset.
- **Error / Disabled:** el estado se muestra explícitamente; el botón de envío indica carga y queda temporalmente deshabilitado.

### Navigation
- **Desktop:** logo y nombre a la izquierda; enlaces en una sola fila, con indicador rojo en la página activa.
- **Mobile:** botón de menú con `aria-expanded`, panel navegable y cierre con Escape.
- **Footer:** sin repetir la navegación principal; prioriza WhatsApp y ofrece correo e Instagram como enlaces secundarios con iconos y objetivos táctiles cómodos en móvil. Contacto presenta correo e Instagram como acciones identificables por sus iconos y nombres.

### Movimiento
- El fondo animado usa solo el rojo REDLINE y se mantiene en movimiento, salvo que el sistema solicite movimiento reducido o la pestaña quede oculta.
- Hovers de botones, navegación, enlaces e imágenes son breves y no desplazan el contenido de lectura.
- Las entradas del hero ocurren una vez al cargar. No hay animaciones de aparición al desplazarse.
- Con `prefers-reduced-motion`, el fondo queda estático y se reducen las transiciones.

## Do's and Don'ts

### Do:
- **Do** conservar el logo, el rojo y las superficies oscuras existentes.
- **Do** mantener una retícula compartida, bordes finos y jerarquía clara en los cinco HTML.
- **Do** ofrecer foco visible, etiquetas de formulario y estados de envío comprensibles.
- **Do** identificar como conceptuales las propuestas del portafolio y no presentarlas como sitios de clientes.
- **Do** respetar `prefers-reduced-motion` en el fondo animado y en las transiciones de interacción.

### Don't:
- **Don't** inventar proyectos de clientes, precios, testimonios, métricas o nuevas promesas.
- **Don't** añadir colores de marca ajenos a la paleta REDLINE.
- **Don't** usar sombras flotantes, degradados de texto o adornos técnicos sin función.
- **Don't** ocultar navegación o controles esenciales en pantallas pequeñas.
