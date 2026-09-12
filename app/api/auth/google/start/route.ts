import { NextRequest, NextResponse } from "next/server";
import { googleAuthSecret, googleClientId, signGoogleState } from "@/lib/google-auth";

export async function GET(req: NextRequest) {
  const returnToRaw = req.nextUrl.searchParams.get("return_to") || "/";
  const returnTo = returnToRaw.startsWith("/") && !returnToRaw.startsWith("//") ? returnToRaw : "/";
  const clientId = googleClientId();
  const secret = googleAuthSecret();
  if (!clientId || !secret) {
    return NextResponse.redirect(new URL("/ingresar?error=google_not_configured", req.url));
  }

  const state = await signGoogleState(secret, returnTo);
  const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("redirect_uri", `${req.nextUrl.origin}/api/auth/google/callback`);
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("scope", "openid email profile");
  authUrl.searchParams.set("state", state);
  authUrl.searchParams.set("prompt", "select_account");
  return NextResponse.redirect(authUrl.toString());
}
