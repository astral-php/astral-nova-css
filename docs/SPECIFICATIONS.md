# Technical specifications

## Scope for the initial development cycle
- CSS-native design tokens and restrained reset.
- Seven named palettes: white, blue, maroon-light, red, indigo, orange, green.
- Independent light and dark modes.
- Foundational components: buttons, cards, form controls, badges, alerts, containers, stack/cluster layout.
- Optional JavaScript theme API and accessible modal foundation.
- Static Playground for visual review.
- Composer and NPM package metadata.
- Extensible adapter directory and documented adapter contract.

## Non-goals
- Nova is not a general-purpose CSS framework competing with Tailwind or Bootstrap.
- No mandatory JavaScript runtime.
- No dependency on React, Vue, jQuery or Astral Core.
- No application-specific business components in the core package.
- No forced markup generator or template engine.

## Browser policy
Define and publish a tested browser support matrix before 1.0. Prefer broadly supported CSS features for core components; isolate progressive enhancements behind feature queries.

## Accessibility baseline
Target WCAG 2.2 AA. Keyboard operation, visible focus, semantic markup, accessible names, reduced motion and color contrast are release requirements. Automated axe checks supplement manual testing; they do not replace it.

## CSS layering
Use documented cascade layers (`nova.reset`, `nova.tokens`, `nova.themes`, `nova.components`, `nova.utilities`). Avoid unlayered global selectors that unexpectedly override consumer styles.

## Public API stability
Before 1.0, APIs may evolve. From 1.0 onward, changes to class names, tokens, theme identifiers and JavaScript methods require changelog entries and SemVer policy.
