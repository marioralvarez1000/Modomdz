"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, LoaderCircle, ShieldCheck } from "lucide-react";

export function ProfileForm({ email, initial, returnTo = "/cuenta" }: {
  email: string;
  initial?: { firstName?: string | null; lastName?: string | null; phone?: string | null };
  returnTo?: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/profile", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ firstName: form.get("firstName"), lastName: form.get("lastName"), phone: form.get("phone"), consent: form.get("consent") === "yes" }),
    }).catch(() => null);
    if (!response?.ok) { setStatus("error"); return; }
    window.location.assign(returnTo.startsWith("/") && !returnTo.startsWith("//") ? returnTo : "/cuenta");
  }
  return <form className="profile-form" onSubmit={submit}>
    <div className="profile-form-grid">
      <label>Nombre<input required minLength={2} maxLength={80} autoComplete="given-name" name="firstName" defaultValue={initial?.firstName ?? ""}/></label>
      <label>Apellido<input required minLength={2} maxLength={80} autoComplete="family-name" name="lastName" defaultValue={initial?.lastName ?? ""}/></label>
      <label className="profile-wide">Email<input readOnly value={email} aria-describedby="email-help"/></label>
      <small id="email-help" className="profile-wide">Este email identifica tu cuenta y no se publica.</small>
      <label className="profile-wide">Teléfono<input required minLength={7} maxLength={40} inputMode="tel" autoComplete="tel" name="phone" placeholder="Ej.: +54 9 261 555 0000" defaultValue={initial?.phone ?? ""}/></label>
    </div>
    <label className="profile-consent"><input required type="checkbox" name="consent" value="yes" defaultChecked={Boolean(initial?.firstName)}/><span>Acepto la <a href="/privacidad" target="_blank">Política de privacidad</a> y que Modo MZA use estos datos para administrar mi cuenta, mis favoritos y mi actividad personal. Crear una cuenta no me suscribe a publicidad.</span></label>
    {status === "error" && <p className="profile-error">No pudimos guardar el perfil. Revisá los datos e intentá nuevamente.</p>}
    <button className="profile-submit" disabled={status === "loading"}>{status === "loading" ? <><LoaderCircle className="spin"/>Guardando…</> : <><CheckCircle2/>Guardar mi perfil</>}</button>
    <p className="profile-security"><ShieldCheck/>El acceso está protegido por el proveedor de identidad; Modo MZA no recibe ni almacena contraseñas.</p>
  </form>;
}
