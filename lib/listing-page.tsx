import { ContentCard } from "@/components/content-card";
import { PageTracker } from "@/components/page-tracker";
import type { ContentItem } from "@/lib/content";
export function ListingPage({title,eyebrow,description,items}:{title:string;eyebrow:string;description:string;items:ContentItem[]}){return <main><PageTracker/><section className="shell listing-hero"><span className="overline">{eyebrow}</span><h1>{title}</h1><p>{description}</p></section><section className="shell listing-grid"><div className="card-grid">{items.map((item,index)=><ContentCard key={item.slug} item={item} priority={index<2}/>)}</div></section></main>}
