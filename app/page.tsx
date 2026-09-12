/* eslint-disable @next/next/no-html-link-for-pages */
import { ArrowRight, BadgeCheck, CalendarCheck, ShieldCheck } from "lucide-react";
import { PortalExplorer } from "@/components/portal-explorer";
import { NewsletterForm } from "@/components/newsletter-form";
import { PageTracker } from "@/components/page-tracker";
import { ContentCard } from "@/components/content-card";
import { content } from "@/lib/content";

export const dynamic="force-dynamic";

export default function Home() {
  const upcoming=content.filter(x=>x.type==="evento"&&(!x.endsAt||new Date(x.endsAt)>=new Date())).sort((a,b)=>(a.startsAt||"").localeCompare(b.startsAt||"")).slice(0,3);
  return <main><PageTracker/><PortalExplorer/>
    <section className="newsletter-band"><div className="shell newsletter-inner"><div><span className="overline light">Todos los jueves</span><h2>El finde, resuelto.</h2><p>Recibí una selección breve de los mejores planes para hacer en Mendoza. Sin ruido y sin perder tiempo buscando.</p></div><NewsletterForm/></div></section>
    <section className="shell moment-section" id="agenda"><div className="section-heading"><div><span className="overline">Agenda próxima</span><h2>Qué está pasando en Mendoza</h2><p className="section-description">Eventos públicos con fecha y fuente visible. Confirmá las condiciones antes de salir.</p></div><a className="section-more" href="/agenda">Ver agenda completa <ArrowRight size={17}/></a></div><div className="card-grid">{upcoming.map((item,index)=><ContentCard key={item.slug} item={item} priority={index<2}/>)}</div></section>
    <section className="shell trust-strip"><div><BadgeCheck/><span><b>Fuentes a la vista</b>Podés verificar cada dato</span></div><div><CalendarCheck/><span><b>Fecha de revisión</b>Sabés cuándo se actualizó</span></div><div><ShieldCheck/><span><b>Publicidad señalada</b>Nunca mezclada con lo editorial</span></div></section>
    <section className="shell partner-teaser"><div><span className="overline">Marcas, comercios y experiencias</span><h2>¿Querés aparecer frente a personas que ya están buscando un plan?</h2></div><div><p>Contanos qué ofrecés. Evaluamos cada propuesta y te mostramos las opciones para participar en Modo MZA.</p><a href="/anunciar">Quiero sumar mi negocio <ArrowRight size={17}/></a></div></section>
  </main>;
}
