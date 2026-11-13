# Changelog

## 1.1.0 — Layout primitives + adaptateurs Tailwind (2026-11-13)

### Ajouté

- `.nova-grid-auto` (+ `-sm` / `-lg`) — CSS Grid `auto-fit` / `minmax` + tokens gap
- `.nova-split` / `.nova-split-reverse` — split 1fr/2fr dès `48rem`
- Adaptateur **Tailwind v3** : `src/integrations/tailwind-v3/preset.cjs`
- Adaptateur **Tailwind v4** : `src/integrations/tailwind-v4/theme.css`

### Ajusté (maquette Starter)

- `.nova-display` : largeur/rythme calés sur le hero + accent `span` (couleur primaire)
- `.nova-hero` : fond surface plus marqué, grille copy/visual rééquilibrée
- `.nova-steps` : bandeau `surface` full-bleed + séparateurs verticaux entre les 3 items
- `.nova-feature-grid` : espacement vertical sous le hero

### Notes

- Pas de grille 12 colonnes.
- Adaptateurs hors bundle `dist/nova.css` (opt-in).

## 1.0.0 — Nova Design stable (2026-11-08)

Premier contrat **stable** de la suite Nova Design (avec `astral-template-nova@1.0.0` et `astral-nova-icons@1.0.0`).

### Stabilisé
- Shell marketing responsive (`nova-header`, menu mobile en flux, `nova-footer`, `nova-steps`).
- App shell off-canvas (`nova-shell-toggle`, `is-nav-open`).
- Motifs marketing + code-window + soft alerts sémantiques + 7 palettes.
- Primitives métier : badges sémantiques, avatar, description-list, auth layout/mark, btn-block.
- Interactions JS : modal, dropdown, tabs, accordion, toast, drawer, header, shell.
- Astral Starter Nova consomme **100 %** Nova (plus de design system `starter-*`).

### Politique 1.x
- Breaking changes → major suivante.
- Adapters Tailwind/Bootstrap : toujours hors scope (post-1.0 optionnel).
- Tag Packagist `1.0.0` dès dépôt GitHub publié.

## 0.9.0-dev — DEV-3 marketing motifs + soft feedback

### Added
- Marketing components: `nova-hero`, `nova-display`, `nova-lead`, `nova-eyebrow`, `nova-watermark`, `nova-float-chip`, `nova-feature-card`, `nova-feature-grid`.
- `nova-code-window` (neutral dark IDE preview usable on every palette).
- Theme Gallery example (`examples/theme-gallery/`) to audit all seven palettes × soft alerts.
- Playground section **Marketing DEV-3**.
- Contract tests for soft-alert colors and marketing registration.
- App ↔ palette mapping documented (`PALETTES-APPS.md`).

### Changed
- Soft alerts (`.nova-alert-*`) now use semantic hue tokens for text (`--nova-danger`, …) instead of `*-contrast` (reserved for solid buttons).
- Palettes retuned to product maquettes: `green` (Starter), `maroon-light` (Forum), `red` (Forge), `indigo` (Website), `blue` (Deploy/Shop), `orange` (Blog).
- Softer elevation tokens (`--nova-shadow-*`) and slightly tighter container width for landing layouts.
- Package metadata bumped to `0.9.0-dev`.

### Validation status
- `npm test` + `npm run build` expected green on the DEV-3 line; browser review via **Nova Lab** (`examples/lab/`) remains required.
- Astral Starter Nova consomme les motifs Accueil ; le playground n’est **plus** miroir produit (hub packages only).
- Next line: see workspace `LIGNE-DEV-4.md` (contrast audit, steps motif, shell tokens, release 0.9).

## 0.9.2-dev — shell responsive (DEV-5)

- `nova-header` / `nova-footer` / `nova-steps` (`shell.css`) — header marketing sticky + menu mobile (toggle, panneau, backdrop).
- `nova-app-shell` off-canvas : `nova-shell-toggle`, `nova-shell-backdrop`, classe `is-nav-open` (plus seulement scroll horizontal).
- JS `createInteractions` : `data-nova-header*` et `data-nova-shell*` + fermeture Escape.
- Exemple `examples/shell-responsive/`.
- Tag Packagist `0.9.0` après DoD DEV-5 (Forum + checklist playground).

## 0.9.1-dev — clôture DEV-4

### Added
- Hub **Nova Lab** (`examples/lab/`) + app **`astral-nova-playground`**.
- Docs `PLAYGROUND.md` (contrôle via l’app Laragon).
- `.nova-code-window--compact` (sans arbre fichiers).
- Audit contraste consigné (`AUDIT-CONTRASTE-DEV-4.md` workspace).

### Decisions
- Typo : rester `system-ui` pour la ligne 0.9.
- Tag Packagist `0.9.0` **après** shell mobile DEV-5.
- Motifs steps / nav burger **reportés** → `LIGNE-DEV-5.md`.

