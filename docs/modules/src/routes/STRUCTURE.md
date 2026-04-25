# STRUCTURE

## Responsabilidad

Definir páginas, layouts, loaders, validación de búsqueda, metadatos y estados not found.

## Estructura

```text
src/routes/
├─ __root.tsx
├─ index.tsx
├─ recetas.tsx
├─ recetas.$id.tsx
└─ sobre-mi.tsx
```

## Archivos

- `__root.tsx`: shell HTML, metadatos globales, layout, navbar, footer y 404 global.
- `index.tsx`: home.
- `recetas.tsx`: búsqueda, filtros y listado.
- `recetas.$id.tsx`: detalle, loader, not found local y relacionadas.
- `sobre-mi.tsx`: página editorial.
