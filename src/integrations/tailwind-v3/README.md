# Tailwind CSS v3 — adaptateur Nova

Preset qui mappe les **tokens sémantiques Nova** vers `theme.extend` (couleurs, rayons, ombres, espacements, polices).

## Prérequis

- Tailwind CSS **3.x**
- CSS Nova chargé dans la page (`nova.css` + `data-nova-theme`)

## Installation

```js
// tailwind.config.js
const novaPreset = require('./vendor/astral-php/astral-nova-css/src/integrations/tailwind-v3/preset.cjs');

module.exports = {
  presets: [novaPreset],
  content: ['./views/**/*.php', './app/**/*.php', './resources/**/*.{js,css}'],
  // …
};
```

## Usage

```html
<div class="bg-nova-surface text-nova-text p-nova-4 rounded-nova-md">
  <!-- layout dense : utilitaires Tailwind -->
  <!-- UI métier : classes nova-* (btn, card, form…) -->
</div>
```

## Règles

- Ne pas réimplémenter les composants Nova en Tailwind.
- Cascade : Nova composants d’abord ; Tailwind pour grilles / dashboards denses.
- Pas de dépendance runtime de Nova vers Tailwind.
