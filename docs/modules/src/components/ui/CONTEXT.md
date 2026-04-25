# CONTEXT

## Qué hace

`src/components/ui` contiene componentes base reutilizables generados o mantenidos con el estilo shadcn/ui.

## Qué problema resuelve

Provee primitivas consistentes para formularios, diálogos, menús, botones, cards, tablas, tabs, tooltips y otros patrones comunes sin rediseñarlos en cada pantalla.

## Cómo usarlo

- Importar desde `@/components/ui/<componente>`.
- Combinar con `cn` desde `@/lib/utils` cuando se necesite mezclar clases.
- Mantener las APIs lo más cercanas posible a shadcn/Radix para facilitar actualizaciones.

## Alcance actual

Hay muchos componentes disponibles aunque la app actual use pocos. Sirven como base para futuras funcionalidades como edición de recetas, favoritos, formularios o paneles.
