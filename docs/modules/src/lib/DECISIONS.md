# DECISIONS

## `clsx` + `tailwind-merge`

- Decisión: `cn` usa ambas librerías.
- Justificación: `clsx` maneja condicionales y `tailwind-merge` resuelve clases Tailwind conflictivas.
- Trade off: cualquier clase no reconocida por Tailwind Merge no será normalizada.

## Mantener utilidades genéricas

- Decisión: `lib` no debe contener lógica de recetas.
- Justificación: separa helpers técnicos del dominio.
- Trade off: si aparece lógica de dominio compartida, conviene crear otra carpeta o módulo.
