# STRUCTURE

## Responsabilidad

Contener la configuración global del proyecto y los contratos de herramientas.

## Estructura

```text
.
├─ package.json
├─ package-lock.json
├─ bun.lockb
├─ bunfig.toml
├─ vite.config.ts
├─ tsconfig.json
├─ eslint.config.js
├─ components.json
├─ wrangler.jsonc
├─ README.md
└─ src/
```

## Notas

- `dist/` es generado por build.
- `.wrangler/` es estado/config generado por Wrangler.
- `node_modules/` es dependencia instalada, no fuente del proyecto.
