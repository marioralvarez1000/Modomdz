"use client";

import dynamic from "next/dynamic";
import type { ContentItem } from "@/lib/content";

const PlacesMap = dynamic(() => import("./places-map").then((mod) => mod.PlacesMap), {
  ssr: false,
  loading: () => <div className="map-full-frame map-loading">Cargando mapa…</div>,
});

export function PlacesMapLoader({ items }: { items: ContentItem[] }) {
  return <PlacesMap items={items} />;
}
