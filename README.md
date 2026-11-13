# Astral Nova CSS

**Nova is the CSS engine and shared visual system for Astral applications.** It provides design tokens, color themes, reusable components, layout utilities and optional JavaScript behaviors. It is not a replacement for Tailwind CSS, Bootstrap or another CSS framework.

> Status: **stable `1.0.0`** — suite Nova Design (CSS + Template + Icons). Adapters Tailwind/Bootstrap remain optional / post-1.0.

## Principles

- CSS-native first: core components work without Tailwind, Vite, JavaScript or Astral Core.
- Themes are interchangeable: seven initial palettes (`white`, `blue`, `maroon-light`, `red`, `indigo`, `orange`, `green`) with independent light/dark modes and an optional system-preference resolver.
- Optional adapters: Tailwind and Bootstrap integrations are deferred until after 1.0.0; Nova remains framework-agnostic.
- No framework lock-in: `astral-template` may consume Nova assets, but must remain usable by non-Astral projects.
- Progressive enhancement and accessible interaction patterns.
- Application shell, navigation, tables, pagination and tabs are included as CSS-first components in 0.3. Optional JavaScript interactions (modal, dropdown, tabs, accordion, toast, drawer) are available in 0.4.

## Repository packages

- NPM: `@astral-php/nova-css`
- Composer: `astral-php/astral-nova-css` (ships public assets; no PHP runtime dependency)

## Quick start (source checkout)

```html
<html lang="fr" data-nova-theme="indigo" data-nova-mode="light">
<head>
  <link rel="stylesheet" href="/assets/nova/nova.css">
</head>
<body>
  <main class="nova-container nova-stack">
    <section class="nova-card">
      <h1 class="nova-heading">Hello Nova</h1>
      <p class="nova-text-muted">The visual foundation of Astral.</p>
      <button class="nova-btn nova-btn-primary">Get started</button>
    </section>
  </main>
</body>
</html>
```

The optional interaction module can be initialized with `import { createInteractions } from '@astral-php/nova-css/javascript'; createInteractions();`. It uses delegated events and returns a `destroy()` handle. Release tags ship `dist/` (`nova.css`, `nova.min.css`) for Composer / Packagist consumers; rebuild with `npm run build` when editing sources. For a source-level preview, open `examples/playground/index.html` through a local static server; it loads the CSS source tree directly.

## Theme contract

Set `data-nova-theme` to one of the seven palette identifiers and `data-nova-mode` to `light` or `dark` on the root element. Theme and mode are separate concerns. Applications may override documented semantic custom properties after importing Nova.

## Adapters

Adapters translate or expose Nova design tokens to another styling ecosystem. They must not make the Nova core depend on that ecosystem.

| Adapter | Status | Target |
|---|---|---|
| Tailwind CSS v4 | **1.1.0** opt-in (`src/integrations/tailwind-v4/theme.css`) | CSS-first token bridge |
| Tailwind CSS v3 | **1.1.0** opt-in (`src/integrations/tailwind-v3/preset.cjs`) | Preset / configuration bridge |
| Bootstrap | Deferred | Start with a stable Bootstrap 5.x target; evaluate Bootstrap 6 after stable release |
| Other systems | Research backlog | Evaluate demand and maintenance cost before implementation |

Bootstrap is deliberately not included in the core bundle. Bootstrap 5.3.8 is the current stable 5.x release line in the initial project research; Bootstrap 6 is alpha and must not be treated as a production target yet.

## Nova Playground

A standalone admin dashboard demonstrating the 0.3 application shell is available at `examples/admin-dashboard/index.html`. A dedicated 0.4 interaction demo is available at `examples/interactions/index.html`.

The Nova Playground is the interactive component reference at `examples/playground/index.html`. It demonstrates all seven palettes, light/dark/system modes, core CSS components, JavaScript interactions, and copyable integration snippets. Serve the repository root with a local HTTP server (ES modules are not reliably loaded from `file://`); no production build is required for this source-level preview.

## Release 0.9 DEV-3 marketing motifs

`1.0.0` stabilise marketing (`nova-hero`, `nova-feature-card`, `nova-code-window`), soft alerts, Theme Gallery (7 palettes), shell responsive, et le contrat consommé à 100 % par Astral Starter Nova.

## Release 0.8 Astral integration contracts

`0.8.x-dev` formalized the integration milestone with Astral Starter and Astral Template Nova while keeping Nova independent from Astral Core. It includes the shared form-group contract, reusable responsive error-page patterns (403/404/500/503), and documented asset, theme and component consumption paths.

This remains a development release: the package API and exports are not yet stable, and the consuming application's Composer/PHPUnit/browser checks must be run in its target environment.

## Release 0.6 accessibility and responsive scope

Version 0.6 adds shared accessibility helpers, visible keyboard focus, skip-navigation and screen-reader-only utilities, forced-colors support, reduced-motion safeguards, responsive refinements for navigation and tables, and stronger keyboard behavior for drawers and tabs. These are implementation improvements, not a claim of WCAG 2.2 AA conformance; contrast and assistive-technology validation still require manual and browser-based audits.

## Development

```bash
npm install
npm run build
npm run lint:css
npm run test
```

Composer users can install the package to access the published assets under `vendor/astral-php/astral-nova-css/src/` and copy the source tree (preserving relative paths) to their public assets directory using their own deployment process.

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Specifications](docs/SPECIFICATIONS.md)
- [Themes](docs/THEMES.md)
- [Components](docs/COMPONENTS.md)
- [Accessibility guidance](docs/ACCESSIBILITY.md)
- [Nova Playground](docs/PLAYGROUND.md)
- [Local validation procedure](docs/VALIDATION-0.8.md)
- [Integrations and adapters](docs/INTEGRATIONS.md)
- [Roadmap](docs/ROADMAP.md)
- [Contribution guide](CONTRIBUTING.md)

## License

MIT. See [LICENSE](LICENSE).
