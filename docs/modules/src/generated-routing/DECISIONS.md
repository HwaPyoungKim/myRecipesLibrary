# DECISIONS

## Archivo generado versionable

- Decisión: mantener el árbol generado en el repo.
- Justificación: TanStack Router lo usa para tipado y registro de rutas.
- Trade off: los builds pueden modificarlo y generar diffs no escritos a mano.

## Router centralizado

- Decisión: `src/router.tsx` crea el router con `routeTree`.
- Justificación: concentra error boundary, scroll restoration y opciones globales.
- Trade off: cambios globales del router impactan todas las rutas.
