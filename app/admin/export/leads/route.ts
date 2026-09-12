import { env } from "cloudflare:workers";
import { csvCell,isAdmin } from "@/lib/admin-auth";

export const dynamic="force-dynamic";

export async function GET(){
  if(!await isAdmin()) return new Response("No autorizado",{status:401});
  const rows=(await env.DB.prepare("SELECT business,name,email,phone,category,message,status,created_at FROM sponsor_leads ORDER BY created_at DESC").all<Record<string,unknown>>()).results;
  const csv=["Comercio,Nombre,Email,Teléfono,Categoría,Mensaje,Estado,Fecha",...rows.map(row=>[row.business,row.name,row.email,row.phone,row.category,row.message,row.status,row.created_at].map(csvCell).join(","))].join("\r\n");
  return new Response(`\uFEFF${csv}`,{headers:{"content-type":"text/csv; charset=utf-8","content-disposition":'attachment; filename="modo-mza-contactos-comerciales.csv"',"cache-control":"no-store"}});
}
