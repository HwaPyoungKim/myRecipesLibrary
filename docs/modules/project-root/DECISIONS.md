# DECISIONS

## Delegar Vite a `@lovable.dev/vite-tanstack-config`

- Decisión: usar `defineConfig` del paquete de Lovable.
- Justificación: agrupa TanStack Start, React, Tailwind, aliases, dedupe y configuración Cloudflare.
- Trade off: hay menos control explícito en `vite.config.ts`; antes de agregar plugins hay que confirmar que no estén incluidos.

## Usar npm como flujo instalado actual

- Decisión: mantener `package-lock.json` como lockfile npm.
- Justificación: la instalación probada se resolvió con npm en Debian/WSL y el árbol quedó sano.
- Trade off: `bun.lockb` puede quedar desactualizado si no se regenera con Bun.

## TypeScript estricto sin emisión

- Decisión: `strict: true` y `noEmit: true`.
- Justificación: Vite se encarga del build y TypeScript valida tipos.
- Trade off: errores de tipos bloquean confianza en cambios aunque no generen JS por sí solos.

## ESLint integrado con Prettier

- Decisión: usar `eslint-plugin-prettier/recommended`.
- Justificación: formato y lint se reportan en un mismo comando.
- Trade off: `npm run lint` falla por formato aunque la app compile.
