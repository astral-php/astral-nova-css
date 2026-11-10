# Components

## Initial component contract
Components use semantic classes and CSS variables. They must remain usable without Nova JavaScript unless the component is inherently interactive.

| Component | Classes | Notes |
|---|---|---|
| Button | `nova-btn`, `nova-btn-primary`, `nova-btn-secondary`, `nova-btn-danger` | Native button semantics |
| Card | `nova-card` | Surface, border and radius tokens |
| Form control | `nova-form-group`, `nova-label`, `nova-input`, `nova-select`, `nova-textarea`, `nova-help`, `nova-error` | Group related controls; associate labels and errors in HTML |
| Badge | `nova-badge`, `nova-badge-success` etc. | Status text must not rely on color alone |
| Alert | `nova-alert`, `nova-alert-info/success/warning/danger` | Use suitable role/live region in markup |
| Layout | `nova-container`, `nova-stack`, `nova-cluster` | Small compositional primitives |
| Marketing hero | `nova-hero`, `nova-hero-inner`, `nova-hero-copy`, `nova-hero-visual`, `nova-watermark`, `nova-float-chip` | Landing motifs; theme tokens only |
| Feature card | `nova-feature-card`, `nova-feature-grid` | Navigable marketing cards with soft icon surface |
| Code window | `nova-code-window` | Neutral dark IDE preview (usable on every palette) |
| Typography | `nova-display`, `nova-lead`, `nova-eyebrow` | Marketing scale helpers |

### Soft feedback rule (DEV-3)
Alert soft surfaces (`.nova-alert-*`) must use the semantic hue (`--nova-danger`, `--nova-warning`, …) for text color.  
`*-contrast` tokens remain reserved for solid filled buttons (primary / danger).

## Component authoring rules
- No theme-specific selectors inside component styles.
- No implicit semantic changes to native elements.
- Provide hover, active, focus-visible and disabled states where applicable.
- Avoid using color as the only status signal.
- Prefer native HTML semantics and progressive enhancement.


## 0.3 application components

| Component | Classes | Contract |
|---|---|---|
| Application shell | `nova-app-shell`, `nova-sidebar`, `nova-main`, `nova-shell-toggle` | Two-column desktop; off-canvas sidebar under 64rem (`data-nova-shell`, `is-nav-open`). |
| Marketing header | `nova-header`, `nova-nav-toggle`, `nova-header-panel` | Sticky marketing nav with mobile panel (`data-nova-header`). |
| Steps | `nova-steps`, `nova-step` | Numbered principle / step grid (Starter « Le minimum »). |
| Top bar and page | `nova-topbar`, `nova-page`, `nova-page-header`, `nova-page-title` | Structural wrappers only; applications own their content and actions. |
| Navigation | `nova-nav`, `nova-nav-link`, `nova-nav-section` | Use links for navigation and `aria-current="page"` for the current page. |
| Breadcrumbs | `nova-breadcrumbs` | Use a labelled `nav` and mark the current item with `aria-current="page"`. |
| Tables | `nova-table-wrap`, `nova-table` | Use native table markup, scoped headers and a caption. |
| Pagination | `nova-pagination`, `nova-pagination-list`, `nova-pagination-link` | Use a labelled `nav`; mark the current page and expose unavailable links with `aria-disabled`. |
| Tabs | `nova-tabs`, `nova-tab-list`, `nova-tab`, `nova-tab-panel` | CSS presentation only in 0.3; keyboard and panel switching behavior belongs to the 0.4 JS module. |

All components consume semantic `--nova-*` tokens and avoid palette-specific selectors. The example at `examples/admin-dashboard/index.html` is a standalone HTML demonstration and does not require Astral Core.

## JavaScript interactions (0.4)

Import the optional module with `import { createInteractions } from '@astral-php/nova-css/javascript';` and call `createInteractions()` once after the document is available. It uses delegated events; retain the returned handle and call `destroy()` when the owning page/view is disposed.

| Feature | HTML contract |
|---|---|
| Modal | Native `<dialog>` with `data-nova-modal-open="dialog-id"` and `data-nova-modal-close` |
| Dropdown | `data-nova-dropdown` wrapper and `data-nova-dropdown-toggle` button |
| Tabs | `role="tablist"`, `data-nova-tab`, `aria-controls`, and associated `role="tabpanel"` elements |
| Accordion | `data-nova-accordion`, `aria-controls`, and a panel whose `hidden` state is managed |
| Drawer | `data-nova-drawer` panel with an ID, `data-nova-drawer-open="panel-id"`, and `data-nova-drawer-close` |
| Toast | `data-nova-toast="message"` or `Nova.interactions.toast(message, options)` |
| Tooltip | CSS-only `data-nova-tooltip="message"` on a focusable element with `nova-tooltip` |

The module supports Escape to close open dropdowns, drawers and native dialogs. Native dialog semantics are preferred for modal focus management. Applications should ensure drawer content has an accessible name and provide a visible close control. Tabs and accordions must retain their ARIA relationships. `showToast()` creates a polite live region; danger notifications use `role="alert"`.

All interaction behavior is opt-in. CSS remains usable without JavaScript; controls should be hidden or disabled by the application when an interaction is essential and JavaScript is unavailable.
