"use client";

import { ExternalLink, Navigation } from "lucide-react";
import type { ContentItem } from "@/lib/content";
import { track } from "@/lib/track-client";

function locationQuery(item:ContentItem){
  return [item.title,item.address||item.zone,"Mendoza, Argentina"].filter(Boolean).join(", ");
}

export function directionsUrl(item:ContentItem){
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(locationQuery(item))}`;
}

export function LocationMap({item}:{item:ContentItem}){
  if(!item.mapUrl)return null;
  const query=locationQuery(item);
  const embedUrl=`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  const directions=directionsUrl(item);
  const registerClick=()=>track("map_click",{contentSlug:item.slug,category:item.category,zone:item.zone,value:"directions"});

  return <section className="location-section" aria-labelledby={`map-${item.slug}`}>
    <div className="location-heading">
      <div><span className="overline">Ubicación</span><h2 id={`map-${item.slug}`}>Dónde queda</h2><p>{item.address||item.zone}</p></div>
      <a className="directions-button" href={directions} target="_blank" rel="noreferrer" onClick={registerClick}><Navigation size={18}/> Cómo llegar</a>
    </div>
    <div className="map-frame">
      <iframe src={embedUrl} title={`Mapa de ${item.title}`} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"/>
    </div>
    <a className="map-external-link" href={item.mapUrl} target="_blank" rel="noreferrer" onClick={()=>track("map_click",{contentSlug:item.slug,category:item.category,zone:item.zone,value:"full_map"})}>Ver mapa en pantalla completa <ExternalLink size={14}/></a>
  </section>;
}
