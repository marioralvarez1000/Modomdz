import type { Metadata } from "next";
import { content } from "@/lib/content";
import { PageTracker } from "@/components/page-tracker";
import { PlacesExplorer } from "@/components/places-explorer";

export const metadata:Metadata={title:"Lugares para conocer, comer y tomar en Mendoza",description:"Bodegas, restaurantes, cafés, bares, mercados y paseos de Mendoza con mapa, fuente y verificación editorial."};

export default function Page(){const places=content.filter(x=>x.type==="lugar");return <main><PageTracker/><section className="shell listing-hero places-hero"><span className="overline">Dónde ir</span><h1>Elegí tu próxima parada</h1><p>Bodegas, restaurantes, cafés, bares, mercados y paseos para descubrir Mendoza. Cada ficha tiene mapa, costo orientativo, fuente y fecha de verificación.</p></section><PlacesExplorer items={places}/></main>}
