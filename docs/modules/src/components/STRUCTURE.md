# STRUCTURE

## Responsabilidad

Agrupar componentes visibles reutilizables del dominio de la app.

## Estructura

```text
src/components/
├─ Footer.tsx
├─ Navbar.tsx
├─ RecipeCard.tsx
└─ ui/
```

## Notas

- `ui/` es una subbiblioteca de primitivas.
- Los componentes principales importan iconos de `lucide-react`.
- Los estilos se expresan con clases Tailwind y tokens globales.
