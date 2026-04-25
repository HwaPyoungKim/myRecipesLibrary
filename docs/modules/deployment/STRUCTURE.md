# STRUCTURE

## Responsabilidad

Describir artefactos y configuracion de publicacion.

## Estructura

```text
vite.config.ts
package.json
package-lock.json
wrangler.jsonc
.output/
├─ public/
│  ├─ .assetsignore
│  └─ assets/
└─ server/
   ├─ index.mjs
   ├─ _ssr/
   └─ _chunks/
.wrangler/
└─ deploy/
```

## Notas

- `.output` se regenera con `npm run build`.
- `.output` esta ignorado por git.
- `dist` puede existir de builds anteriores, pero el build compatible con Vercel/Nitro usa `.output`.
- `.wrangler` puede contener datos locales de deploy de Cloudflare.
- Si algo falla en Vercel, revisar primero `npm run build`, luego `vite.config.ts`, y despues la configuracion del proyecto en Vercel.
