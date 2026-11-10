# Mapping apps → palettes Nova

Source de vérité des tokens : `src/themes/palettes/`.

| Application | Palette Nova | Primary | Attribut HTML |
|-------------|--------------|---------|---------------|
| **Astral Starter** | `green` | `#0d7a45` | `data-nova-theme="green"` |
| **Astral Forum** | `maroon-light` | `#9f1239` | `data-nova-theme="maroon-light"` |
| **Astral Forge** | `red` | `#b51220` | `data-nova-theme="red"` |
| **Astral Website** | `indigo` | `#5b4cf5` | `data-nova-theme="indigo"` |
| **Astral Deploy** | `blue` | `#2563eb` | `data-nova-theme="blue"` |
| **Astral Shop** | `blue` | `#2563eb` | `data-nova-theme="blue"` |
| **Astral Blog** | `orange` | `#c2410c` | `data-nova-theme="orange"` |
| Docs / neutre | `white` | `#475569` | optionnel |

## Règles

1. Une app = **une** palette primaire Nova (pas de hardcode hors tokens).
2. Les pastilles multi-couleur du site (cartes écosystème) restent décoratives ; le chrome de l’app suit sa palette.
3. Soft alerts / boutons : consommer `--nova-*` (ou alias locaux synchronisés).
4. Contrôle : app `astral-nova-playground` (Theme Gallery + Playground CSS + Icons).

## État d’intégration CSS

| App | Charge `nova.css` | Tokens locaux = Nova |
|-----|-------------------|----------------------|
| Starter Nova | oui | oui |
| Forum / Forge / Website / Deploy / Shop / Blog | bridge tokens + `data-nova-theme` | oui |

Prochaine étape DEV-4 : charger progressivement `dist/nova.css` + composants Nova dans Forum / Forge / Deploy.
