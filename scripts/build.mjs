import { mkdir, writeFile } from 'node:fs/promises';
import { bundle } from 'lightningcss';
import * as esbuild from 'esbuild';

const input = 'src/core/index.css';
const outputDir = 'dist';
await mkdir(outputDir, { recursive: true });

for (const [filename, minify] of [['nova.css', false], ['nova.min.css', true]]) {
  const result = bundle({ filename: input, minify, sourceMap: false });
  await writeFile(`${outputDir}/${filename}`, result.code);
}

console.log('Nova CSS bundles generated.');

// Single-file JS for CDN (window.Nova via index.js side-effect)
for (const [outfile, minify] of [
  ['dist/nova.iife.js', false],
  ['dist/nova.iife.min.js', true],
]) {
  await esbuild.build({
    entryPoints: ['src/javascript/index.js'],
    bundle: true,
    format: 'iife',
    outfile,
    minify,
    target: ['es2018'],
  });
}

console.log('Nova JS IIFE bundles generated (nova.iife.js / nova.iife.min.js).');
