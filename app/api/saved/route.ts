import { NextRequest, NextResponse } from "next/server";
import { and, desc, eq } from "drizzle-orm";
import { getUser } from "@/lib/auth";
import { getDb } from "@/db";
import { savedPlaces, userActivity } from "@/db/schema";
import { content } from "@/lib/content";
import { ensureUserProfile } from "@/lib/user-profile";

const validSlugs = new Set(content.map((item) => item.slug));

async function currentUser() {
  const user = await getUser();
  if (!user) return null;
  await ensureUserProfile(user);
  return user;
}

export async function GET() {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const rows = await getDb().select({ slug: savedPlaces.slug }).from(savedPlaces)
    .where(eq(savedPlaces.userId, user.userId)).orderBy(desc(savedPlaces.createdAt));
  return NextResponse.json({ saved: rows.map((row) => row.slug) });
}

export async function POST(request: NextRequest) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const { slug } = await request.json().catch(() => ({ slug: "" }));
  if (typeof slug !== "string" || !validSlugs.has(slug)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  await getDb().batch([
    getDb().insert(savedPlaces).values({ userId: user.userId, slug }).onConflictDoNothing({ target: [savedPlaces.userId, savedPlaces.slug] }),
    getDb().insert(userActivity).values({ userId: user.userId, eventName: "save", contentSlug: slug }),
  ]);
  return NextResponse.json({ ok: true }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const { slug } = await request.json().catch(() => ({ slug: "" }));
  if (typeof slug !== "string" || !validSlugs.has(slug)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  await getDb().batch([
    getDb().delete(savedPlaces).where(and(eq(savedPlaces.userId, user.userId), eq(savedPlaces.slug, slug))),
    getDb().insert(userActivity).values({ userId: user.userId, eventName: "unsave", contentSlug: slug }),
  ]);
  return NextResponse.json({ ok: true });
}
