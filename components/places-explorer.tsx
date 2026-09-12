"use client";

import { useMemo, useState } from "react";
import { Search, ShieldCheck } from "lucide-react";
import type { ContentItem } from "@/lib/content";
import { ContentCard } from "@/components/content-card";
import { track } from "@/lib/track-client";

const commercialCategories = ["Bodegas", "Restaurantes", "Cafés", "Bares y cervecerías", "Mercados"];

function filterCategory(item:ContentItem, selected:string) {
  if(selected==="Todos") return true;
  if(selected==="Paseos y naturaleza") return !commercialCategories.includes(item.category);
  return item.category===selected;
}

export function PlacesExplorer({items}:{items:ContentItem[]}) {
  const [selected,setSelected]=useState("Todos");
  const [query,setQuery]=useState("");
  const filters=["Todos",...commercialCategories,"Paseos y naturaleza"];
  const results=useMemo(()=>items.filter(item=>{
    const matchesCategory=filterCategory(item,selected);
    const haystack=`${item.title} ${item.summary} ${item.category} ${item.zone}`.toLocaleLowerCase("es");
    return matchesCategory&&haystack.includes(query.trim().toLocaleLowerCase("es"));
  }),[items,query,selected]);

  return <section className="shell places-browser">
    <div className="places-tools">
      <label className="places-search"><Search size={19}/><input value={query} onChange={event=>setQuery(event.target.value)} onBlur={()=>query&&track("places_search",{value:query.slice(0,80)})} placeholder="Buscar por nombre, zona o tipo" aria-label="Buscar lugares"/></label>
      <div className="places-count"><b>{results.length}</b><span>{results.length===1?"lugar":"lugares"}</span></div>
    </div>
    <div className="filter-row places-filters" aria-label="Filtrar lugares por categoría">
      {filters.map(filter=><button key={filter} className={selected===filter?"active":""} onClick={()=>{setSelected(filter);track("places_filter",{value:filter})}}>{filter}</button>)}
    </div>
    {results.length?<div className="card-grid">{results.map((item,index)=><ContentCard key={item.slug} item={item} priority={index<2}/>)}</div>:<div className="empty-state"><Search/><h3>No encontramos ese lugar</h3><p>Probá con otra zona, categoría o nombre.</p><button onClick={()=>{setQuery("");setSelected("Todos")}}>Ver todos</button></div>}
    <div className="editorial-standard"><ShieldCheck/><div><b>Selección editorial independiente</b><p>Los lugares identificados como “Editorial” no pagaron por aparecer. Publicamos textos propios, datos públicos, mapas y fuentes visibles; no usamos logos ni material promocional sin autorización.</p></div></div>
  </section>;
}
