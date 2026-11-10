# Contract with astral-template

`astral-template` owns page structures, layouts, PHP partials and view composition. Nova owns visual primitives, themes and reusable CSS/JS components.

`astral-template` may provide a default Nova integration, but must not require Astral Core. It should support: (1) Nova assets enabled, (2) another CSS system supplied by the consuming application, and (3) custom asset paths. A non-Astral PHP application must be able to use `astral-template` without adopting Astral Core.

Avoid duplicating Nova button/card/form CSS in template packages. Template-specific layout composition belongs in `astral-template`; visual component rules belong in Nova.

## Starter Nova additions (0.7 integration work)

The Starter Nova layouts also consume `.nova-auth-layout`, `.nova-page-footer`,
`.nova-user-menu`, `.nova-sidebar-footer`, and `.nova-topbar-title`.
These selectors are defined in the source layout/component styles and included in
`dist/nova.css` and `dist/nova.min.css`. Rebuild the distribution bundles with
`npm run build` after installing the declared development dependencies.
