# CONTEXT

## Qué hace

`src/data` contiene el catálogo estático de recetas y los tipos que lo describen.

## Qué problema resuelve

Da a la app una fuente de verdad tipada para listar, filtrar y mostrar recetas sin depender de backend ni base de datos.

## Cómo usarlo

- Agregar recetas en el arreglo `recipes`.
- Usar `Category` y `Difficulty` para mantener valores válidos.
- Usar `getRecipeById` en detalles.
- Usar `getRelatedRecipes` para sugerencias por categoría.

## Consideraciones

Cada receta debe tener `id` único, imagen importada, categoría válida, dificultad válida, tiempos, raciones, descripción, ingredientes, pasos, consejo y flag `featured`.
