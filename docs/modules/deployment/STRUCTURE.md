# STRUCTURE

## Responsabilidad

Describir artefactos y configuración de publicación.

## Estructura

```text
wrangler.jsonc
dist/
├─ client/
│  ├─ .assetsignore
│  └─ assets/
└─ server/
   ├─ wrangler.json
   └─ assets/
.wrangler/
└─ deploy/
```

## Notas

- `dist` se regenera con `npm run build`.
- `.wrangler` puede contener datos locales de deploy.
- Si algo falla en producción, revisar primero build, then Wrangler config y luego runtime.
