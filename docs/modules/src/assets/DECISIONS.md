# DECISIONS

## Importar imágenes desde TypeScript

- Decisión: usar imports como `import heroImg from "@/assets/hero.jpg"`.
- Justificación: Vite resuelve, optimiza nombres y evita rutas rotas.
- Trade off: cambiar una imagen requiere pasar por build.

## JPG para contenido fotográfico

- Decisión: usar JPG para fotos de recetas.
- Justificación: buen formato para fotografía y compatible con el flujo actual.
- Trade off: no hay optimización responsive avanzada por formato todavía.

## Assets dentro de `src`

- Decisión: mantener imágenes cerca del código que las consume.
- Justificación: hace visibles las dependencias de build.
- Trade off: no funciona como carpeta pública arbitraria.
