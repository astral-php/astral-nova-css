# Tailwind CSS v4 — adaptateur Nova

Pont **CSS-first** (`@theme`) : expose les tokens Nova comme couleurs / rayons / ombres / spacing Tailwind v4.

## Prérequis

- Tailwind CSS **4.x**
- Variables Nova actives (`nova.css` + `data-nova-theme` sur `<html>`)

## Installation

```css
/* resources/css/app.css */
@import "tailwindcss";
@import "../../vendor/astral-php/astral-nova-css/src/integrations/tailwind-v4/theme.css";
```

Dans le HTML : conserver `<link rel="stylesheet" href="/assets/nova/nova.css">` (ou équivalent) pour composants + palettes.

## Usage

```html
<div class="bg-nova-surface text-nova-text p-nova-4 rounded-nova-md gap-nova-3">
  …
</div>
```

## Règles

- Composants UI = classes `nova-*` ; Tailwind = layout dense / dashboards.
- Ne pas importer cet adaptateur dans le bundle cœur `dist/nova.css`.
