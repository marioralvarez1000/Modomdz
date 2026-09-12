import { env } from "cloudflare:workers";
import { csvCell,isAdmin } from "@/lib/admin-auth";

export const dynamic="force-dynamic";

export async function GET(){
  if(!await isAdmin()) return new Response("No autorizado",{status:401});
  const rows=(await env.DB.prepare("SELECT email,status,source,consented_at FROM newsletter_subscribers ORDER BY consented_at DESC").all<Record<string,unknown>>()).results;
  const csv=["Email,Estado,Origen,Fecha de alta",...rows.map(row=>[row.email,row.status,row.source,row.consented_at].map(csvCell).join(","))].join("\r\n");
  return new Response(`\uFEFF${csv}`,{headers:{"content-type":"text/csv; charset=utf-8","content-disposition":'attachment; filename="modo-mza-suscriptores.csv"',"cache-control":"no-store"}});
}
