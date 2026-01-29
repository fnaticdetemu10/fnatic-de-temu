# FNT TEMU v2 — Sitio web React + Vite

Proyecto web para la comunidad Fnatic de Temu, construido con React y Vite. Incluye secciones de héroe, próximo partido con contador, información del equipo, creadores, comunidad, un footer con enlaces sociales y un menú flotante para navegar entre secciones.

## Características

- Secciones: Hero, Próximo Partido, Sobre el equipo, Plantilla, Creadores, Comunidad, Footer.
- Menú flotante fijo arriba a la derecha con navegación por anclas.
- Footer con enlaces sociales: X, Instagram, YouTube y TikTok.
- Estilo consistente con gradientes oscuros, sombras y acentos naranja.
- Configuración basada en Vite con React 19 y ESLint.

## Requisitos

- Node.js 18+ recomendado.
- npm (o pnpm/yarn, si prefieres adaptar scripts).

## Inicio rápido

1. Instala dependencias:

```bash
npm install
```

2. Entorno de desarrollo (HMR):

```bash
npm run dev
```

3. Construcción para producción:

```bash
npm run build
```

4. Previsualización del build local:

```bash
npm run preview
```

## Navegación y secciones

El menú flotante y los enlaces internos usan anclas de sección:

- `#hero`
- `#next-match`
- `#about`
- `#teams`
- `#creators`
- `#community`

Estas IDs están aplicadas en el layout principal para permitir el scroll hacia cada bloque.

## Enlaces sociales

Los enlaces sociales se muestran tanto en el footer como en el menú flotante. Puedes modificarlos en:

- `src/components/Footer.jsx`
- `src/components/FloatingMenu.jsx`

## Datos y assets

- Próximo partido: `public/data/matches.json` (si se usa en la sección correspondiente).
- Logos y vídeos: `src/assets/` y `public/logos/`.

## Estilo

La estética del sitio se basa en gradientes oscuros, sombras y acentos de marca, manteniendo los fondos y degradados originales.

### Colores y variables

- Color principal de texto: `#111111` → `--color-text-primary`
- Color secundario de texto: `#555555` → `--color-text-secondary`
- Color de acento (CTAs, enlaces, estados activos): `#FF7A18` → `--color-accent`
- Texto sobre fondo oscuro: `#FFFFFF` → `--color-text-on-dark`

Reglas aplicadas:
- No se han modificado fondos ni degradados existentes.
- Se ha sustituido negro puro en tipografía por `#111111`.
- Se ha unificado gris de texto a `#555555` donde aplica.
- Enlaces, botones principales y estados `hover/focus` usan el acento `#FF7A18`.
- El texto largo evita el uso del acento para mantener legibilidad (WCAG AA).

Referencias:
- Variables definidas en `src/index.css`.
- Componentes actualizados para usar `var(--color-...)` en tipografía y elementos interactivos.

## Scripts disponibles

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: crea el bundle de producción.
- `npm run preview`: sirve el build localmente.
- `npm run lint`: ejecuta ESLint sobre el proyecto.
