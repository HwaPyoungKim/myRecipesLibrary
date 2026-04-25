# STRUCTURE

## Responsabilidad

Describir artefactos y configuracion de publicacion.

## Estructura

```text
vite.config.ts
package.json
package-lock.json
wrangler.jsonc
.vercel/
└─ output/
   ├─ config.json
   ├─ static/
   │  ├─ .assetsignore
   │  └─ assets/
   └─ functions/
      └─ __server.func/
         ├─ .vc-config.json
         └─ index.mjs
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

- `.vercel/output` se regenera con `npm run build`.
- `.vercel/output` no debe editarse manualmente.
- `.output` o `dist` pueden existir de builds anteriores, pero el build compatible con Vercel/Nitro usa `.vercel/output`.
- `.wrangler` puede contener datos locales de deploy de Cloudflare.
- Si algo falla en Vercel, revisar primero `npm run build`, luego `vite.config.ts`, y despues la configuracion del proyecto en Vercel.
