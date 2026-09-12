import type { Metadata } from "next"; import { notFound } from "next/navigation"; import { content, findContent } from "@/lib/content"; import { DetailPage } from "@/lib/detail-page";
export function generateStaticParams(){return content.filter(x=>x.type==="itinerario").map(x=>({slug:x.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=findContent("itinerario",slug);return item?{title:item.title,description:item.summary,alternates:{canonical:`/itinerarios/${slug}`}}:{}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=findContent("itinerario",slug);if(!item)notFound();return <DetailPage item={item}/>}
