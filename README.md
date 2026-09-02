# RedLine.web

Landing page de presentación para RedLine.web — diseño y desarrollo de páginas web
para pequeños comercios y emprendimientos. Sitio estático (HTML, CSS y JS puro, sin
frameworks ni build), listo para GitHub + Vercel.

## Estructura

```
redline-web/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── logo.jpg
└── README.md
```

## Antes de publicarlo — datos a reemplazar

El sitio tiene datos de ejemplo que hay que cambiar por los reales antes de lanzarlo:

- **Número de WhatsApp**: aparece en dos lugares de `index.html` (`https://wa.me/5490000000000`)
  y una vez en `js/script.js`. Reemplazá `5490000000000` por el número real en formato
  internacional sin espacios ni signos (ej: `5493446123456`).
- **Email de contacto**: `hola@redline.web` en `index.html`, sección de contacto.
- **Redes sociales**: si quieren sumar Instagram u otra red, agregar los links en el
  footer (`.footer-nav` en `index.html`).
- El formulario de contacto arma un mensaje de WhatsApp con lo que la persona escribe
  (no envía nada a un servidor). Si más adelante quieren guardar los mensajes o mandarlos
  por email automáticamente, se puede conectar a un servicio como Formspree o un backend
  propio.

## Cómo subirlo a GitHub

1. Crear un repositorio nuevo en GitHub (por ejemplo `redline-web`).
2. Desde esta carpeta, en la terminal:

```bash
git init
git add .
git commit -m "Primer commit: landing RedLine.web"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/redline-web.git
git push -u origin main
```

## Cómo publicarlo en Vercel

1. Entrar a [vercel.com](https://vercel.com) e iniciar sesión con la cuenta de GitHub.
2. Click en **Add New → Project**.
3. Elegir el repositorio `redline-web`.
4. Como es un sitio estático, Vercel lo detecta solo — no hace falta configurar
   framework ni comando de build. Dejar todo como está y click en **Deploy**.
5. En un par de minutos queda publicado en una URL tipo `redline-web.vercel.app`.
   Desde el panel del proyecto se puede conectar un dominio propio más adelante.

## Personalización rápida

- **Colores y tipografías**: todo está centralizado en las variables `:root` al
  principio de `css/style.css` (`--red`, `--void`, `--font-display`, etc).
- **Textos**: todo el contenido está directo en `index.html`, en español y editable
  sin tocar el CSS ni el JS.
- **Portfolio**: los tres proyectos actuales están marcados como "Proyecto conceptual"
  porque todavía no hay clientes reales cargados. A medida que sumen clientes reales,
  reemplazar esos tres bloques (`.portfolio-card` en `index.html`) por casos reales y
  sacar la etiqueta de "conceptual".
