import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = path => readFile(new URL(`../../${path}`, import.meta.url), 'utf8');

test('accessibility stylesheet is included in the main layered entry point', async () => {
  const entry = await read('src/core/index.css');
  assert.match(entry, /nova\.accessibility/u);
  assert.match(entry, /\.\/accessibility\.css/u);
});

test('accessibility helpers cover skip navigation, screen readers and forced colors', async () => {
  const css = await read('src/core/accessibility.css');
  for (const token of ['.nova-skip-link', '.nova-sr-only', ':focus-visible', 'forced-colors: active', 'prefers-reduced-motion: reduce']) {
    assert.ok(css.includes(token), `Missing accessibility support: ${token}`);
  }
});

test('responsive navigation and data tables define narrow viewport behavior', async () => {
  const navigation = await read('src/components/navigation.css');
  const tables = await read('src/components/tables.css');
  assert.match(navigation, /width\s*<=\s*30rem/u);
  assert.match(navigation, /width\s*<=\s*64rem/u);
  assert.match(navigation, /nova-shell-toggle/u);
  assert.match(navigation, /is-nav-open/u);
  assert.match(tables, /max-width:\s*40rem/u);
});

test('forms expose disabled and invalid states using semantic tokens', async () => {
  const css = await read('src/components/forms.css');
  assert.match(css, /:disabled/u);
  assert.match(css, /aria-invalid="true"/u);
  assert.match(css, /var\(--nova-danger\)/u);
});
