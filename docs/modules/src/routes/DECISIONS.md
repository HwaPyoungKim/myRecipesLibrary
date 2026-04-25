# DECISIONS

## File-based routing

- Decisión: cada archivo representa una ruta.
- Justificación: mantiene rutas cerca de su UI y reduce configuración manual.
- Trade off: renombrar archivos cambia rutas y puede afectar links existentes.

## Filtros en query params

- Decisión: `/recetas` guarda filtros en la URL.
- Justificación: permite compartir links con estado de búsqueda.
- Trade off: cada filtro necesita validación y valores por defecto.

## Zod 3 para validar búsqueda

- Decisión: usar Zod 3 con `@tanstack/zod-adapter`.
- Justificación: el adapter actual declara peer dependency sobre Zod 3.
- Trade off: no usar APIs exclusivas de Zod 4 mientras siga esa versión del adapter.

## Loader para detalle

- Decisión: resolver receta por `id` en el loader de `/recetas/$id`.
- Justificación: centraliza not found y metadatos dependientes de datos.
- Trade off: si el origen de datos pasa a API, el loader será el punto de integración.
