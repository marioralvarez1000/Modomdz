import { eq } from "drizzle-orm";
import type { ChatGPTUser } from "@/app/chatgpt-auth";
import { getDb } from "@/db";
import { userProfiles } from "@/db/schema";

export async function ensureUserProfile(user: ChatGPTUser) {
  const email = user.email.trim().toLowerCase();
  await getDb().insert(userProfiles).values({
    userId: user.userId,
    email,
    displayName: user.fullName,
  }).onConflictDoUpdate({
    target: userProfiles.userId,
    set: { email, updatedAt: new Date().toISOString() },
  });
  return getDb().query.userProfiles.findFirst({ where: eq(userProfiles.userId, user.userId) });
}

export function profileIsComplete(profile: Awaited<ReturnType<typeof ensureUserProfile>>) {
  return Boolean(profile?.firstName?.trim() && profile?.lastName?.trim() && profile?.phone?.trim() && profile?.consentedAt);
}

export async function viewerFor(user: ChatGPTUser | null) {
  if (!user) return null;
  const profile = await ensureUserProfile(user);
  const fullName = [profile?.firstName, profile?.lastName].filter(Boolean).join(" ");
  return {
    email: user.email,
    displayName: fullName || profile?.displayName || user.displayName,
    profileComplete: profileIsComplete(profile),
  };
}
