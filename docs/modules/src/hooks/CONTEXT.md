# CONTEXT

## Qué hace

`src/hooks` agrupa hooks reutilizables de React.

## Qué problema resuelve

Permite extraer lógica de estado o navegador que puede repetirse en componentes.

## Cómo usarlo

- Importar hooks desde `@/hooks/...`.
- Mantenerlos sin dependencia directa del dominio cuando sea posible.
- Usar `useEffect` para APIs de navegador, cuidando SSR.

## Hook actual

`useIsMobile` detecta si el viewport está por debajo de `768px`.
