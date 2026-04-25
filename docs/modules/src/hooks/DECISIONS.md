# DECISIONS

## Breakpoint móvil centralizado

- Decisión: `useIsMobile` usa `768px`.
- Justificación: coincide con el breakpoint `md` de Tailwind.
- Trade off: si cambia el sistema responsive, hay que actualizar este valor.

## Estado inicial indefinido convertido a boolean

- Decisión: devolver `!!isMobile`.
- Justificación: evita que consumidores manejen `undefined`.
- Trade off: durante SSR/hidratación el primer valor será `false`.
