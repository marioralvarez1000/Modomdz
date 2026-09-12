"use client";

import { useMemo, useState } from "react";
import { Download, Search } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export type SubscriberRow = { email:string; status:string; source:string; consented_at:string };
export type LeadRow = { business:string; name:string; email:string; phone:string|null; category:string|null; message:string|null; status:string; created_at:string };
export type EventSubmissionRow = { event_name:string; organizer:string; email:string; phone:string|null; event_date:string; venue:string; cost:string|null; source_url:string|null; message:string|null; status:string; created_at:string };
export type ActivityRow = { event_name:string; content_slug:string|null; path:string; value:string|null; referrer_host:string|null; device_type:string|null; created_at:string };
export type ProfileRow = { first_name:string|null; last_name:string|null; email:string; phone:string|null; consented_at:string|null; created_at:string; updated_at:string };

const formatDate=(value:string)=>new Intl.DateTimeFormat("es-AR",{dateStyle:"short",timeStyle:"short",timeZone:"America/Argentina/Mendoza"}).format(new Date(value.replace(" ","T")+"Z"));
const includes=(row:object,query:string)=>Object.values(row).some(value=>String(value??"").toLowerCase().includes(query.toLowerCase()));

export function AdminDataTables({profiles,subscribers,leads,eventSubmissions,activity}:{profiles:ProfileRow[];subscribers:SubscriberRow[];leads:LeadRow[];eventSubmissions:EventSubmissionRow[];activity:ActivityRow[]}){
  const [profileQuery,setProfileQuery]=useState("");
  const [subscriberQuery,setSubscriberQuery]=useState("");
  const [leadQuery,setLeadQuery]=useState("");
  const [eventQuery,setEventQuery]=useState("");
  const filteredSubscribers=useMemo(()=>subscribers.filter(row=>includes(row,subscriberQuery)),[subscribers,subscriberQuery]);
  const filteredProfiles=useMemo(()=>profiles.filter(row=>includes(row,profileQuery)),[profiles,profileQuery]);
  const filteredLeads=useMemo(()=>leads.filter(row=>includes(row,leadQuery)),[leads,leadQuery]);
  const filteredEvents=useMemo(()=>eventSubmissions.filter(row=>includes(row,eventQuery)),[eventSubmissions,eventQuery]);
  return <section className="admin-data-stack">
    <article className="admin-card admin-table-card">
      <div className="admin-card-header"><div><span className="overline">Comunidad registrada</span><h2>Perfiles</h2><p>{profiles.filter(row=>row.consented_at).length} usuarios completaron sus datos.</p></div></div>
      <label className="admin-search"><Search size={17}/><input value={profileQuery} onChange={e=>setProfileQuery(e.target.value)} placeholder="Buscar por nombre, email o teléfono…"/></label>
      <Table className="admin-table"><TableHeader><TableRow><TableHead>Usuario</TableHead><TableHead>Email</TableHead><TableHead>Teléfono</TableHead><TableHead>Alta</TableHead><TableHead>Estado</TableHead></TableRow></TableHeader><TableBody>{filteredProfiles.length?filteredProfiles.map((row,index)=><TableRow key={`${row.email}-${index}`}><TableCell><strong>{[row.first_name,row.last_name].filter(Boolean).join(" ")||"Perfil incompleto"}</strong></TableCell><TableCell><a href={`mailto:${row.email}`}>{row.email}</a></TableCell><TableCell>{row.phone||"—"}</TableCell><TableCell>{formatDate(row.created_at)}</TableCell><TableCell><span className={`status-pill ${row.consented_at?"active":"new"}`}>{row.consented_at?"Completo":"Pendiente"}</span></TableCell></TableRow>):<TableRow><TableCell colSpan={5} className="table-empty">Todavía no hay perfiles registrados.</TableCell></TableRow>}</TableBody></Table>
    </article>
    <article className="admin-card admin-table-card">
      <div className="admin-card-header"><div><span className="overline">Base propia</span><h2>Suscriptores</h2><p>{subscribers.length} contactos registrados para recibir la agenda.</p></div><a className="export-button" href="/admin/export/subscribers"><Download size={16}/> Descargar CSV</a></div>
      <label className="admin-search"><Search size={17}/><input value={subscriberQuery} onChange={e=>setSubscriberQuery(e.target.value)} placeholder="Buscar por email, origen o estado…"/></label>
      <Table className="admin-table"><TableHeader><TableRow><TableHead>Email</TableHead><TableHead>Fecha de alta</TableHead><TableHead>Origen</TableHead><TableHead>Estado</TableHead></TableRow></TableHeader><TableBody>{filteredSubscribers.length?filteredSubscribers.map(row=><TableRow key={row.email}><TableCell><strong>{row.email}</strong></TableCell><TableCell>{formatDate(row.consented_at)}</TableCell><TableCell>{row.source}</TableCell><TableCell><span className={`status-pill ${row.status}`}>{row.status==="active"?"Activo":row.status}</span></TableCell></TableRow>):<TableRow><TableCell colSpan={4} className="table-empty">No hay suscriptores que coincidan.</TableCell></TableRow>}</TableBody></Table>
    </article>
    <article className="admin-card admin-table-card">
      <div className="admin-card-header"><div><span className="overline">Agenda colaborativa</span><h2>Eventos propuestos</h2><p>{eventSubmissions.length} actividades enviadas para revisión editorial.</p></div></div>
      <label className="admin-search"><Search size={17}/><input value={eventQuery} onChange={e=>setEventQuery(e.target.value)} placeholder="Buscar evento, organizador, fecha o lugar…"/></label>
      <Table className="admin-table"><TableHeader><TableRow><TableHead>Evento</TableHead><TableHead>Organizador</TableHead><TableHead>Fecha</TableHead><TableHead>Lugar</TableHead><TableHead>Costo</TableHead><TableHead>Fuente</TableHead><TableHead>Estado</TableHead></TableRow></TableHeader><TableBody>{filteredEvents.length?filteredEvents.map((row,index)=><TableRow key={`${row.email}-${row.created_at}-${index}`}><TableCell><strong>{row.event_name}</strong><small>{row.message||""}</small></TableCell><TableCell><a href={`mailto:${row.email}`}>{row.organizer}<small>{row.email}{row.phone?` · ${row.phone}`:""}</small></a></TableCell><TableCell>{row.event_date.replace("T"," ")}</TableCell><TableCell>{row.venue}</TableCell><TableCell>{row.cost||"—"}</TableCell><TableCell>{row.source_url?<a href={row.source_url} target="_blank" rel="noreferrer">Abrir fuente</a>:"—"}</TableCell><TableCell><span className={`status-pill ${row.status}`}>{row.status==="new"?"Nuevo":row.status}</span></TableCell></TableRow>):<TableRow><TableCell colSpan={7} className="table-empty">Todavía no hay eventos propuestos.</TableCell></TableRow>}</TableBody></Table>
    </article>
    <article className="admin-card admin-table-card">
      <div className="admin-card-header"><div><span className="overline">Oportunidades</span><h2>Contactos comerciales</h2><p>{leads.length} consultas recibidas desde el formulario de sponsors.</p></div><a className="export-button" href="/admin/export/leads"><Download size={16}/> Descargar CSV</a></div>
      <label className="admin-search"><Search size={17}/><input value={leadQuery} onChange={e=>setLeadQuery(e.target.value)} placeholder="Buscar comercio, nombre, email o categoría…"/></label>
      <Table className="admin-table"><TableHeader><TableRow><TableHead>Comercio</TableHead><TableHead>Contacto</TableHead><TableHead>Categoría</TableHead><TableHead>Mensaje</TableHead><TableHead>Fecha</TableHead><TableHead>Estado</TableHead></TableRow></TableHeader><TableBody>{filteredLeads.length?filteredLeads.map((row,index)=><TableRow key={`${row.email}-${row.created_at}-${index}`}><TableCell><strong>{row.business}</strong></TableCell><TableCell><a href={`mailto:${row.email}`}>{row.name}<small>{row.email}{row.phone?` · ${row.phone}`:""}</small></a></TableCell><TableCell>{row.category||"—"}</TableCell><TableCell className="message-cell" title={row.message||""}>{row.message||"—"}</TableCell><TableCell>{formatDate(row.created_at)}</TableCell><TableCell><span className={`status-pill ${row.status}`}>{row.status==="new"?"Nuevo":row.status}</span></TableCell></TableRow>):<TableRow><TableCell colSpan={6} className="table-empty">Todavía no hay contactos comerciales.</TableCell></TableRow>}</TableBody></Table>
    </article>
    <article className="admin-card admin-table-card">
      <div className="admin-card-header"><div><span className="overline">Trazabilidad</span><h2>Últimas acciones</h2><p>Detalle de las 100 interacciones más recientes registradas en la web.</p></div></div>
      <Table className="admin-table"><TableHeader><TableRow><TableHead>Acción</TableHead><TableHead>Contenido o página</TableHead><TableHead>Detalle</TableHead><TableHead>Origen</TableHead><TableHead>Dispositivo</TableHead><TableHead>Fecha</TableHead></TableRow></TableHeader><TableBody>{activity.length?activity.map((row,index)=><TableRow key={`${row.created_at}-${index}`}><TableCell><span className="event-pill">{eventLabel(row.event_name)}</span></TableCell><TableCell>{row.content_slug||row.path}</TableCell><TableCell>{row.value||"—"}</TableCell><TableCell>{row.referrer_host||"Directo"}</TableCell><TableCell>{row.device_type||"—"}</TableCell><TableCell>{formatDate(row.created_at)}</TableCell></TableRow>):<TableRow><TableCell colSpan={6} className="table-empty">Las acciones aparecerán cuando empiece a entrar audiencia.</TableCell></TableRow>}</TableBody></Table>
    </article>
  </section>
}

function eventLabel(value:string){return ({page_view:"Vista de página",content_view:"Vista de contenido",content_click:"Clic en contenido",search:"Búsqueda",filter:"Filtro",save:"Guardado",unsave:"Quitó guardado",map_click:"Abrió mapa",share:"Compartió",source_click:"Abrió fuente",newsletter_signup:"Suscripción",sponsor_form_submit:"Contacto comercial",event_submission:"Evento propuesto",itinerary_select:"Itinerario",outbound_click:"Clic externo"} as Record<string,string>)[value]||value.replaceAll("_"," ")}
