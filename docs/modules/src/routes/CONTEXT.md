# CONTEXT

## Qué hace

`src/routes` define las pantallas y el comportamiento de navegación mediante TanStack Router.

## Qué problema resuelve

Convierte archivos en rutas, mantiene el estado de filtros en la URL y permite loaders server/client para cargar datos antes de renderizar.

## Cómo usarlo

- Agregar una nueva página creando un archivo de ruta.
- Usar `createFileRoute` para rutas normales.
- Usar `createRootRoute` para el layout global.
- Usar `loader` para resolver datos necesarios antes del render.
- Usar `head` para metadatos SEO por página.

## Rutas actuales

- `/`: home con hero, recetas destacadas, categorías y bloque sobre Olivia.
- `/recetas`: listado con búsqueda y filtros.
- `/recetas/$id`: detalle de receta con loader y recetas relacionadas.
- `/sobre-mi`: página editorial sobre la autora/marca.
