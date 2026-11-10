# Nova accessibility guidance

Nova provides accessibility-oriented defaults and helpers. They are implementation aids, not a guarantee of WCAG conformance. Each application remains responsible for semantic HTML, meaningful labels, correct names/roles/states, content order, contrast, and end-to-end testing.

## Available helpers

- `.nova-skip-link`: place first in the body and point it to the page's main content (for example `href="#main-content"`).
- `.nova-sr-only`: visually hide text while keeping it available to assistive technology.
- `:focus-visible`: shared focus indicator uses `--nova-focus-ring`, `--nova-focus-width` and `--nova-focus-offset`.
- Forced-colors and reduced-motion media queries are respected by the core accessibility layer.
- Drawers opened through `createInteractions()` trap Tab focus, close on Escape and restore focus to their opener.
- Tabs support arrow-key movement when implemented with `role="tablist"`, `data-nova-tab`, `aria-controls` and associated `role="tabpanel"` elements.

## Required application markup

- Set a unique page title and a single clear main landmark (`<main id="main-content">`).
- Associate every form control with a visible `<label>`; use `aria-describedby` for help and error text.
- Set `aria-invalid="true"` only when a control has an error, and expose the error text in the accessibility tree.
- Give icon-only buttons an accessible name.
- Use table captions and proper header cells (`<th scope="col">` / `<th scope="row">`).
- Do not communicate status by color alone.

## Validation before claiming WCAG 2.2 AA

Run automated checks (for example axe-core) and manual keyboard testing. Verify all seven themes in both modes for text, non-text UI, focus indicators and component states. Test at 200% and 400% zoom, narrow viewports, Windows High Contrast / forced-colors, and at least one desktop and one mobile screen reader. Check modal and drawer focus order, announcements, error recovery and touch target sizing. Record exceptions and retest every theme/mode pair.

The 0.6 development release has not undergone this full audit and must not be described as WCAG 2.2 AA compliant.
