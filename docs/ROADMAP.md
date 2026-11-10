# Roadmap

## 0.1.0-dev — Foundation
- Initial repository structure, seven palettes, foundational components and standalone Playground.

## 0.2.0-dev — Theme engine hardening
- Complete semantic token contract across seven palettes and both modes.
- Explicit light/dark color-scheme declarations.
- System color preference support through optional JavaScript API.
- Theme contract tests and updated documentation.
- Status surface tokens for accessible alert variants.

## 0.3.0-dev — Component coverage
- Expand foundational components and states.
- Add keyboard and accessibility tests for interactive components.

## 0.4.0-dev — JavaScript interactions
- Modal, dropdown, tabs, accordion, toast and drawer modules.

## Revised release sequence

- **0.5.0-dev — Consolidation:** package metadata, CSS entry points, build contract and automated checks.
- **0.6.0-dev — Accessibility and responsive validation:** keyboard, focus, reduced motion, contrast and narrow viewports.
- **0.7.0-dev — Documentation and Playground:** interactive component reference, live themes, integration snippets and browser checklist.
- **0.8.0-dev — Astral integration contracts (current development milestone):** Astral Starter and Astral Template Nova consumption without coupling Nova to Astral Core; shared form-group and error-page contracts; documented asset/theme integration boundaries.
- **0.9.0 — Release candidate:** compatibility matrix, regression suite and release packaging.
- **1.0.0 — Stable core:** framework-agnostic CSS/JS and Composer/NPM distribution.
- **After 1.0.0:** optional Tailwind v3/v4 and Bootstrap 5 adapters, maintained separately from the core.

## 0.4.0-dev — JavaScript interactions
- Delegated, opt-in interaction controller with explicit teardown.
- Native dialog modal controls, dropdowns, ARIA tabs, accordions and drawers.
- Toast API with live-region announcements and CSS-only tooltips.
- Semantic-token interaction styles, reduced-motion support and a standalone demo.
- Automated API and CSS contract tests.


## Revised release sequence

- **0.5** — consolidation: package metadata, CSS entry points, build contract and automated checks.
- **0.6** — accessibility and responsive validation (keyboard, focus, reduced motion, contrast, narrow viewports).
- **0.7** — documentation and Nova Playground completion.
- **0.8** — Astral Starter and astral-template integration contracts.
- **0.9** — release candidate, compatibility matrix and regression testing.
- **1.0.0** — stable framework-agnostic CSS/JS core and Composer/NPM distribution.
- **After 1.0.0** — optional Tailwind v3/v4 and Bootstrap 5 adapters, maintained separately from the core.


## 0.6.0-dev — Accessibility and responsive hardening
- Add skip-link and visually-hidden utilities, focus-visible defaults and forced-colors support.
- Improve reduced-motion behavior and small-viewport layouts for navigation, forms and tables.
- Add keyboard focus trapping/restoration for drawers and arrow-key navigation for tabs.
- Add source-contract tests for accessibility and responsive behavior.
- WCAG 2.2 AA remains a target; no conformance claim is made before contrast, browser and assistive-technology audits.
