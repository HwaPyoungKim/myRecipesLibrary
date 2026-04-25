# CONTEXT

## Qué hace

La raíz del proyecto contiene la configuración, scripts, lockfiles y archivos de integración que permiten desarrollar, construir, lintar y desplegar la aplicación.

## Qué problema resuelve

Centraliza las decisiones técnicas que no pertenecen a una pantalla concreta: dependencias, alias, TypeScript, ESLint, Tailwind/shadcn, Vite/TanStack Start y Cloudflare Workers.

## Cómo usarlo

- Instalar dependencias con `npm install`.
- Ejecutar desarrollo con `npm run dev`.
- Generar producción con `npm run build`.
- Revisar lint y formato con `npm run lint`.
- Ajustar dependencias en `package.json` y regenerar `package-lock.json`.

## Archivos relevantes

- `package.json`: scripts y dependencias.
- `package-lock.json`: lockfile de npm.
- `bun.lockb` y `bunfig.toml`: lock/config de Bun heredados.
- `vite.config.ts`: entrada de configuración Vite/TanStack.
- `tsconfig.json`: configuración TypeScript y alias `@/*`.
- `eslint.config.js`: reglas ESLint, React Hooks, React Refresh y Prettier.
- `components.json`: configuración de shadcn/ui.
- `wrangler.jsonc`: configuración Cloudflare Workers.
