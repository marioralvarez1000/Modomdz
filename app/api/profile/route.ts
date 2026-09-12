import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { getChatGPTUser } from "@/app/chatgpt-auth";
import { getDb } from "@/db";
import { userProfiles } from "@/db/schema";
import { ensureUserProfile, profileIsComplete } from "@/lib/user-profile";

const clean = (value: unknown, max: number) => typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, max) : "";

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const profile = await ensureUserProfile(user);
  return NextResponse.json({
    email: user.email,
    firstName: profile?.firstName ?? "",
    lastName: profile?.lastName ?? "",
    phone: profile?.phone ?? "",
    complete: profileIsComplete(profile),
  });
}

export async function POST(request: NextRequest) {
  const user = await getChatGPTUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const body = await request.json().catch(() => ({})) as Record<string, unknown>;
  const firstName = clean(body.firstName, 80);
  const lastName = clean(body.lastName, 80);
  const phone = clean(body.phone, 40);
  if (firstName.length < 2 || lastName.length < 2 || !/^[+()0-9\s-]{7,40}$/.test(phone) || body.consent !== true) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  await ensureUserProfile(user);
  await getDb().update(userProfiles).set({
    firstName,
    lastName,
    phone,
    displayName: `${firstName} ${lastName}`,
    consentedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }).where(eq(userProfiles.userId, user.userId));
  return NextResponse.json({ ok: true });
}
