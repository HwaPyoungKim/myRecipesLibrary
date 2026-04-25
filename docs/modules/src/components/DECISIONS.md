# DECISIONS

## Componentes de producto separados de `ui`

- Decisión: dejar `Navbar`, `Footer` y `RecipeCard` fuera de `components/ui`.
- Justificación: son componentes con dominio de recetas, no primitivas genéricas.
- Trade off: si se vuelven muy grandes, conviene crear subcarpetas por componente.

## Navegación con `Link` de TanStack Router

- Decisión: usar `Link` en vez de anchors internos.
- Justificación: conserva tipado y comportamiento del router.
- Trade off: rutas externas sí deben seguir usando `<a>`.

## `RecipeCard` recibe el modelo completo

- Decisión: pasar `Recipe`, no props sueltas.
- Justificación: mantiene la tarjeta alineada con el contrato de datos.
- Trade off: la tarjeta queda acoplada al modelo de receta.
