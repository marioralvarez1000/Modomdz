import { useEffect, useRef, useState } from "react";

const DEBOUNCE_MS = 500;
const MIN_QUERY_LENGTH = 3;

export function useSmartSearch(query: string, hasLocalResults: boolean) {
  const [loading, setLoading] = useState(false);
  const [slugs, setSlugs] = useState<string[]>([]);
  const cache = useRef(new Map<string, string[]>());

  useEffect(() => {
    const trimmed = query.trim().toLocaleLowerCase("es");
    if (hasLocalResults || trimmed.length < MIN_QUERY_LENGTH) {
      setLoading(false);
      setSlugs([]);
      return;
    }
    const cached = cache.current.get(trimmed);
    if (cached) {
      setSlugs(cached);
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(() => {
      setLoading(true);
      fetch("/api/smart-search", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ query: trimmed }),
        signal: controller.signal,
      })
        .then((response) => response.ok ? response.json() as Promise<{ slugs?: string[] }> : { slugs: [] })
        .then((data) => {
          const result = Array.isArray(data.slugs) ? data.slugs : [];
          cache.current.set(trimmed, result);
          setSlugs(result);
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    }, DEBOUNCE_MS);

    return () => { clearTimeout(timer); controller.abort(); };
  }, [query, hasLocalResults]);

  return { loading, slugs };
}
