import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = path => readFile(new URL(`../../${path}`, import.meta.url), 'utf8');

test('0.4 interaction API is exported from the Nova entry point', async () => {
  const source = await read('src/javascript/index.js');
  for (const name of ['createInteractions', 'showToast', 'interactions']) assert.ok(source.includes(name));
});

test('interaction module covers all documented behaviors', async () => {
  const source = await read('src/javascript/components.js');
  for (const feature of ['data-nova-modal-open', 'data-nova-dropdown', 'data-nova-tab', 'data-nova-accordion', 'data-nova-drawer-open', 'data-nova-toast', 'Escape', 'aria-expanded', 'aria-selected']) {
    assert.ok(source.includes(feature), `${feature} must be implemented`);
  }
});

test('interaction styles use semantic Nova tokens and are included in the bundle', async () => {
  const css = await read('src/components/interactions.css');
  assert.match(css, /\.nova-modal/u);
  assert.match(css, /\.nova-dropdown/u);
  assert.match(css, /\.nova-drawer/u);
  assert.match(css, /\.nova-toast/u);
  assert.match(css, /var\(--nova-/u);
  assert.doesNotMatch(css, /--nova-(?:inverse|on-inverse)\b/u);
  const index = await read('src/components/index.css');
  assert.ok(index.includes('interactions.css'));
});

test('drawer interaction traps keyboard focus and restores the opener', async () => {
  const source = await read('src/javascript/components.js');
  assert.match(source, /event\.key === 'Tab'/u);
  assert.match(source, /event\.shiftKey/u);
  assert.match(source, /drawer\._novaOpener = drawerOpener/u);
  assert.match(source, /opener\?\.focus\?\.\(\)/u);
});

test('tabs support arrow-key navigation', async () => {
  const source = await read('src/javascript/components.js');
  assert.match(source, /ArrowRight/u);
  assert.match(source, /ArrowLeft/u);
  assert.match(source, /tabs\[\(index \+ next \+ tabs\.length\) % tabs\.length\]/u);
});
