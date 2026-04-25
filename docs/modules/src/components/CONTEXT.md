# CONTEXT

## Qué hace

`src/components` contiene componentes de producto reutilizables: navegación, footer y tarjeta de receta.

## Qué problema resuelve

Evita repetir UI en rutas distintas y mantiene una experiencia consistente entre home, listado y detalle.

## Cómo usarlo

- Importar `Navbar` y `Footer` desde el root layout.
- Importar `RecipeCard` cuando se necesite listar recetas.
- Pasar a `RecipeCard` un objeto `Recipe` completo desde `src/data/recipes.ts`.

## Componentes actuales

- `Navbar`: navegación responsive y estado de menú móvil.
- `Footer`: marca, links y accesos sociales.
- `RecipeCard`: resumen clicable de receta con imagen, categoría, tiempo, raciones y dificultad.
