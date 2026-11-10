import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('theme module exposes the documented palette identifiers', async () => {
  const source = await readFile(new URL('../../src/javascript/theme.js', import.meta.url), 'utf8');
  for (const name of ['white', 'blue', 'maroon-light', 'red', 'indigo', 'orange', 'green']) {
    assert.ok(source.includes(`'${name}'`));
  }
});
