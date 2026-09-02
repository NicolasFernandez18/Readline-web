# RedLine.web — Landing Page

Landing page de presentación para **RedLine.web**, hecha en HTML + CSS + JavaScript puro (sin frameworks), lista para subir a **GitHub** y publicar en **Vercel**.

## Estructura

```
RedLine-web/
│
├── index.html          → estructura y contenido de la página
├── style.css           → estilos, colores y responsive
├── script.js           → menú móvil, animaciones al hacer scroll, año del footer
├── assets/
│   ├── logo.jpg             → logo real de RedLine.web (header y footer)
│   ├── favicon-32.png       → ícono para la pestaña del navegador
│   ├── favicon-512.png      → ícono en alta resolución
│   └── apple-touch-icon.png → ícono para agregar la página a inicio en iOS
└── README.md
```

## Cómo publicar (GitHub → Vercel)

1. Creá un repositorio nuevo en GitHub y subí estos 5 archivos (podés arrastrarlos directamente en GitHub o usar `git`).
2. Entrá a [vercel.com](https://vercel.com) e iniciá sesión con tu cuenta de GitHub.
3. Hacé clic en **"Add New… → Project"** y elegí el repositorio.
4. Como es HTML/CSS/JS puro, no hace falta configurar ningún *framework preset* ni *build command*: dejalo en blanco y Vercel va a servir `index.html` directamente.
5. Hacé clic en **Deploy**. En unos segundos vas a tener una URL pública (por ejemplo `redline-web.vercel.app`).

Cada vez que subas cambios a la rama principal del repositorio, Vercel va a volver a publicar la página automáticamente.

## Qué es fácil de modificar

### 1. Textos

Todos los textos están directamente en `index.html`, en español y en el mismo orden en el que aparecen en la página (header, hero, servicios, impacto, por qué RedLine, proyectos, proceso, FAQ, CTA final, footer). Podés buscarlos y reemplazarlos sin tocar el CSS ni el JS.

### 2. Colores

Todos los colores están centralizados arriba de todo en `style.css`, dentro de `:root`:

```css
--bg:        #060607;  /* fondo principal (negro profundo) */
--bg-alt:    #0c0c0f;  /* fondo alternativo de algunas secciones */
--fg:        #f4f3ef;  /* texto principal (blanco) */
--fg-dim:    #8f8f95;  /* texto secundario (gris) */
--red:       #e4002b;  /* rojo de acento (marca) */
--red-bright:#ff1f42;  /* rojo para estados hover */
--red-dim:   #8f0019;  /* rojo oscuro, para bordes y detalles */
--red-glow:  rgba(228,0,43,0.35); /* usado en los resplandores/glow de fondo */
```

La página también tiene textura de grano de película y resplandores rojos difuminados de fondo (en el hero, la sección de impacto y el CTA final) para reforzar la estética oscura y cinematográfica.

Cambiando estos valores cambia el color en toda la página.

### 3. Número de WhatsApp

⚠️ **Importante:** el botón "Hablar por WhatsApp" de la sección final usa un número de ejemplo. Buscá este comentario en `index.html` y reemplazá el número:

```html
<!-- TODO: reemplazar el número de ejemplo por el WhatsApp real de RedLine.web -->
<a href="https://wa.me/5490000000000" ...>
```

El formato es `https://wa.me/` seguido del número completo con código de país, sin espacios ni símbolos (ej: `https://wa.me/5493446123456`).

### 4. Proyectos del portfolio

Los 3 proyectos conceptuales (Blackline Barber, Nova Studio, Volt Garage) están en la sección `<section class="section" id="proyectos">` de `index.html`, cada uno dentro de un `<article class="portfolio-card">`. Cada tarjeta tiene marcada la etiqueta **"Proyecto conceptual"** — cuando reemplacen alguno por un cliente real, simplemente hay que quitar esa etiqueta y actualizar el texto.

Para agregar un proyecto nuevo, se puede copiar un bloque `<article class="portfolio-card">...</article>` completo y modificar el título, la descripción y la clase del fondo visual (`visual-barber`, `visual-studio`, `visual-garage`, o crear una nueva en `style.css`).

### 5. Secciones

Cada sección de la página está claramente comentada en `index.html` (`<!-- ============ SERVICIOS ============ -->`, etc.), en el mismo orden que en el CSS, así que agregar, quitar o reordenar secciones es directo.

## Pendiente para cuando haya clientes reales

- Reemplazar el número de WhatsApp de ejemplo.
- Reemplazar los proyectos conceptuales por trabajos reales a medida que los haya.
- Sumar Google Analytics, Search Console y Tag Manager (idealmente con cuentas propiedad del cliente).
- Migrar el sitio del cliente final a Hostinger + WordPress cuando corresponda (esta versión en HTML/CSS/JS puro queda como base de práctica y como portfolio propio en Vercel).
