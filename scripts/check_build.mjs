#!/usr/bin/env node
// Inspect the emitted HTML and fetch its local JS/CSS using Vite's real preview server.
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';
import { preview } from 'vite';

const dist = resolve('dist');
const html = await readFile(resolve(dist, 'index.html'), 'utf8');
assert(html.includes('<div id="root"></div>'), 'Missing React mount point');
const references = [...html.matchAll(/(?:src|href)=["']([^"']+)["']/g)]
  .map(match => match[1])
  .filter(value => !/^(?:https?:|data:|#|\/\/)/.test(value));
assert(references.some(value => /\.js(?:\?|$)/.test(value)), 'Missing emitted JavaScript');

const server = await preview({ preview: { host: '127.0.0.1', port: 0, open: false } });
try {
  const address = server.httpServer.address();
  assert(address && typeof address !== 'string');
  const base = `http://127.0.0.1:${address.port}`;
  const index = await fetch(base);
  assert.equal(index.status, 200);
  assert.equal(await index.text(), html);
  for (const reference of references) {
    const path = resolve(dist, reference.replace(/^\//, '').split('?')[0]);
    assert(!relative(dist, path).startsWith(`..${sep}`), 'Asset escapes dist');
    const bytes = await readFile(path);
    assert(bytes.length > 0, `Empty asset: ${reference}`);
    const response = await fetch(new URL(reference, base));
    assert.equal(response.status, 200, reference);
    assert(!response.headers.get('content-type')?.includes('text/html'), `HTML fallback for ${reference}`);
    assert.deepEqual(Buffer.from(await response.arrayBuffer()), bytes, reference);
  }
  const hashes = {};
  for (const file of await readdir(dist, { recursive: true })) {
    if (!/\.(?:html|js|css)$/.test(file)) continue;
    hashes[file] = createHash('sha256').update(await readFile(resolve(dist, file))).digest('hex');
  }
  await mkdir('.artifacts', { recursive: true });
  await writeFile('.artifacts/build.json', JSON.stringify({ node: process.version, references, sha256: hashes }, null, 2) + '\n');
  console.log(`SUCCESSFUL: preview HTTP, React entry, ${references.length} local asset(s), ${Object.keys(hashes).length} file hashes`);
} finally {
  await new Promise((done, reject) => server.httpServer.close(error => error ? reject(error) : done()));
}
