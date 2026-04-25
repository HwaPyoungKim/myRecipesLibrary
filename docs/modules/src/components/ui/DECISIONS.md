# DECISIONS

## shadcn/Radix como base

- Decisión: usar componentes estilo shadcn con Radix UI.
- Justificación: accesibilidad y patrones probados para UI compleja.
- Trade off: algunos componentes exportan helpers además de componentes, lo que genera warnings de React Refresh.

## Tailwind y CSS variables

- Decisión: los componentes dependen de tokens globales y clases Tailwind.
- Justificación: permite tema consistente y cambios visuales centralizados.
- Trade off: cambios en `styles.css` pueden alterar muchos componentes a la vez.

## Mantener primitivas genéricas

- Decisión: `ui` no debe conocer recetas ni copy de producto.
- Justificación: mantiene reutilización real.
- Trade off: componentes de dominio deben envolver estas primitivas cuando haga falta.
