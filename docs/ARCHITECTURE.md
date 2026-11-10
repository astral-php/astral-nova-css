# Architecture

## Purpose
Nova is the shared CSS engine of the Astral ecosystem. It standardizes visual primitives and reusable UI components while leaving application structure and business logic to consuming projects.

## Layers
1. **Core** — reset, tokens, typography, accessibility defaults.
2. **Themes** — palette selection and independent light/dark modes.
3. **Components** — semantic, reusable UI patterns.
4. **Utilities** — small layout and spacing helpers; not a utility-framework clone.
5. **JavaScript** — optional progressive enhancement for interactive components.
6. **Integrations** — optional bridges to Tailwind, Bootstrap and other ecosystems.

## Dependency direction
- `astral-nova-css` has no dependency on Astral Core or `astral-template`.
- `astral-template` may depend on Nova assets for its default Astral presentation, but remains installable and usable without Astral Core.
- Applications may consume Nova directly or through `astral-template`.
- Adapters depend on Nova tokens; Nova core never depends on an adapter.

## Naming contract
- CSS classes: `nova-*`
- CSS custom properties: `--nova-*`
- HTML data attributes: `data-nova-*`
- JavaScript global/module namespace: `Nova`

## Theme contract
The root element declares `data-nova-theme="indigo"` and `data-nova-mode="light"`. Themes provide semantic variables such as `--nova-primary`, `--nova-surface`, `--nova-text` and `--nova-border`. Components consume semantic variables only.

## Build strategy
Source CSS is modular. The release build compiles/minifies with Lightning CSS into distributable bundles. The runtime CSS has no JavaScript dependency.
