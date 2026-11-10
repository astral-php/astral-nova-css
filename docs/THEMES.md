# Nova Themes — 0.2

## Theme identifiers

`white`, `blue`, `maroon-light`, `red`, `indigo`, `orange`, `green`.

## Independent dimensions

```html
<html data-nova-theme="indigo" data-nova-mode="light">
```

- `data-nova-theme` selects the brand palette.
- `data-nova-mode` selects the resolved color mode (`light` or `dark`).
- `data-nova-mode-preference="system"` records an optional system preference selected through the JavaScript API.

Theme and mode are independent. Do not create separate theme identifiers for dark variants.

## Semantic token contract

Every palette must define the following tokens in both light and dark modes:

- Brand: `--nova-primary`, `--nova-primary-hover`, `--nova-primary-contrast`, `--nova-primary-soft`, `--nova-focus-ring`.
- Surfaces: `--nova-background`, `--nova-surface`, `--nova-surface-hover`, `--nova-border`.
- Text: `--nova-text`, `--nova-text-muted`.
- Status: `--nova-success`, `--nova-success-soft`, `--nova-success-contrast`, `--nova-warning`, `--nova-warning-soft`, `--nova-warning-contrast`, `--nova-danger`, `--nova-danger-soft`, `--nova-danger-contrast`, `--nova-info`, `--nova-info-soft`, `--nova-info-contrast`.

Each light selector explicitly declares `color-scheme: light`; each dark selector declares `color-scheme: dark`.

## JavaScript API

```js
Nova.theme.set('indigo');
Nova.theme.setMode('dark');   // explicit mode
Nova.theme.setMode('system'); // resolve from prefers-color-scheme
Nova.theme.get();
Nova.theme.getMode();
Nova.theme.getModePreference();
```

The API does not persist preferences automatically. Applications remain responsible for storage, consent and user-account synchronization.

## Custom application overrides

Applications may override documented semantic variables in a scoped selector. Do not fork component styles merely to change an application's brand color.

## Accessibility and contrast

Every theme/mode pair must be measured for normal text (4.5:1), large text (3:1), meaningful UI boundaries and focus indicators. Status colors must not be communicated by color alone. Automated checks are required, but visual and assistive-technology review remains necessary.

Palette values are design candidates until the full contrast matrix is measured and signed off.
