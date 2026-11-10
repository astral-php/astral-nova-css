# Validation locale — Astral Nova CSS 0.7.0-dev

Cette procédure permet de vérifier la version sur un poste de développement. Elle ne nécessite pas Astral Core, Tailwind ou Bootstrap.

## 1. Prérequis

- PHP 8.x avec le serveur intégré, ou un serveur HTTP statique équivalent.
- Node.js 20 LTS ou version compatible avec les dépendances du projet.
- npm fourni avec Node.js.
- Un navigateur récent (Firefox, Chrome, Edge ou Safari).

## 2. Installer et contrôler le projet

À la racine du dépôt `astral-nova-css` :

```bash
node --version
npm --version
php --version
npm install
npm run test
npm run lint:css
npm run build
```

Résultats attendus :

- `npm run test` : 24 tests réussis.
- `npm run lint:css` : aucune erreur Stylelint. Si des erreurs sont présentes, les corriger avant de poursuivre ; ne pas les ignorer.
- `npm run build` : génération de `dist/nova.css` et `dist/nova.min.css`.

Vérifier ensuite que les deux fichiers existent :

```bash
ls -lh dist/nova.css dist/nova.min.css
```

Sous Windows PowerShell :

```powershell
Get-Item dist/nova.css, dist/nova.min.css
```

## 3. Démarrer le Playground

À la racine du dépôt :

```bash
php -S 127.0.0.1:8080
```

Ouvrir : <http://127.0.0.1:8080/examples/playground/>

Il faut utiliser HTTP et non `file://`, car le Playground importe les modules JavaScript natifs depuis `src/`.

## 4. Tests fonctionnels à effectuer

### Thèmes et modes

- [ ] Sélectionner successivement White, Blue, Maroon Light, Red, Indigo, Orange et Green.
- [ ] Vérifier que les boutons, cartes, champs, alertes, tableaux et navigations changent de palette.
- [ ] Tester les modes Clair et Sombre.
- [ ] Tester Système avec le mode clair puis sombre configuré dans le système d'exploitation. La résolution système est effectuée lors du changement de préférence / chargement ; recharger le Playground si nécessaire.

### Composants CSS

- [ ] Tester les variantes et tailles des boutons.
- [ ] Tester champs normaux, invalides, désactivés et zones de texte.
- [ ] Vérifier les quatre variantes d'alertes.
- [ ] Vérifier cartes, tableau, défilement horizontal et pagination.
- [ ] Vérifier l'affichage à 320 px, 390 px, 768 px, 1024 px et 1440 px.

### Interactions JavaScript

- [ ] Ouvrir et fermer la modale avec les boutons et la touche Échap.
- [ ] Ouvrir le menu déroulant, sélectionner un lien et fermer en cliquant à l'extérieur.
- [ ] Naviguer entre les onglets avec les flèches gauche/droite et Entrée/Espace.
- [ ] Ouvrir et fermer l'accordéon.
- [ ] Ouvrir le drawer, parcourir ses contrôles avec Tab / Maj+Tab, fermer avec Échap et vérifier le retour du focus au bouton d'ouverture.
- [ ] Afficher les quatre variantes de Toast (info, success, warning, danger) si les boutons correspondants sont disponibles dans la page de test.
- [ ] Vérifier l'infobulle à la souris et au clavier.
- [ ] Tester les boutons de copie dans un contexte sécurisé (localhost) ; sinon, sélectionner le code manuellement.

### Accessibilité et console

- [ ] Utiliser uniquement le clavier : Tab, Maj+Tab, Entrée, Espace, flèches et Échap.
- [ ] Vérifier le lien « Aller au contenu » en première tabulation.
- [ ] Vérifier que le focus reste visible.
- [ ] Tester avec zoom navigateur à 200 %.
- [ ] Activer la réduction des animations dans le système et vérifier qu'aucune animation essentielle ne gêne l'usage.
- [ ] Vérifier la console et l'onglet Réseau : aucune erreur JavaScript, aucun fichier CSS/JS en 404.
- [ ] Si possible, compléter avec NVDA (Windows) ou VoiceOver (macOS/iOS).

## 5. Remonter les résultats

Pour chaque anomalie, noter :

- navigateur et version ;
- système d'exploitation ;
- largeur de fenêtre ;
- thème et mode actifs ;
- étapes précises pour reproduire ;
- résultat attendu et résultat constaté ;
- erreur console éventuelle.

Ne pas déclarer la conformité WCAG 2.2 AA sur la seule base des tests automatisés. Une vérification des contrastes, des annonces lecteur d'écran et des parcours clavier réels reste nécessaire.
