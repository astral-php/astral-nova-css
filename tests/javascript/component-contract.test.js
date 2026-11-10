import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const files = [
  'src/components/navigation.css', 'src/components/tables.css',
  'src/components/pagination.css', 'src/components/tabs.css'
];

test('0.3 component styles use the Nova namespace and semantic tokens', async () => {
  for (const file of files) {
    const css = await readFile(new URL(`../../${file}`, import.meta.url), 'utf8');
    assert.match(css, /\.nova-/u, `${file} should expose Nova classes`);
    assert.match(css, /var\(--nova-/u, `${file} should use Nova tokens`);
    assert.doesNotMatch(css, /#[0-9a-f]{3,8}\b/iu, `${file} should not hardcode colors`);
  }
});

test('component index imports all 0.3 component modules', async () => {
  const index = await readFile(new URL('../../src/components/index.css', import.meta.url), 'utf8');
  for (const name of ['navigation.css', 'tables.css', 'pagination.css', 'tabs.css']) {
    assert.ok(index.includes(name), `${name} must be included in the component bundle`);
  }
});
