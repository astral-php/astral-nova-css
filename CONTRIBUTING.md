# Contributing to Nova

1. Keep the core CSS framework-agnostic and dependency-free at runtime.
2. Use the `nova-` class namespace and `--nova-` custom-property namespace.
3. Components must consume semantic tokens, never hard-code a theme's brand color.
4. Keep theme palettes separate from light/dark mode definitions.
5. New adapters belong in `src/integrations/` and must remain optional.
6. Include keyboard, focus, reduced-motion and contrast considerations for interactive components.
7. Add tests and update the documentation for public API changes.
8. Do not commit generated `dist/` output unless release policy explicitly requires it.

Use semantic versioning once the public API is declared stable.
