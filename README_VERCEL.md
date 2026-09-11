# Redline Studio — GitHub + Vercel

Este proyecto está preparado para Vercel. La carpeta raíz contiene `package.json`, `vercel.json`, `client/` y `server/`.

## Configuración inicial en Vercel

Importá este repositorio desde GitHub en Vercel y dejá estos valores:

- **Framework Preset:** Other
- **Root Directory:** `.`
- **Build Command:** `pnpm run build`
- **Output Directory:** `dist/public`
- **Install Command:** `pnpm install`

El archivo `vercel.json` ya incluye la regla necesaria para que funcionen las rutas internas de React, por ejemplo `/servicios`, `/precios` y `/contacto`.

Una vez conectado el repositorio, Vercel desplegará automáticamente cada nuevo commit que hagas en la rama principal. A partir de ese momento, solo necesitás actualizar archivos en GitHub y esperar el nuevo deploy.

## Dominio

En Vercel, agregá `redlineweb.site` en **Settings → Domains** y seguí las instrucciones DNS que muestra Vercel. El dominio debe estar asignado al mismo proyecto que contiene este repositorio.
