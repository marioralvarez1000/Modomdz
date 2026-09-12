const SOURCE_URL = "https://rutasdelsur.com.ar/recursos/estado-paso-cristo-redentor";
const STATUS_PATTERN = /Paso Cristo Redentor:\s*(Abierto|Cerrado)\s*—\s*Actualizado\s*([^"]+)"/i;
const CACHE_TTL_SECONDS = 30 * 60;

export type BorderStatus = { isOpen: boolean; label: string; updatedAt: string; sourceUrl: string };

export async function getBorderStatus(): Promise<BorderStatus | null> {
  try {
    const cache = (caches as unknown as { default: Cache }).default;
    const cacheKey = new Request(SOURCE_URL);
    const cached = await cache.match(cacheKey);
    if (cached) return await cached.json();

    const response = await fetch(SOURCE_URL, {
      headers: { "user-agent": "Mozilla/5.0 (compatible; ModoMZABot/1.0; +https://modomza.com.ar)" },
      signal: AbortSignal.timeout(3000),
    });
    if (!response.ok) return null;

    const html = await response.text();
    const match = html.match(STATUS_PATTERN);
    if (!match) return null;

    const result: BorderStatus = {
      isOpen: match[1].toLowerCase() === "abierto",
      label: match[1],
      updatedAt: match[2].trim(),
      sourceUrl: SOURCE_URL,
    };

    await cache.put(cacheKey, new Response(JSON.stringify(result), {
      headers: { "content-type": "application/json", "cache-control": `max-age=${CACHE_TTL_SECONDS}` },
    }));
    return result;
  } catch {
    return null;
  }
}
