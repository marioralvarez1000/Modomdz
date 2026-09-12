import type { Metadata } from "next";
import Link from "next/link";
import { desc, eq } from "drizzle-orm";
import { Bookmark, CalendarDays, ChevronRight, Edit3, History, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { requireChatGPTUser, chatGPTSignOutPath } from "@/app/chatgpt-auth";
import { getDb } from "@/db";
import { savedPlaces, userActivity } from "@/db/schema";
import { content, hrefFor } from "@/lib/content";
import { ensureUserProfile, profileIsComplete } from "@/lib/user-profile";

export const metadata: Metadata = { title: "Mi perfil", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

const activityLabel: Record<string, string> = { save: "Guardaste", unsave: "Quitaste de favoritos", map_click: "Consultaste cómo llegar a", share: "Compartiste", source_click: "Abriste la fuente oficial de" };

export default async function AccountPage() {
  const user = await requireChatGPTUser("/cuenta");
  const profile = await ensureUserProfile(user);
  if (!profileIsComplete(profile)) return <main className="shell simple-page registration-page"><span className="overline">Terminá de crear tu cuenta</span><h1>Completá tu perfil</h1><p>Falta un paso para que tus favoritos y actividad queden organizados en Modo MZA.</p><Link className="profile-submit inline-profile-cta" href="/registro">Completar mis datos</Link></main>;
  const [saved, activity] = await Promise.all([
    getDb().select({ slug: savedPlaces.slug }).from(savedPlaces).where(eq(savedPlaces.userId, user.userId)).orderBy(desc(savedPlaces.createdAt)).limit(6),
    getDb().select().from(userActivity).where(eq(userActivity.userId, user.userId)).orderBy(desc(userActivity.createdAt)).limit(8),
  ]);
  const savedItems = saved.map((row) => content.find((item) => item.slug === row.slug)).filter(Boolean) as typeof content;
  return <main className="shell profile-page">
    <header className="profile-header"><div className="account-avatar">{profile!.firstName!.slice(0, 1).toUpperCase()}</div><div><span className="overline">Tu espacio personal</span><h1>{profile!.firstName} {profile!.lastName}</h1><p><Mail/>{profile!.email}<span>·</span><Phone/>{profile!.phone}</p></div><Link className="profile-edit" href="/registro"><Edit3/>Editar perfil</Link></header>
    <section className="profile-summary"><Link href="/guardados"><Bookmark/><div><b>{savedItems.length}</b><span>Favoritos recientes</span></div><ChevronRight/></Link><Link href="/agenda"><CalendarDays/><div><b>{savedItems.filter((item) => item.type === "evento").length}</b><span>Eventos guardados</span></div><ChevronRight/></Link><div><ShieldCheck/><div><b>Cuenta protegida</b><span>Datos privados y acceso seguro</span></div></div></section>
    <div className="profile-columns"><section><div className="profile-section-title"><div><span className="overline">Tu selección</span><h2>Favoritos</h2></div><Link href="/guardados">Ver todos</Link></div>{savedItems.length ? <div className="profile-favorites">{savedItems.map((item) => <Link key={item.slug} href={hrefFor(item)}><span>{item.type === "evento" ? <CalendarDays/> : <MapPin/>}</span><div><b>{item.title}</b><small>{item.category} · {item.zone}</small></div><ChevronRight/></Link>)}</div> : <div className="profile-empty"><Bookmark/><b>Tu lista está lista para empezar</b><p>Guardá lugares y eventos desde cualquier ficha.</p><Link href="/lugares">Explorar lugares</Link></div>}</section>
      <section><div className="profile-section-title"><div><span className="overline">Historial personal</span><h2>Actividad reciente</h2></div></div>{activity.length ? <div className="profile-activity">{activity.map((row) => { const item = content.find((entry) => entry.slug === row.contentSlug); return <div key={row.id}><History/><p>{activityLabel[row.eventName] ?? "Interactuaste con"} {item ? <Link href={hrefFor(item)}>{item.title}</Link> : "un contenido"}<small>{new Intl.DateTimeFormat("es-AR", { dateStyle: "medium", timeStyle: "short", timeZone: "America/Argentina/Mendoza" }).format(new Date(`${row.createdAt.replace(" ", "T")}Z`))}</small></p></div>})}</div> : <div className="profile-empty compact"><History/><b>Todavía no hay actividad</b><p>Tus guardados, mapas y contenidos compartidos aparecerán acá.</p></div>}</section></div>
    <footer className="profile-account-footer"><a href={chatGPTSignOutPath("/")} target="_top">Cerrar sesión</a><a href="mailto:contacto@modomza.com?subject=Privacidad%20-%20Mi%20cuenta">Solicitar acceso o eliminación de mis datos</a></footer>
  </main>;
}
