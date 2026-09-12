import { NextRequest, NextResponse } from "next/server";
import { chatGPTSignOutPath } from "@/app/chatgpt-auth";
import { GOOGLE_SESSION_COOKIE } from "@/lib/google-auth";
import { getUser } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const returnToRaw = req.nextUrl.searchParams.get("return_to") || "/";
  const returnTo = returnToRaw.startsWith("/") && !returnToRaw.startsWith("//") ? returnToRaw : "/";
  const user = await getUser();

  if (user?.provider === "google") {
    const response = NextResponse.redirect(new URL(returnTo, req.url));
    response.cookies.delete(GOOGLE_SESSION_COOKIE);
    return response;
  }

  return NextResponse.redirect(new URL(chatGPTSignOutPath(returnTo), req.url));
}
