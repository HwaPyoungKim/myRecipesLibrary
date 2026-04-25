# CONTEXT

## Qué hace

El módulo de despliegue agrupa la salida de build y configuración de Cloudflare.

## Qué problema resuelve

Permite construir la app SSR y prepararla para correr en un entorno compatible con Cloudflare Workers.

## Cómo usarlo

- Ejecutar `npm run build` para generar `dist`.
- Usar `wrangler.jsonc` como configuración de runtime.
- No editar `dist` como código fuente; regenerarlo desde `src`.

## Archivos relevantes

- `wrangler.jsonc`: nombre, compatibility date, flags y entrypoint.
- `dist/client`: assets cliente generados.
- `dist/server`: bundle SSR generado.
- `.wrangler`: estado/config local de Wrangler.
