/**
 * Astral Nova — preset Tailwind CSS v3
 *
 * Usage (tailwind.config.js) :
 *   const nova = require('…/astral-nova-css/src/integrations/tailwind-v3/preset.cjs');
 *   module.exports = { presets: [nova], content: […], … };
 *
 * Les utilitaires Tailwind comblent le layout dense ; les composants UI restent en classes nova-*.
 * Charger le CSS Nova (thème / data-nova-theme) avant les utilities Tailwind.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        nova: {
          primary: 'var(--nova-primary)',
          'primary-hover': 'var(--nova-primary-hover)',
          'primary-contrast': 'var(--nova-primary-contrast)',
          'primary-soft': 'var(--nova-primary-soft)',
          background: 'var(--nova-background)',
          surface: 'var(--nova-surface)',
          'surface-hover': 'var(--nova-surface-hover)',
          text: 'var(--nova-text)',
          muted: 'var(--nova-text-muted)',
          border: 'var(--nova-border)',
          focus: 'var(--nova-focus-ring)',
          success: 'var(--nova-success)',
          warning: 'var(--nova-warning)',
          danger: 'var(--nova-danger)',
          info: 'var(--nova-info)',
        },
      },
      fontFamily: {
        nova: 'var(--nova-font-family)',
        'nova-mono': 'var(--nova-font-mono)',
      },
      borderRadius: {
        'nova-sm': 'var(--nova-radius-sm)',
        'nova-md': 'var(--nova-radius-md)',
        'nova-lg': 'var(--nova-radius-lg)',
        'nova-xl': 'var(--nova-radius-xl)',
      },
      boxShadow: {
        'nova-sm': 'var(--nova-shadow-sm)',
        'nova-md': 'var(--nova-shadow-md)',
        'nova-lg': 'var(--nova-shadow-lg)',
      },
      spacing: {
        'nova-1': 'var(--nova-space-1)',
        'nova-2': 'var(--nova-space-2)',
        'nova-3': 'var(--nova-space-3)',
        'nova-4': 'var(--nova-space-4)',
        'nova-5': 'var(--nova-space-5)',
        'nova-6': 'var(--nova-space-6)',
        'nova-8': 'var(--nova-space-8)',
        'nova-10': 'var(--nova-space-10)',
        'nova-12': 'var(--nova-space-12)',
      },
    },
  },
};
