# STRUCTURE

## Responsabilidad

Registrar rutas generadas y tipos asociados para TanStack Router.

## Estructura

```text
src/
├─ router.tsx
└─ routeTree.gen.ts
```

## Notas

- `routeTree.gen.ts` se actualiza automáticamente.
- `router.tsx` contiene `DefaultErrorComponent`.
- La declaración de módulo de TanStack Start puede agregarse al archivo generado durante build.
