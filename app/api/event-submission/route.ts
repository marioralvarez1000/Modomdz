import { NextRequest,NextResponse } from "next/server";
import { getDb } from "@/db";
import { eventSubmissions } from "@/db/schema";
import { safeHtml,sendOperationalEmail } from "@/lib/notifications";

const s=(v:unknown,n:number)=>typeof v==="string"?v.trim().slice(0,n):"";

export async function POST(req:NextRequest){
  try{
    const body=await req.json();
    const eventName=s(body.eventName,140),organizer=s(body.organizer,120),email=s(body.email,160),phone=s(body.phone,40),eventDate=s(body.eventDate,40),venue=s(body.venue,180),cost=s(body.cost,80),sourceUrl=s(body.sourceUrl,500),message=s(body.message,1200);
    if(!eventName||!organizer||!eventDate||!venue||body.consent!=="yes"||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return NextResponse.json({error:"invalid"},{status:400});
    if(sourceUrl&&!/^https?:\/\//i.test(sourceUrl))return NextResponse.json({error:"invalid_url"},{status:400});
    await getDb().insert(eventSubmissions).values({eventName,organizer,email:email.toLowerCase(),phone:phone||null,eventDate,venue,cost:cost||null,sourceUrl:sourceUrl||null,message:message||null,consentedAt:new Date().toISOString()});
    await sendOperationalEmail(`Evento para revisar: ${eventName}`,`<h2>Nueva propuesta de agenda</h2><p><strong>Evento:</strong> ${safeHtml(eventName)}</p><p><strong>Organiza:</strong> ${safeHtml(organizer)}</p><p><strong>Fecha:</strong> ${safeHtml(eventDate)}</p><p><strong>Lugar:</strong> ${safeHtml(venue)}</p><p><strong>Costo:</strong> ${safeHtml(cost||"—")}</p><p><strong>Contacto:</strong> ${safeHtml(email.toLowerCase())} ${safeHtml(phone||"")}</p><p><strong>Fuente:</strong> ${safeHtml(sourceUrl||"—")}</p><p><strong>Detalle:</strong> ${safeHtml(message||"—")}</p>`);
    return NextResponse.json({ok:true},{status:201});
  }catch{return NextResponse.json({error:"invalid"},{status:400})}
}
