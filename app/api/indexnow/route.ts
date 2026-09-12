import { env } from "cloudflare:workers";
import { NextRequest, NextResponse } from "next/server";
import { content, hrefFor } from "@/lib/content";

const host = "modomza.com.ar";
const base = `https://${host}`;
const key = "70a9341d7da330d45e527a14a8efc655";
const fixedPaths = [
  "",
  "/hoy",
  "/gratis",
  "/agenda",
  "/lugares",
  "/itinerarios",
  "/guias",
  "/enviar-evento",
  "/anunciar",
  "/contacto",
  "/privacidad",
  "/terminos",
];

async function submit(req: NextRequest) {
  const runtime = env as unknown as Record<string, unknown>;
  const expected = typeof runtime.VISITOR_ALERT_TOKEN === "string" ? runtime.VISITOR_ALERT_TOKEN : "";
  const supplied = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "") || req.nextUrl.searchParams.get("key") || "";

  if (!expected || supplied !== expected) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const urlList = [
    ...fixedPaths.map((path) => `${base}${path}`),
    ...content.map((item) => `${base}${hrefFor(item)}`),
  ];

  const payload = JSON.stringify({
    host,
    key,
    keyLocation: `${base}/${key}.txt`,
    urlList,
  });
  const endpoints = ["https://api.indexnow.org/indexnow", "https://www.bing.com/indexnow"];
  const attempts: number[] = [];

  for (const endpoint of endpoints) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: payload,
    });
    attempts.push(response.status);
    if (response.ok) {
      return NextResponse.json({ submitted: urlList.length, upstreamStatus: response.status });
    }
  }

  return NextResponse.json({ error: "indexnow_rejected", attempts }, { status: 502 });
}

export async function GET(req: NextRequest) {
  return submit(req);
}

export async function POST(req: NextRequest) {
  return submit(req);
}
