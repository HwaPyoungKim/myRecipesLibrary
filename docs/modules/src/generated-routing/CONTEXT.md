# CONTEXT

## Qué hace

`src/routeTree.gen.ts` contiene el árbol de rutas generado por TanStack Router.

## Qué problema resuelve

Conecta los archivos de `src/routes` con el router tipado que usa la app.

## Cómo usarlo

- No editarlo manualmente como fuente principal.
- Dejar que TanStack lo regenere durante dev/build.
- Revisar diffs si aparecen cambios inesperados tras crear, borrar o renombrar rutas.

## Relación con el router

`src/router.tsx` importa `routeTree` desde este archivo y crea la instancia de router.
