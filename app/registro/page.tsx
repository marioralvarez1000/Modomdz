import type { Metadata } from "next";
import { requireChatGPTUser } from "@/app/chatgpt-auth";
import { ProfileForm } from "@/components/profile-form";
import { ensureUserProfile } from "@/lib/user-profile";

export const metadata: Metadata = { title: "Crear perfil", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function Page({ searchParams }: { searchParams: Promise<{ returnTo?: string }> }) {
  const params = await searchParams;
  const returnTo = params.returnTo?.startsWith("/") && !params.returnTo.startsWith("//") ? params.returnTo : "/cuenta";
  const user = await requireChatGPTUser(`/registro?returnTo=${encodeURIComponent(returnTo)}`);
  const profile = await ensureUserProfile(user);
  return <main className="shell simple-page registration-page"><span className="overline">Un perfil, todos tus planes</span><h1>{profile?.firstName ? "Actualizá tu perfil" : "Creá tu perfil"}</h1><p>Usamos estos datos únicamente para identificar tu cuenta, guardar tus elecciones y brindarte soporte.</p><ProfileForm email={user.email} initial={profile} returnTo={returnTo}/></main>;
}
