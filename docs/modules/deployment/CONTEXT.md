# CONTEXT

## Que hace

El modulo de despliegue agrupa la salida de build y la configuracion necesaria para publicar la app SSR. El objetivo principal actual es Vercel mediante Nitro, manteniendo `wrangler.jsonc` como configuracion heredada para Cloudflare.

## Que problema resuelve

Permite construir la aplicacion TanStack Start en un formato compatible con Vercel Functions. Nitro se integra como plugin de Vite con preset `vercel` y genera `.vercel/output/`, que contiene assets publicos y la funcion SSR.

## Como usarlo

- Ejecutar `npm install` para instalar dependencias.
- Ejecutar `npm run build` para generar `.vercel/output/`.
- En Vercel, usar `npm install` como install command y `npm run build` como build command.
- No editar `.vercel/output`, `.output` ni `dist` como codigo fuente; regenerarlos desde `src`.

## Archivos relevantes

- `vite.config.ts`: agrega el plugin `nitro({ preset: "vercel" })` encima de la configuracion TanStack existente.
- `package.json`: incluye `nitro` como dependencia.
- `package-lock.json`: fija la version instalada de Nitro y sus dependencias.
- `.vercel/output/static`: assets cliente generados por Nitro.
- `.vercel/output/functions/__server.func`: funcion SSR generada por Nitro.
- `wrangler.jsonc`: configuracion Cloudflare heredada, no requerida para Vercel.
