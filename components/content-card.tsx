"use client";

import { ArrowUpRight, Bookmark, Clock3, MapPin } from "lucide-react";
import type { ContentItem } from "@/lib/content";
import { hrefFor, visualFor } from "@/lib/content";
import { track } from "@/lib/track-client";
import { useSaved } from "@/components/saved-provider";

export function ContentCard({ item, priority = false }: { item: ContentItem; priority?: boolean }) {
  const { isSaved, toggle, viewer } = useSaved();
  const saved = isSaved(item.slug);
  const visual=visualFor(item);
  const when=item.type==="evento"&&item.startsAt?new Intl.DateTimeFormat("es-AR",{day:"numeric",month:"short",timeZone:"America/Argentina/Mendoza"}).format(new Date(item.startsAt)):item.duration;
  const openItem=()=>track("content_click", {contentSlug:item.slug,category:item.category,zone:item.zone});
  return (
    <article className={`content-card ${priority ? "priority" : ""}`}>
      <a href={hrefFor(item)} className="card-main-link" onClick={openItem} aria-label={`Ver más información sobre ${item.title}`}>
        <div className="card-image" style={{backgroundImage:`linear-gradient(180deg,transparent 40%,rgba(3,29,36,.72)),url("${visual.src}")`}} role="img" aria-label={visual.alt}><span className="card-kicker">{item.eyebrow}</span></div>
        <div className="card-body">
          <div className="tag-row"><span className="tag">{item.category}</span>{item.free && <span className="tag free">Gratis</span>}{item.editorial && <span className="tag editorial">Editorial</span>}{item.ageRestricted && <span className="tag age">+18</span>}</div>
          <h3>{item.title}</h3><p>{item.summary}</p>
          <div className="card-meta"><span><MapPin size={14}/>{item.zone}</span><span><Clock3 size={14}/>{when}</span><ArrowUpRight size={17} className="card-arrow"/></div>{item.ageRestricted&&<small className="card-alcohol">Beber con moderación. Prohibida su venta a menores de 18 años.</small>}
        </div>
      </a>
      {viewer?<button className={`save-button ${saved ? "active" : ""}`} onClick={() => { void toggle(item.slug); track(saved ? "unsave" : "save", {contentSlug:item.slug,category:item.category,zone:item.zone}); }} aria-label={saved ? "Quitar de favoritos" : "Guardar en favoritos"}><Bookmark size={17} fill={saved ? "currentColor" : "none"}/></button>:<a className="save-button" href={`/ingresar?returnTo=${encodeURIComponent(hrefFor(item))}`} aria-label="Ingresá para guardar este plan"><Bookmark size={17}/></a>}
    </article>
  );
}
