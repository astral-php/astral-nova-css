# Integrations

Adaptateurs optionnels — **non** importés par `dist/nova.css`.

| Dossier | Statut | Contenu |
|---------|--------|---------|
| `tailwind-v3/` | ✅ 1.1 | `preset.cjs` — tokens Nova → `theme.extend` |
| `tailwind-v4/` | ✅ 1.1 | `theme.css` — tokens Nova → `@theme` |
| `bootstrap/` | ⏳ plus tard | Bootstrap 5.x |

Critères : pas de dépendance runtime Nova → framework ; coexistence documentée ; composants UI restent `nova-*`.
