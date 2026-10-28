# REDLINE — versión refinada

## Cambios incluidos
- Hoja compartida `redline-enhancements.css` para mejorar el foco visible, la jerarquía tipográfica, estados hover y consistencia visual.
- Menú móvil accesible generado desde la navegación existente, con `aria-expanded`, `aria-controls` y cierre al elegir una página.
- Animaciones discretas de aparición con IntersectionObserver y respeto por `prefers-reduced-motion`.
- Carga diferida y decodificación asíncrona para imágenes remotas del portafolio.
- `rel="noopener noreferrer"` para enlaces que abren pestañas nuevas.

## Antes de publicar
- Verificá que el número de WhatsApp `5491112345678` sea el real: aparece como destino de contacto y puede ser un placeholder.
- Confirmá el dominio, las redes sociales y los textos comerciales.
- El proyecto usa Tailwind por CDN. Para producción conviene compilar Tailwind localmente y evitar depender del CDN.
- No se pudo ejecutar una prueba real de Playwright ni inspeccionar un archivo Figma desde este entorno: no se detectaron herramientas/conexiones correspondientes. Se deben correr pruebas de navegador en tu entorno después de instalar dependencias.

## Ejecución
`npm install`
`npm run build`
Luego serví la carpeta del proyecto con un servidor estático o desplegá en Vercel.
