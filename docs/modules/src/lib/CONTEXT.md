# CONTEXT

## Qué hace

`src/lib` contiene utilidades compartidas.

## Qué problema resuelve

Evita repetir helpers pequeños en componentes y rutas.

## Cómo usarlo

- Importar `cn` desde `@/lib/utils`.
- Usarlo para combinar clases condicionales y resolver conflictos de Tailwind.

## Utilidad actual

`cn(...inputs)` combina `clsx` con `tailwind-merge`.
