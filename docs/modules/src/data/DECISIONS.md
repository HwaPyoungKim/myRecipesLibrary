# DECISIONS

## Datos en TypeScript

- Decisión: representar recetas como objetos TypeScript.
- Justificación: permite tipos, imports de imágenes y validación en build.
- Trade off: no permite edición dinámica sin modificar código.

## Categorías y dificultades como unions

- Decisión: usar tipos literales para `Category` y `Difficulty`.
- Justificación: evita valores inconsistentes en filtros y tarjetas.
- Trade off: agregar una categoría requiere actualizar tipos, arrays y schema de búsqueda.

## Helpers simples

- Decisión: usar funciones en memoria como `getRecipeById`.
- Justificación: el dataset es pequeño y estático.
- Trade off: si el catálogo crece mucho o pasa a API, habrá que cambiar la estrategia.
