# STRUCTURE

## Responsabilidad

Contener hooks compartidos.

## Estructura

```text
src/hooks/
└─ use-mobile.tsx
```

## Notas

- Los hooks que usen `window` deben ejecutarse dentro de efectos.
- Evitar meter componentes visuales en esta carpeta.
