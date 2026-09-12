import { NextRequest, NextResponse } from "next/server";
import { env } from "cloudflare:workers";
import { content } from "@/lib/content";

const places = content.filter((item) => item.type === "lugar")
  .map((item) => ({ slug: item.slug, title: item.title, category: item.category, zone: item.zone, summary: item.summary }));

const SYSTEM_PROMPT = `Sos el buscador de Modo MZA, una guía de lugares en Mendoza, Argentina.
Vas a recibir un pedido en lenguaje libre (en español) y una lista de lugares disponibles.
Devolvé los slugs de los lugares que mejor respondan al pedido, ordenados del más al menos relevante.
Si nada encaja razonablemente, devolvé una lista vacía. Nunca inventes un slug que no esté en la lista.`;

const RESPONSE_SCHEMA = {
  name: "search_results",
  schema: {
    type: "object",
    properties: { slugs: { type: "array", items: { type: "string" }, maxItems: 8 } },
    required: ["slugs"],
    additionalProperties: false,
  },
};

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({})) as Record<string, unknown>;
  const query = typeof body.query === "string" ? body.query.trim().slice(0, 200) : "";
  if (!query) return NextResponse.json({ slugs: [] });

  const apiKey = (env as unknown as Record<string, string | undefined>).OPENAI_API_KEY;
  if (!apiKey) return NextResponse.json({ slugs: [] });

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: JSON.stringify({ query, places }) },
        ],
        response_format: { type: "json_schema", json_schema: RESPONSE_SCHEMA },
        temperature: 0,
      }),
    });
    if (!response.ok) return NextResponse.json({ slugs: [] });

    const data = await response.json() as { choices?: { message?: { content?: string } }[] };
    const raw = data.choices?.[0]?.message?.content;
    if (!raw) return NextResponse.json({ slugs: [] });

    const parsed = JSON.parse(raw) as { slugs?: unknown };
    const validSlugs = new Set(places.map((place) => place.slug));
    const slugs = Array.isArray(parsed.slugs) ? parsed.slugs.filter((slug): slug is string => typeof slug === "string" && validSlugs.has(slug)) : [];
    return NextResponse.json({ slugs });
  } catch {
    return NextResponse.json({ slugs: [] });
  }
}
