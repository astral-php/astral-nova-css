import { mkdir, writeFile } from 'node:fs/promises';
import { bundle } from 'lightningcss';

const input = 'src/core/index.css';
const outputDir = 'dist';
await mkdir(outputDir, { recursive: true });

for (const [filename, minify] of [['nova.css', false], ['nova.min.css', true]]) {
  const result = bundle({ filename: input, minify, sourceMap: false });
  await writeFile(`${outputDir}/${filename}`, result.code);
}

console.log('Nova CSS bundles generated.');
