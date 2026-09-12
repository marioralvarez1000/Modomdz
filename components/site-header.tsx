"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import { Bookmark, ChevronDown, Compass, MapPin, Store } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { useSaved } from "@/components/saved-provider";
import { AccountMenu } from "@/components/account-menu";
import type { Viewer } from "@/components/saved-provider";

export function SiteHeader({viewer}:{viewer:Viewer}) {
  const {saved}=useSaved();
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="/" className="brand" aria-label="Modo MZA, inicio">
          <BrandLogo/>
        </a>
        <details className="explore-menu">
          <summary><Compass size={17}/> Explorar Mendoza <ChevronDown size={15}/></summary>
          <nav aria-label="Explorar Mendoza">
            <a href="/agenda"><b>Agenda</b><span>Eventos próximos y verificados</span></a>
            <a href="/lugares"><b>Lugares</b><span>Bodegas, gastronomía y paseos</span></a>
            <a href="/itinerarios"><b>Recorridos</b><span>Planes listos para seguir</span></a>
            <a href="/guias"><b>Guías útiles</b><span>Movilidad, clima y seguridad</span></a>
            <a href="/gratis"><b>Todo gratis</b><span>Sin entrada ni consumo obligatorio</span></a>
            <a href="/enviar-evento"><b>Enviar un evento</b><span>Proponelo para revisión editorial</span></a>
          </nav>
        </details>
        <a href="/hoy" className="today-link"><MapPin size={16}/> Qué hacer hoy</a>
        <a href="/anunciar" className="business-link" aria-label="Sumá tu negocio a Modo MZA"><Store size={16}/> <span>Sumá tu negocio</span></a>
        <a href="/guardados" className="saved-link"><Bookmark size={17}/> <span>Favoritos</span>{saved.length>0&&<b className="saved-count">{saved.length}</b>}</a>
        <AccountMenu viewer={viewer}/>
      </div>
    </header>
  );
}
