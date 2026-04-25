# DECISIONS

## Alias `@/*`

- Decisión: usar `@/` para imports desde `src`.
- Justificación: evita rutas relativas largas.
- Trade off: las herramientas deben respetar `tsconfig.json` y la configuración Vite.

## Separación por responsabilidad

- Decisión: rutas, componentes, datos, hooks, lib y assets viven en carpetas separadas.
- Justificación: facilita encontrar dónde modificar contenido, UI o comportamiento.
- Trade off: para cambios pequeños puede requerir saltar entre varios archivos.

## Datos estáticos dentro de `src`

- Decisión: mantener recetas como TypeScript importable.
- Justificación: da tipos fuertes, autocompletado e integración directa con imágenes.
- Trade off: editar contenido requiere rebuild y redeploy.
