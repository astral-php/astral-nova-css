import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = path => readFile(new URL(`../../${path}`, import.meta.url), 'utf8');

test('NPM exports expose source modules and both generated CSS bundles', async () => {
  const pkg = JSON.parse(await read('package.json'));
  for (const key of ['.', './nova.css', './nova.min.css', './core', './themes', './components', './layouts', './utilities', './accessibility', './javascript', './javascript/theme', './javascript/components']) {
    assert.ok(pkg.exports[key], `Missing package export: ${key}`);
  }
  assert.equal(pkg.version, '1.0.0');
  assert.ok(pkg.files.includes('src'));
  assert.ok(pkg.files.includes('dist'));
});

test('Composer metadata exposes the same Nova asset families', async () => {
  const composer = JSON.parse(await read('composer.json'));
  const assets = composer.extra.nova;
  for (const key of ['assets', 'themes', 'components', 'layouts', 'utilities', 'accessibility', 'javascript', 'stylesheet']) {
    assert.ok(assets[key], `Missing Composer Nova asset mapping: ${key}`);
  }
});

test('main CSS entry point imports every foundation and component index', async () => {
  const css = await read('src/core/index.css');
  for (const path of ['./reset.css', './tokens.css', '../themes/index.css', '../components/index.css', '../layouts/index.css', '../utilities/index.css']) {
    assert.ok(css.includes(path), `Missing CSS entry import: ${path}`);
  }
});

test('framework adapters are not required by the core release', async () => {
  const pkg = JSON.parse(await read('package.json'));
  assert.equal(pkg.dependencies, undefined);
  const readme = await read('README.md');
  assert.match(readme, /Deferred until after 1\.0\.0/u);
});
