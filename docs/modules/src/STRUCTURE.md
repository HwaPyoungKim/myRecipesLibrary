# STRUCTURE

## Responsabilidad

Agrupar el código fuente de la aplicación.

## Estructura

```text
src/
├─ assets/
├─ components/
│  └─ ui/
├─ data/
├─ hooks/
├─ lib/
├─ routes/
├─ router.tsx
├─ routeTree.gen.ts
└─ styles.css
```

## Notas

- `routeTree.gen.ts` se regenera por TanStack.
- `styles.css` es global y afecta a toda la app.
- `router.tsx` centraliza la creación del router y el error boundary por defecto.
