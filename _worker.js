/**
 * Cloudflare Worker to serve Next.js static export
 * This worker serves files from the out directory.
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Try to serve the requested file.
    let response = await env.ASSETS.fetch(request);

    // If it's a 404 and looks like a page route (no extension), try index.html.
    if (response.status === 404 && !path.includes('.')) {
      const normalizedPath = path.replace(/\/$/, '');
      const indexRequest = new Request(
        new URL(`${normalizedPath}/index.html`, request.url).toString(),
        request
      );
      response = await env.ASSETS.fetch(indexRequest);
    }

    // Fallback to 404 page if present.
    if (response.status === 404) {
      const notFoundRequest = new Request(new URL('/404.html', request.url).toString(), request);
      response = await env.ASSETS.fetch(notFoundRequest);
    }

    return response;
  },
};

