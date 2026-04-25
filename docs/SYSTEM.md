# SYSTEM.md

## Propósito del proyecto

Aplicación web server-rendered para presentar una biblioteca personal de recetas llamada `Mesa de Olivia`. Permite:

- descubrir recetas destacadas desde la página inicial;
- explorar el recetario completo;
- filtrar recetas por categoría, dificultad y tiempo total;
- buscar recetas por título;
- abrir páginas de detalle con ingredientes, pasos, tiempos, raciones, dificultad y consejos;
- navegar a recetas relacionadas por categoría;
- conocer la historia editorial de la marca en la página `Sobre mí`.

El dominio actual está centrado en recetas caseras en español, con foco visual en cocina mediterránea, panadería, desayunos, almuerzos, cenas y postres.

## Arquitectura general

El proyecto usa TanStack Start sobre Vite, React y TypeScript. La aplicación está organizada por carpetas funcionales dentro de `src`:

- `routes`: páginas y loaders con file-based routing de TanStack Router.
- `components`: componentes compartidos del layout y tarjetas de recetas.
- `components/ui`: biblioteca de componentes base estilo shadcn/Radix.
- `data`: modelo de receta, datos estáticos y funciones de consulta.
- `assets`: imágenes importadas por Vite y servidas como assets optimizados.
- `hooks`: hooks reutilizables de React.
- `lib`: utilidades compartidas.
- `styles.css`: tema global, tokens CSS y configuración Tailwind.
- `routeTree.gen.ts`: árbol de rutas generado por TanStack.

En la raíz del proyecto viven la configuración de build, TypeScript, ESLint, shadcn, Wrangler/Cloudflare y los lockfiles.

## Vista de interacción entre módulos

Flujo principal:

```text
HTTP request
-> TanStack Start SSR/runtime
-> src/router.tsx
-> src/routeTree.gen.ts
-> src/routes
-> src/data/recipes.ts
-> src/components / src/components/ui
-> src/assets + src/styles.css
-> HTML renderizado y bundle cliente
```

Activos transversales:

- `src/data/recipes.ts` define el contrato de receta que consumen páginas y componentes.
- `src/routes/__root.tsx` configura shell HTML, metadatos globales, layout, navbar, footer y 404.
- `src/components/RecipeCard.tsx` es el componente común para listar recetas en home, listado y relacionadas.
- `src/styles.css` concentra tokens de color, tipografía, radios, sombras y tema oscuro.
- `vite.config.ts` delega la configuración compleja a `@lovable.dev/vite-tanstack-config`.

## Módulos principales

### `routes`

Contiene las páginas de la aplicación. Usa rutas por archivo: `/`, `/recetas`, `/recetas/$id` y `/sobre-mi`. También define loaders, metadatos SEO y validación de query params.

### `components`

Contiene elementos reutilizables de producto: `Navbar`, `Footer` y `RecipeCard`.

### `components/ui`

Contiene componentes base de UI generados o mantenidos al estilo shadcn, apoyados en Radix UI, Tailwind y utilidades compartidas.

### `data`

Contiene el modelo `Recipe`, enums de categoría/dificultad, el arreglo estático de recetas y helpers como `getRecipeById` y `getRelatedRecipes`.

### `assets`

Contiene imágenes JPG usadas por home, about, cards y detalle de recetas. Se importan desde TypeScript para que Vite las procese.

### `hooks`

Contiene hooks reutilizables. Actualmente expone `useIsMobile` para detectar viewport móvil.

### `lib`

Contiene utilidades compartidas. Actualmente expone `cn`, que combina `clsx` con `tailwind-merge`.

### Configuración raíz

Incluye scripts npm, TypeScript, ESLint, shadcn, Vite/TanStack, Cloudflare Wrangler y lockfiles.

## Cómo interactúan entre sí

### Inicio

- `src/routes/index.tsx` selecciona recetas destacadas desde `recipes`.
- Renderiza hero, categorías y extracto de about.
- Usa imágenes de `assets` y `RecipeCard` para las tarjetas.

### Exploración de recetas

- `src/routes/recetas.tsx` valida los parámetros de búsqueda con `@tanstack/zod-adapter` y `zod`.
- Lee `q`, `category`, `difficulty` y `time` desde la URL.
- Filtra el arreglo estático `recipes` en memoria.
- Actualiza los filtros con `useNavigate`, manteniendo el estado en query params.

### Detalle de receta

- `src/routes/recetas.$id.tsx` usa un loader para resolver la receta por `id`.
- Si no existe, lanza `notFound`.
- Muestra ingredientes, pasos, consejo, estadísticas y recetas relacionadas por categoría.

### Layout global

- `src/routes/__root.tsx` crea el shell HTML.
- Inserta `HeadContent`, `Scripts`, `Navbar`, `Footer` y el `Outlet`.
- Define metadatos globales y enlaces a fuentes externas.

### Estilos y UI

- `src/styles.css` importa Tailwind y define tokens CSS.
- Los componentes usan clases Tailwind y variables CSS como `--shadow-soft` y `--color-primary`.
- Los componentes de `components/ui` son piezas base reutilizables para crecer la interfaz.

### Build y despliegue

- `npm run dev` levanta Vite en modo desarrollo.
- `npm run build` genera cliente y SSR en `dist`.
- `wrangler.jsonc` prepara el runtime para Cloudflare Workers con `nodejs_compat`.

## Decisiones transversales relevantes

- La UI es server-rendered con TanStack Start, no una SPA pura.
- El routing es file-based con TanStack Router.
- El contenido de recetas vive en datos estáticos, no en base de datos.
- La validación de query params de `/recetas` se hace con Zod 3 para ser compatible con `@tanstack/zod-adapter`.
- Las imágenes se importan desde `src/assets` para que Vite gestione rutas y hashes.
- El diseño usa Tailwind CSS v4 con tokens CSS centralizados.
- La configuración Vite se delega a `@lovable.dev/vite-tanstack-config`; no se deben duplicar plugins que ya vienen incluidos.

## Flujos funcionales clave

### Visitante

1. Entra a la home.
2. Revisa recetas destacadas o categorías.
3. Abre el recetario completo.
4. Filtra por categoría, dificultad o duración.
5. Abre el detalle de una receta.
6. Consulta ingredientes, pasos y recetas relacionadas.

### Editor del proyecto

1. Agrega una imagen en `src/assets`.
2. Crea o actualiza una entrada en `src/data/recipes.ts`.
3. Marca `featured` si debe aparecer en la home.
4. Verifica que `category` y `difficulty` coincidan con los tipos.
5. Ejecuta build y lint antes de publicar.

## Alcance actual y bordes a tener en cuenta

- No hay autenticación, favoritos persistentes, creación de recetas por usuario ni backend.
- No hay base de datos; todo el catálogo está en `src/data/recipes.ts`.
- `routeTree.gen.ts` es generado; evitar editarlo manualmente salvo que se entienda el impacto.
- `dist` es salida de build y no debe usarse como fuente de verdad.
- Existe `bun.lockb`, pero el flujo operativo actual probado usa npm y `package-lock.json`.
- Hay textos en archivos fuente con caracteres mojibake; revisar codificación antes de hacer cambios amplios de copy.
- `npm run lint` puede fallar por formato Prettier existente aunque `npm run build` pase.
