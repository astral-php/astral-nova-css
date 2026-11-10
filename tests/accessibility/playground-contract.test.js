import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../../examples/playground/index.html', import.meta.url), 'utf8');

test('Playground documents all seven Nova palettes', () => {
  for (const theme of ['white', 'blue', 'maroon-light', 'red', 'indigo', 'orange', 'green']) {
    assert.match(html, new RegExp(`data-theme="${theme}"`));
  }
});

test('Playground exposes all three mode preferences', () => {
  for (const mode of ['light', 'dark', 'system']) assert.match(html, new RegExp(`value="${mode}"`));
});

test('Playground uses real source modules and stylesheets', () => {
  assert.match(html, /\.\.\/\.\.\/src\/core\/index\.css/);
  assert.match(html, /\.\.\/\.\.\/src\/javascript\/index\.js/);
});

test('Playground includes keyboard and assistive technology foundations', () => {
  assert.match(html, /nova-skip-link/);
  assert.match(html, /aria-label="Sections"/);
  assert.match(html, /role="tablist"/);
  assert.match(html, /aria-live|data-nova-toast/);
});

test('Playground demonstrates all interactive component families', () => {
  for (const marker of ['data-nova-modal-open', 'data-nova-drawer-open', 'data-nova-dropdown-toggle', 'data-nova-tab', 'data-nova-accordion', 'data-nova-toast']) {
    assert.ok(html.includes(marker), `Missing ${marker}`);
  }
});

test('Playground provides integration snippets and project link', () => {
  assert.match(html, /data-copy=/);
  assert.match(html, /https:\/\/astral-php\.dev\//);
});
