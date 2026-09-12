import type { Metadata } from "next";
import { LogIn, ShieldCheck, UserPlus } from "lucide-react";
import { getChatGPTUser, chatGPTSignInPath } from "@/app/chatgpt-auth";

export const metadata: Metadata = { title: "Ingresar", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function Page({ searchParams }: { searchParams: Promise<{ returnTo?: string }> }) {
  const user = await getChatGPTUser();
  const { returnTo = "/cuenta" } = await searchParams;
  const safeReturnTo = returnTo.startsWith("/") && !returnTo.startsWith("//") ? returnTo : "/cuenta";
  return <main className="shell auth-page">
    <section className="auth-intro"><span className="overline">Tu Modo MZA</span><h1>Guardá Mendoza a tu manera.</h1><p>Armá tu agenda, marcá lugares y retomá tus planes desde cualquier dispositivo.</p></section>
    <section className="auth-panel">
      {user ? <><h2>Ya ingresaste</h2><p>Continuá a tu perfil o completá tus datos para personalizar tu cuenta.</p><a className="auth-primary" href="/cuenta"><LogIn/>Ir a mi perfil</a></> : <>
        <div className="auth-option"><UserPlus/><div><h2>Crear mi perfil</h2><p>Completá nombre, apellido, email y teléfono. Tus favoritos quedarán asociados a tu cuenta.</p></div></div>
        <a className="auth-primary" href={chatGPTSignInPath(`/registro?returnTo=${encodeURIComponent(safeReturnTo)}`)} target="_top">Crear mi perfil</a>
        <div className="auth-divider"><span>o</span></div>
        <div className="auth-option compact"><LogIn/><div><h2>Ya tengo perfil</h2><p>Ingresá con el mismo email que usaste al registrarte.</p></div></div>
        <a className="auth-secondary" href={chatGPTSignInPath(safeReturnTo)} target="_top">Ingresar a mi cuenta</a>
        <small className="auth-safe"><ShieldCheck/>Acceso seguro. Modo MZA no recibe tu contraseña.</small>
      </>}
    </section>
  </main>;
}
