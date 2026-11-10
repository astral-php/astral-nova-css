import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const feedback = await readFile(new URL('../../src/components/feedback.css', import.meta.url), 'utf8');
const marketing = await readFile(new URL('../../src/components/marketing.css', import.meta.url), 'utf8');
const codeWindow = await readFile(new URL('../../src/components/code-window.css', import.meta.url), 'utf8');
const shell = await readFile(new URL('../../src/components/shell.css', import.meta.url), 'utf8');
const navigation = await readFile(new URL('../../src/components/navigation.css', import.meta.url), 'utf8');
const index = await readFile(new URL('../../src/components/index.css', import.meta.url), 'utf8');
const gallery = await readFile(new URL('../../examples/theme-gallery/index.html', import.meta.url), 'utf8');
const playground = await readFile(new URL('../../examples/playground/index.html', import.meta.url), 'utf8');
const shellDemo = await readFile(new URL('../../examples/shell-responsive/index.html', import.meta.url), 'utf8');

test('soft alerts use semantic color tokens, not solid-button contrast', () => {
  for (const variant of ['success', 'warning', 'danger', 'info']) {
    const block = feedback.match(new RegExp(`\\.nova-alert-${variant}\\s*\\{([^}]*)\\}`, 's'))?.[1] ?? '';
    assert.ok(block.includes(`color: var(--nova-${variant});`), `${variant} should use semantic color`);
    assert.ok(!block.includes(`--nova-${variant}-contrast`), `${variant} must not use contrast on soft surface`);
  }
});

test('marketing and code-window components are registered', () => {
  assert.match(index, /marketing\.css/);
  assert.match(index, /code-window\.css/);
  assert.match(index, /shell\.css/);
  for (const cls of ['.nova-hero', '.nova-feature-card', '.nova-watermark', '.nova-float-chip', '.nova-display', '.nova-lead']) {
    assert.ok(marketing.includes(cls), `missing ${cls}`);
  }
  for (const cls of ['.nova-code-window', '.nova-code-window__bar', '.nova-code-window__pre', '.nova-code-window--compact']) {
    assert.ok(codeWindow.includes(cls), `missing ${cls}`);
  }
});

test('shell responsive primitives are registered', () => {
  for (const cls of ['.nova-header', '.nova-nav-toggle', '.nova-header-panel', '.nova-footer', '.nova-steps', '.nova-step']) {
    assert.ok(shell.includes(cls), `missing ${cls}`);
  }
  for (const cls of ['.nova-shell-toggle', '.nova-shell-backdrop', '.is-nav-open']) {
    assert.ok(navigation.includes(cls), `missing ${cls}`);
  }
  assert.match(shellDemo, /data-nova-header/);
  assert.match(shellDemo, /data-nova-shell/);
  assert.match(shellDemo, /nova-steps/);
});

test('theme gallery demonstrates all palettes and soft alerts', () => {
  for (const theme of ['white', 'blue', 'maroon-light', 'red', 'indigo', 'orange', 'green']) {
    assert.match(gallery, new RegExp(`data-theme="${theme}"`));
  }
  assert.match(gallery, /nova-alert-danger/);
  assert.match(gallery, /nova-code-window/);
  assert.match(gallery, /nova-feature-card/);
});

test('playground documents marketing DEV-3 section', () => {
  assert.match(playground, /id="marketing"/);
  assert.match(playground, /1\.0\.0/);
  assert.match(playground, /theme-gallery/);
});
