import { NextRequest, NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";
import { getChatGPTUser } from "@/app/chatgpt-auth";
import { getDb } from "@/db";
import { userActivity } from "@/db/schema";
import { content } from "@/lib/content";
import { ensureUserProfile } from "@/lib/user-profile";

const allowed = new Set(["map_click", "share", "source_click"]);
const validSlugs = new Set(content.map((item) => item.slug));

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const rows = await getDb().select().from(userActivity).where(eq(userActivity.userId, user.userId)).orderBy(desc(userActivity.createdAt)).limit(30);
  return NextResponse.json({ activity: rows });
}

export async function POST(request: NextRequest) {
  const user = await getChatGPTUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const body = await request.json().catch(() => ({})) as Record<string, unknown>;
  if (!allowed.has(body.eventName) || typeof body.contentSlug !== "string" || !validSlugs.has(body.contentSlug)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  await ensureUserProfile(user);
  await getDb().insert(userActivity).values({ userId: user.userId, eventName: body.eventName, contentSlug: body.contentSlug });
  return NextResponse.json({ ok: true }, { status: 201 });
}
