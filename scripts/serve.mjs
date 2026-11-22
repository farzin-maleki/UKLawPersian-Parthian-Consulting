import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { extname, resolve, sep } from 'node:path';

// Portable preview for the static Vercel routes. Run with Node 18 or newer.
const root = fileURLToPath(new URL('../', import.meta.url));
const config = JSON.parse(await readFile(resolve(root, 'vercel.json'), 'utf8'));
const routes = config.routes.map(route => ({ ...route, expression: new RegExp(`^${route.src}`) }));
const mime = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.webp': 'image/webp', '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

async function sendFile(request, response, destination, status) {
  const file = resolve(root, `.${destination}`);
  if (!file.startsWith(resolve(root) + sep)) return response.writeHead(404).end();
  try {
    const info = await stat(file);
    if (!info.isFile()) return response.writeHead(404).end();
    response.writeHead(status, {
      'Content-Type': mime[extname(file)] || 'application/octet-stream',
      'Content-Length': info.size,
      'Cache-Control': 'no-store',
    });
    if (request.method === 'HEAD') return response.end();
    const stream = createReadStream(file);
    stream.on('error', () => response.destroy());
    stream.pipe(response);
  } catch {
    response.writeHead(404).end();
  }
}

const server = createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) return response.writeHead(405, { Allow: 'GET, HEAD' }).end();
  if (!request.url?.startsWith('/') || request.url.startsWith('//')) return response.writeHead(400).end();
  let url;
  try { url = new URL(request.url, 'http://127.0.0.1'); }
  catch { return response.writeHead(400).end(); }

  for (const route of routes) {
    const match = route.expression.exec(url.pathname);
    if (!match) continue;
    const expand = value => value.replace(/\$(\d+)/g, (_, index) => match[index] ?? '');
    for (const [name, value] of Object.entries(route.headers || {})) {
      response.setHeader(name, expand(value) + (name === 'Location' ? url.search : ''));
    }
    if (route.continue) continue;
    if (route.dest) return sendFile(request, response, expand(route.dest), route.status || 200);
    return response.writeHead(route.status || 200).end();
  }
  response.writeHead(404).end();
});

const port = Number(process.env.PORT || 4173);
server.listen(port, '127.0.0.1', () => console.log(`Local preview at http://127.0.0.1:${port}/`));
