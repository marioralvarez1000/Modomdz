"use client";

import { Bookmark, ChevronDown, CircleUserRound, LogIn, LogOut, UserRound } from "lucide-react";
import type { Viewer } from "@/components/saved-provider";

export function AccountMenu({viewer}:{viewer:Viewer}){
  if(!viewer) return <a className="account-signin" href="/ingresar"><LogIn size={17}/><span>Ingresar</span></a>;
  return <details className="account-menu">
    <summary aria-label="Abrir menú de usuario"><CircleUserRound size={23}/><ChevronDown size={14}/></summary>
    <div className="account-popover">
      <div className="account-identity"><UserRound size={20}/><span><b>{viewer.displayName}</b><small>{viewer.email}</small></span></div>
      {!viewer.profileComplete&&<a className="complete-profile-link" href="/registro"><UserRound size={17}/>Completar mi perfil</a>}
      <a href="/guardados"><Bookmark size={17}/>Mis favoritos</a>
      <a href="/cuenta"><CircleUserRound size={17}/>Mi cuenta</a>
      <a href="/signout-with-chatgpt?return_to=%2F" target="_top"><LogOut size={17}/>Cerrar sesión</a>
    </div>
  </details>;
}
