import { NextRequest, NextResponse } from "next/server";
import {
  GOOGLE_SESSION_COOKIE,
  GOOGLE_SESSION_MAX_AGE_SECONDS,
  createGoogleSessionValue,
  googleAuthSecret,
  googleClientId,
  googleClientSecret,
  verifyGoogleState,
} from "@/lib/google-auth";

type GoogleTokenResponse = { id_token?: string };
type GoogleTokenInfo = { aud?: string; sub?: string; email?: string; email_verified?: string; name?: string };

export async function GET(req: NextRequest) {
  const failure = (reason: string) => NextResponse.redirect(new URL(`/ingresar?error=${reason}`, req.url));

  const clientId = googleClientId();
  const clientSecret = googleClientSecret();
  const secret = googleAuthSecret();
  const code = req.nextUrl.searchParams.get("code");
  const stateToken = req.nextUrl.searchParams.get("state");
  if (!clientId || !clientSecret || !secret || !code || !stateToken) return failure("google_not_configured");

  const state = await verifyGoogleState(secret, stateToken);
  if (!state) return failure("google_expired");

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: `${req.nextUrl.origin}/api/auth/google/callback`,
      grant_type: "authorization_code",
    }),
  }).catch(() => null);
  if (!tokenResponse?.ok) return failure("google_failed");

  const tokenData = await tokenResponse.json() as GoogleTokenResponse;
  if (!tokenData.id_token) return failure("google_failed");

  const infoResponse = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(tokenData.id_token)}`).catch(() => null);
  if (!infoResponse?.ok) return failure("google_failed");

  const claims = await infoResponse.json() as GoogleTokenInfo;
  if (claims.aud !== clientId || !claims.sub || !claims.email || claims.email_verified !== "true") return failure("google_failed");

  const sessionValue = await createGoogleSessionValue(secret, { sub: claims.sub, email: claims.email, name: claims.name || null });
  const response = NextResponse.redirect(new URL(state.returnTo, req.url));
  response.cookies.set(GOOGLE_SESSION_COOKIE, sessionValue, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: GOOGLE_SESSION_MAX_AGE_SECONDS,
  });
  return response;
}
