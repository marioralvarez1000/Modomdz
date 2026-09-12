import { redirect } from "next/navigation";
import { getChatGPTUser, type ChatGPTUser } from "@/app/chatgpt-auth";
import { getGoogleUser } from "@/lib/google-auth";

export type AuthUser = ChatGPTUser & { provider: "chatgpt" | "google" };

export async function getUser(): Promise<AuthUser | null> {
  const chatgpt = await getChatGPTUser();
  if (chatgpt) return { ...chatgpt, provider: "chatgpt" };
  const google = await getGoogleUser();
  if (google) return { ...google, provider: "google" };
  return null;
}

export async function requireUser(returnTo: string): Promise<AuthUser> {
  const user = await getUser();
  if (user) return user;
  redirect(`/ingresar?returnTo=${encodeURIComponent(safeReturnPath(returnTo))}`);
}

export function googleSignInPath(returnTo: string): string {
  return `/api/auth/google/start?return_to=${encodeURIComponent(safeReturnPath(returnTo))}`;
}

export function signOutPath(returnTo = "/"): string {
  return `/salir?return_to=${encodeURIComponent(safeReturnPath(returnTo))}`;
}

function safeReturnPath(value: string): string {
  return value.startsWith("/") && !value.startsWith("//") ? value : "/";
}
