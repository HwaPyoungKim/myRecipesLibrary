# DECISIONS

## Vercel como target principal

- Decision: hacer compatible el build con Vercel usando Nitro.
- Justificacion: Vercel recomienda Nitro para aplicaciones TanStack Start existentes.
- Trade off: el build local ahora produce `.output/` y agrega una capa adicional al pipeline.

## Nitro como plugin de Vite

- Decision: agregar `nitro()` dentro de la configuracion Vite que recibe `@lovable.dev/vite-tanstack-config`.
- Justificacion: el wrapper existente ya incluye TanStack Start, React, Tailwind, aliases y otras integraciones; solo falta Nitro para Vercel.
- Trade off: no se debe duplicar manualmente `tanstackStart()` ni `viteReact()`.

## Mantener Cloudflare como configuracion heredada

- Decision: conservar `wrangler.jsonc`.
- Justificacion: no bloquea Vercel y preserva la opcion de volver a Cloudflare.
- Trade off: el proyecto tiene dos rastros de despliegue; la documentacion debe aclarar cual es el target activo.

## `.output` como salida generada

- Decision: Nitro genera `.output`.
- Justificacion: Vercel reconoce esta salida para desplegar assets y servidor.
- Trade off: `.output` debe permanecer ignorado por git y no debe editarse a mano.
