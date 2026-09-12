import { env } from "cloudflare:workers";
import { NextRequest,NextResponse } from "next/server";

type Row=Record<string,string|number|null>;

export async function GET(req:NextRequest){
  const runtime=env as unknown as Record<string,unknown>;
  const expected=typeof runtime.VISITOR_ALERT_TOKEN==="string"?runtime.VISITOR_ALERT_TOKEN:"";
  const supplied=req.nextUrl.searchParams.get("key")||"";
  if(!expected||supplied!==expected)return NextResponse.json({error:"unauthorized"},{status:401});
  const start="strftime('%Y-%m-%d %H:00:00','now','-1 hour')",end="strftime('%Y-%m-%d %H:00:00','now')";
  const summary=await env.DB.prepare(`SELECT COUNT(DISTINCT visitor_id) visitors, COUNT(DISTINCT session_id) sessions, COUNT(*) views FROM analytics_events WHERE event_name IN ('page_view','content_view') AND created_at >= ${start} AND created_at < ${end}`).first<Row>();
  const top=(await env.DB.prepare(`SELECT path, COUNT(*) views FROM analytics_events WHERE event_name IN ('page_view','content_view') AND created_at >= ${start} AND created_at < ${end} GROUP BY path ORDER BY views DESC LIMIT 5`).all<Row>()).results;
  return NextResponse.json({period:"previous_utc_hour",visitors:Number(summary?.visitors||0),sessions:Number(summary?.sessions||0),views:Number(summary?.views||0),topPages:top.map(row=>({path:String(row.path||"/"),views:Number(row.views||0)}))});
}
