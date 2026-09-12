"use client";

import { useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { ContentItem } from "@/lib/content";
import { hrefFor } from "@/lib/content";

const commercialCategories = ["Bodegas", "Restaurantes", "Cafés", "Bares y cervecerías", "Mercados"];

function filterCategory(item: ContentItem, selected: string) {
  if (selected === "Todos") return true;
  if (selected === "Paseos y naturaleza") return !commercialCategories.includes(item.category);
  return item.category === selected;
}

function pinIcon(color: string) {
  return L.divIcon({
    className: "place-pin",
    html: `<svg width="30" height="38" viewBox="0 0 30 38" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.7 0 0 6.7 0 15c0 10.5 15 23 15 23s15-12.5 15-23C30 6.7 23.3 0 15 0Z" fill="${color}"/><circle cx="15" cy="15" r="6" fill="white"/></svg>`,
    iconSize: [30, 38],
    iconAnchor: [15, 38],
    popupAnchor: [0, -34],
  });
}

const pins: Record<string, L.DivIcon> = {
  Bodegas: pinIcon("#722f37"),
  Restaurantes: pinIcon("#ff5c39"),
  Cafés: pinIcon("#b6864f"),
  "Bares y cervecerías": pinIcon("#2f8cff"),
  Mercados: pinIcon("#ffc857"),
  default: pinIcon("#052f3b"),
};

export function PlacesMap({ items }: { items: ContentItem[] }) {
  const [selected, setSelected] = useState("Todos");
  const filters = ["Todos", ...commercialCategories, "Paseos y naturaleza"];
  const results = useMemo(() => items.filter((item) => filterCategory(item, selected)), [items, selected]);

  return (
    <div className="map-page">
      <div className="filter-row places-filters" aria-label="Filtrar lugares por categoría">
        {filters.map((filter) => (
          <button key={filter} className={selected === filter ? "active" : ""} onClick={() => setSelected(filter)}>{filter}</button>
        ))}
      </div>
      <div className="map-full-frame">
        <MapContainer center={[-32.95, -68.95]} zoom={10} scrollWheelZoom style={{ height: "100%", width: "100%" }}>
          <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {results.map((item) => (
            <Marker key={item.slug} position={[item.lat!, item.lng!]} icon={pins[item.category] || pins.default}>
              <Popup>
                <b>{item.title}</b>
                <br />
                <span>{item.category} · {item.zone}</span>
                <br />
                <a href={hrefFor(item)}>Ver ficha</a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
