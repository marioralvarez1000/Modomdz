import type { Metadata } from "next";
import { content } from "@/lib/content";
import { PageTracker } from "@/components/page-tracker";
import { PlacesMapLoader } from "@/components/places-map-loader";

export const metadata: Metadata = { title: "Mapa de Mendoza", description: "Bodegas, restaurantes, cafés y paseos de Mendoza en un mapa interactivo." };

export default function Page() {
  const items = content.filter((item) => item.type === "lugar" && item.lat !== undefined && item.lng !== undefined);
  return (
    <main>
      <PageTracker />
      <section className="shell listing-hero">
        <span className="overline">Explorá el territorio</span>
        <h1>Mapa de Mendoza</h1>
        <p>Bodegas, restaurantes, cafés y paseos ubicados en el mapa. Filtrá por categoría y tocá un pin para ver la ficha.</p>
      </section>
      <section className="shell listing-grid">
        <PlacesMapLoader items={items} />
      </section>
    </main>
  );
}
