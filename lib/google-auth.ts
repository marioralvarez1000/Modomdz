import { cookies } from "next/headers";
import { env } from "cloudflare:workers";
import type { ChatGPTUser } from "@/app/chatgpt-auth";

export const GOOGLE_SESSION_COOKIE = "mza_google_session";
export const GOOGLE_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;
const STATE_MAX_AGE_SECONDS = 600;

function runtimeEnv() {
  return env as unknown as Record<string, string | undefined>;
}

export function googleAuthSecret(): string | null {
  return runtimeEnv().AUTH_SESSION_SECRET || null;
}

export function googleClientId(): string | null {
  return runtimeEnv().GOOGLE_CLIENT_ID || null;
}

export function googleClientSecret(): string | null {
  return runtimeEnv().GOOGLE_CLIENT_SECRET || null;
}

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlToBytes(value: string): Uint8Array {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((value.length + 3) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function hmacKey(secret: string) {
  return crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}

async function signToken(secret: string, payload: object): Promise<string> {
  const payloadB64 = bytesToBase64Url(new TextEncoder().encode(JSON.stringify(payload)));
  const key = await hmacKey(secret);
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payloadB64));
  return `${payloadB64}.${bytesToBase64Url(new Uint8Array(signature))}`;
}

async function verifyToken<T>(secret: string, token: string): Promise<T | null> {
  const [payloadB64, sigB64] = token.split(".");
  if (!payloadB64 || !sigB64) return null;
  const key = await hmacKey(secret);
  const valid = await crypto.subtle.verify("HMAC", key, base64UrlToBytes(sigB64) as BufferSource, new TextEncoder().encode(payloadB64));
  if (!valid) return null;
  try {
    return JSON.parse(new TextDecoder().decode(base64UrlToBytes(payloadB64))) as T;
  } catch {
    return null;
  }
}

export type GoogleOAuthState = { returnTo: string; exp: number };

export async function signGoogleState(secret: string, returnTo: string): Promise<string> {
  return signToken(secret, { returnTo, exp: Math.floor(Date.now() / 1000) + STATE_MAX_AGE_SECONDS } satisfies GoogleOAuthState);
}

export async function verifyGoogleState(secret: string, token: string): Promise<GoogleOAuthState | null> {
  const state = await verifyToken<GoogleOAuthState>(secret, token);
  if (!state || state.exp < Math.floor(Date.now() / 1000)) return null;
  return state;
}

type GoogleSessionPayload = { sub: string; email: string; name: string | null; exp: number };

export async function createGoogleSessionValue(secret: string, user: { sub: string; email: string; name: string | null }): Promise<string> {
  return signToken(secret, { ...user, exp: Math.floor(Date.now() / 1000) + GOOGLE_SESSION_MAX_AGE_SECONDS } satisfies GoogleSessionPayload);
}

export async function getGoogleUser(): Promise<ChatGPTUser | null> {
  const secret = googleAuthSecret();
  if (!secret) return null;
  const jar = await cookies();
  const raw = jar.get(GOOGLE_SESSION_COOKIE)?.value;
  if (!raw) return null;
  const payload = await verifyToken<GoogleSessionPayload>(secret, raw);
  if (!payload || payload.exp < Math.floor(Date.now() / 1000)) return null;
  return {
    userId: `google:${payload.sub}`,
    email: payload.email,
    displayName: payload.name || payload.email,
    fullName: payload.name,
  };
}
