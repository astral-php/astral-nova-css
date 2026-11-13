# Integrations and adapters

## Adapter philosophy
Adapters are optional compatibility layers. They expose Nova tokens or map an ecosystem's conventions to Nova. They must not duplicate the full component library or introduce a runtime dependency into Nova core.

## Available adapters (1.1)

### Tailwind CSS v4
CSS-first token bridge : `src/integrations/tailwind-v4/theme.css` (`@theme`). Tailwind utilities remain optional layout helpers; Nova component classes remain the canonical component API.

### Tailwind CSS v3
Preset bridge : `src/integrations/tailwind-v3/preset.cjs`. Do not assume v3 and v4 share the same configuration model.

### Bootstrap — later release
Bootstrap is explicitly part of the adapter roadmap, not the initial core. Start by targeting the stable Bootstrap 5.3 line and test CSS namespace/cascade interactions. Evaluate Bootstrap 6 only after its stable release and browser-support requirements are understood. Do not load Bootstrap and Nova component CSS indiscriminately: document which system owns each component to prevent collisions and duplicate styles.

### Future candidates
Bulma, Foundation and other widely used systems may be evaluated based on community demand, maintenance cost and the quality of their theming APIs.

## Adapter acceptance criteria
- Separate package or clearly isolated entry point.
- Explicit supported upstream versions.
- No dependency from Nova core to the upstream framework.
- Documented conflict/cascade strategy.
- Automated integration smoke tests.
- Clear deprecation policy when upstream versions reach end of support.

## Adapter roadmap policy

Adapters are optional compatibility layers. They must not be imported by the Nova core bundle and must not silently replace the application's existing framework styles.

Planned order:
1. Tailwind CSS v4 token bridge.
2. Tailwind CSS v3 preset/configuration bridge.
3. Bootstrap adapter in a later release, initially targeting stable Bootstrap 5.x.
4. Evaluate other systems (for example Bulma or Foundation) only when there is a concrete integration need.

A Bootstrap adapter will map Nova semantic tokens to Bootstrap-compatible variables and document coexistence. It will not bundle Bootstrap or turn Nova into a Bootstrap theme package.