## 0.8.0-dev — Astral integration contracts

### Added
- Formalized the integration contract consumed by Astral Template Nova and Astral Starter Nova without introducing an Astral Core dependency.
- Added the shared `nova-form-group` component contract for reusable form partials.
- Added responsive, reusable error-page styling patterns for HTTP 403, 404, 500 and 503 states.
- Documented asset distribution, theme selection, layout consumption and application-level extension boundaries.
- Added integration documentation and a package-version contract assertion for the 0.8 development line.

### Changed
- Updated NPM, package-lock and Composer package metadata to `0.8.0-dev`.
- Clarified that application-specific `starter-*` styles remain outside the framework-agnostic Nova core.

### Validation status
- JavaScript contract suite: 24 tests expected; rerun result recorded in the workspace changelog.
- CSS lint, Lightning CSS build, PHPUnit consumers and browser integration remain separate validation steps; this development release is not a production certification.

## 0.7.0-dev

### Added
- Reworked Nova Playground as an interactive component and theme reference.
- Added live theme and light/dark/system mode selectors with synchronized palette controls.
- Added examples for buttons, badges, form states, alerts, cards, tables, pagination, tabs, dropdowns, accordions, modals, drawers, toasts and tooltips.
- Added copyable HTML and JavaScript integration snippets.
- Added links to the project documentation and Astral PHP website.
- Added a dedicated Playground guide and browser validation checklist.

### Changed
- Updated package version to `0.7.0-dev`.
- Toast triggers now forward their declared `data-nova-toast-variant` to the toast API.
- Removed outdated Tailwind-ready messaging; framework adapters remain deferred until after 1.0.0.

### Validation note
- Playground is a source-level demonstration and should be served over HTTP to allow native ES module imports.
- Manual browser, keyboard, contrast and assistive-technology checks remain required.


## 0.6.0-dev

### Added
- Shared accessibility stylesheet with skip-link and screen-reader-only utilities.
- Visible keyboard focus defaults and Windows forced-colors support.
- Responsive refinements for navigation, page headers, forms and data tables.
- Explicit invalid and disabled form control states.
- Drawer focus trapping, focus restoration and modal-state semantics.
- Arrow-key navigation for tablists.
- Automated accessibility and responsive source-contract tests.

### Changed
- Main CSS entry point now includes the accessibility layer.
- Package version updated to `0.6.0-dev`.

### Validation note
- These changes improve accessibility foundations but do not constitute WCAG 2.2 AA certification. Contrast, screen-reader and browser audits remain required.


## 0.5.0-dev

- Consolidated NPM package exports for core CSS, themes, components, layouts, utilities and JavaScript modules.
- Added explicit unminified and minified CSS bundle exports.
- Aligned Composer metadata with the Nova asset structure.
- Deferred Tailwind and Bootstrap adapters until after 1.0.0.
- Added automated package and CSS entry-point contract tests.


## 0.4.0-dev — 2026-11-02

### Added
- Optional delegated JavaScript interaction controller with explicit teardown.
- Native dialog modal triggers and close controls.
- Dropdown toggles, outside-click dismissal and Escape handling.
- ARIA tab switching and accordion disclosure behavior.
- Drawer open/close behavior and Escape dismissal.
- Toast API with polite live-region announcements.
- CSS-only focusable tooltips and reduced-motion handling.
- Standalone interaction demo and interaction API documentation.
- Automated interaction API and CSS contract tests.

### Changed
- Package version updated to `0.4.0-dev`.
- JavaScript entry point exports `interactions`, `createInteractions` and `showToast`.

### Notes
- This is a development release; APIs are not yet stable.
- Drawer focus trapping and advanced keyboard tab navigation remain candidates for accessibility hardening before 1.0.

## 0.3.0-dev — 2026-11-02

### Added
- Application shell, responsive sidebar navigation, topbar and page header.
- Breadcrumbs, data tables, pagination and tab styling primitives.
- Standalone admin dashboard example demonstrating Nova Indigo.
- Component contract tests for namespace and semantic-token usage.

### Changed
- Consolidated component imports and removed duplicate layout imports from the core component index.
- Updated package version to `0.3.0-dev`.

### Notes
- Components remain CSS-first. Interactive tabs, dropdowns, modals and drawers are reserved for the JavaScript milestone (0.4).
- This is a development release; public APIs are not yet stable.


## Unreleased — 0.1.0-dev
- Initial repository scaffold.
- Initial seven theme palettes and light/dark mode contract.
- Initial CSS-native components and optional theme JavaScript API.
- Adapter roadmap for Tailwind, Bootstrap and future CSS ecosystems.

## 0.2.0-dev
- Completed the semantic token contract for all seven palettes in light and dark modes.
- Added status surface and contrast tokens.
- Added optional system color-scheme resolution to the theme API.
- Added automated theme contract tests and expanded theme documentation.

