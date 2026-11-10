# Nova Lab & Playground

Contrôle recommandé via l’**application** `astral-nova-playground`
(http://astral-nova-playground.local/), pas via le Starter produit.

Les fichiers `examples/` restent la source dans les packages ; l’app les expose sous `/packages/`.

## Hub applicatif

| Surface | URL app |
|---------|---------|
| Hub | `/` |
| Lab | `/packages/astral-nova-css/examples/lab/` |
| Playground CSS | `/packages/astral-nova-css/examples/playground/` |
| Theme Gallery | `/packages/astral-nova-css/examples/theme-gallery/` |
| Icons | `/packages/astral-nova-icons/examples/gallery/` |
| Template docs | `/packages/astral-template-nova/README.md` |

## Install app

```bash
cd D:\laragon\www\astral-nova-playground
composer install
```

Laragon : vhost `astral-nova-playground.local` → `public/`.

Ou : `composer serve` → http://127.0.0.1:8090/

## Playground CSS — couverture

- Sept palettes + modes light/dark/system
- Boutons, formulaires, feedback, marketing, interactions JS
- Snippets d’intégration

## Intégration site astral-php.dev

Destination doc dédiée (entrée « Nova » / « Nova Lab »), sans remplacer l’identité du site.
Route suggérée : `/nova/` ou `/playground/nova/`.

## Scope

Surface de documentation. Pas une app métier. Pas de miroir obligatoire dans Starter.
