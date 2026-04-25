# DECISIONS

## Cloudflare Workers como target

- Decisión: configurar Wrangler con `@tanstack/react-start/server-entry`.
- Justificación: alinea TanStack Start SSR con un runtime edge.
- Trade off: algunas APIs Node requieren `nodejs_compat`.

## `dist` como salida generada

- Decisión: build produce cliente y servidor en `dist`.
- Justificación: separa fuente de artefactos publicables.
- Trade off: abrir archivos de `dist` puede confundir porque no son editables de forma durable.

## Compatibility date fija

- Decisión: `compatibility_date` está fijada en `2025-09-24`.
- Justificación: estabiliza comportamiento de Workers.
- Trade off: conviene revisarla al actualizar Wrangler o Cloudflare runtime.
