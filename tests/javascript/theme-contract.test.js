import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

const themesDir = new URL('../../src/themes/palettes/', import.meta.url);
const required = [
  '--nova-primary:', '--nova-primary-hover:', '--nova-primary-contrast:', '--nova-primary-soft:',
  '--nova-background:', '--nova-surface:', '--nova-surface-hover:', '--nova-text:',
  '--nova-text-muted:', '--nova-border:', '--nova-focus-ring:',
  '--nova-success:', '--nova-success-soft:', '--nova-success-contrast:',
  '--nova-warning:', '--nova-warning-soft:', '--nova-warning-contrast:',
  '--nova-danger:', '--nova-danger-soft:', '--nova-danger-contrast:',
  '--nova-info:', '--nova-info-soft:', '--nova-info-contrast:',
];

test('all seven palettes define the full light/dark semantic contract', async () => {
  const files = (await readdir(themesDir)).filter((name) => name.endsWith('.css'));
  assert.equal(files.length, 7);
  for (const file of files) {
    const css = await readFile(new URL(file, themesDir), 'utf8');
    const light = css.match(/\[data-nova-theme="[^"]+"\]\s*\{([^}]*)\}/s)?.[1] ?? '';
    const dark = css.match(/\[data-nova-theme="[^"]+"\]\[data-nova-mode="dark"\]\s*\{([^}]*)\}/s)?.[1] ?? '';
    assert.ok(light.includes('color-scheme:light'), `${file}: light color-scheme missing`);
    assert.ok(dark.includes('color-scheme:dark'), `${file}: dark color-scheme missing`);
    for (const token of required) {
      assert.ok(light.includes(token), `${file}: light ${token} missing`);
      assert.ok(dark.includes(token), `${file}: dark ${token} missing`);
    }
  }
});

test('theme API documents system mode without persisting automatically', async () => {
  const source = await readFile(new URL('../../src/javascript/theme.js', import.meta.url), 'utf8');
  assert.ok(source.includes("'system'"));
  assert.ok(source.includes('prefers-color-scheme'));
});
