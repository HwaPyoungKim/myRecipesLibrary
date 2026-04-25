# DECISIONS

## Tailwind CSS v4

- Decisión: importar Tailwind desde CSS con `@import "tailwindcss"`.
- Justificación: sigue el modelo de configuración CSS-first de Tailwind v4.
- Trade off: parte de la configuración vive en CSS, no en un `tailwind.config`.

## Tokens CSS centralizados

- Decisión: definir colores, radios, sombras y fuentes como variables.
- Justificación: los componentes pueden usar nombres semánticos.
- Trade off: un cambio de token puede afectar muchas pantallas.

## Fuentes externas

- Decisión: cargar Google Fonts desde el root route.
- Justificación: mejora la personalidad editorial del sitio.
- Trade off: depende de una solicitud externa.
