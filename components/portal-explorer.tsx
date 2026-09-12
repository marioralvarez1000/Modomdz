"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import { useMemo, useState } from "react";
import { ArrowRight, Building2, Coffee, Grape, Map, Search, UtensilsCrossed } from "lucide-react";
import { content } from "@/lib/content";
import { ContentCard } from "@/components/content-card";
import { track } from "@/lib/track-client";

const places=content.filter(item=>item.type==="lugar");
const groups:{id:string;title:string;description:string;categories:string[];icon:React.ReactNode}[]=[
  {id:"comer",title:"Dónde comer",description:"Restaurantes y mercados para probar sabores locales y resolver cada momento del día.",categories:["Restaurantes","Mercados"],icon:<UtensilsCrossed/>},
  {id:"bodegas",title:"Bodegas para visitar",description:"Reservá, organizá el traslado y disfrutá el vino mendocino.",categories:["Bodegas"],icon:<Grape/>},
  {id:"cafes-noche",title:"Cafés y noche",description:"Paradas para una pausa, una cerveza o una salida por la ciudad.",categories:["Cafés","Bares y cervecerías"],icon:<Coffee/>},
  {id:"paseos",title:"Paseos y lugares abiertos",description:"Plazas, parques, montaña e historia para conocer Mendoza a tu ritmo.",categories:["Ciudad","Naturaleza","Historia","Cultura","Montaña","Barrios"],icon:<Map/>},
];

function PlaceSection({id,title,description,categories}:{id:string;title:string;description:string;categories:string[]}){
  const items=places.filter(item=>categories.includes(item.category)).slice(0,6);
  return <section className="shell moment-section place-home-section" id={id}>
    <div className="section-heading"><div><span className="overline">Lugares de Mendoza</span><h2>{title}</h2><p className="section-description">{description}</p></div><a className="section-more" href="/lugares">Ver todos <ArrowRight size={17}/></a></div>
    <div className="card-grid">{items.map((item,index)=><ContentCard key={item.slug} item={item} priority={index<2}/>)}</div>
  </section>;
}

export function PortalExplorer(){
  const [query,setQuery]=useState("");
  const results=useMemo(()=>places.filter(item=>`${item.title} ${item.summary} ${item.category} ${item.zone}`.toLocaleLowerCase("es").includes(query.trim().toLocaleLowerCase("es"))),[query]);
  return <>
    <section className="places-first-hero"><div className="shell places-first-inner">
      <div><span className="overline">Guía independiente de Mendoza</span><h1>Elegí un lugar.<br/><em>Armá tu plan.</em></h1><p>Bodegas, restaurantes, cafés, bares, mercados y paseos con mapa, datos verificados y acceso al canal oficial.</p></div>
      <div className="place-search-box"><label><Search/><input value={query} onChange={e=>setQuery(e.target.value)} onBlur={()=>query&&track("search",{value:query.slice(0,80)})} placeholder="Buscá un lugar, zona o categoría"/></label><small>{places.length} lugares publicados y revisados</small></div>
    </div></section>
    {query.trim()?<section className="shell explore-section"><div className="section-heading"><div><span className="overline">Resultados</span><h2>Lugares para vos</h2></div><span className="result-count">{results.length} resultados</span></div>{results.length?<div className="card-grid search-results">{results.map((item,index)=><ContentCard key={item.slug} item={item} priority={index<2}/>)}</div>:<div className="empty-state"><Search/><h3>No encontramos ese lugar</h3><p>Probá con “bodega”, “restaurante”, “centro” o “montaña”.</p><button onClick={()=>setQuery("")}>Ver todos los lugares</button></div>}</section>:<>
      <nav className="shell place-category-launcher" aria-label="Categorías de lugares">{groups.map(group=><a key={group.id} href={`#${group.id}`}>{group.icon}<span><b>{group.title}</b><small>Ver selección</small></span></a>)}<a href="/lugares"><Building2/><span><b>Todos los lugares</b><small>Explorar el catálogo</small></span></a></nav>
      {groups.map(group=><PlaceSection key={group.id} {...group}/>)}
    </>}
  </>;
}
