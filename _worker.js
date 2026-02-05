/**
 * Cloudflare Worker to serve Next.js static site
 * This worker serves static files from the .next directory
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Try to serve the requested file
    let response = await env.ASSETS.fetch(request);

    // If it's a 404 and looks like a page route (no extension), try index.html
    if (response.status === 404 && !path.includes('.')) {
      const indexRequest = new Request(new URL(path.replace(/\/$/, '') + '/index.html', request.url).toString(), request);
      response = await env.ASSETS.fetch(indexRequest);
    }

    return response;
  },
};

