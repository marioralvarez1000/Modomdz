
/* eslint-disable @next/next/no-html-link-for-pages */
import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><div className="brand footer-brand"><BrandLogo/></div><p>Tu acceso directo a los mejores planes de Mendoza.</p></div>
        <div><b>Explorá</b><a href="/hoy">Qué hacer hoy</a><a href="/gratis">Planes gratis</a><a href="/agenda">Agenda</a><a href="/itinerarios">Itinerarios</a></div>
        <div><b>Modo MZA</b><a href="/anunciar">Anunciá tu espacio</a><a href="mailto:contacto@modomza.com">contacto@modomza.com</a><a href="/privacidad">Privacidad</a><a href="/terminos">Términos</a></div>
        <div><b>Información útil</b><a href="https://www.argentina.gob.ar/smn" target="_blank" rel="noreferrer">Clima oficial</a><a href="https://www.argentina.gob.ar/seguridad/pasosinternacionales/detalle/ruta/29/Sistema-Cristo-Redentor" target="_blank" rel="noreferrer">Paso a Chile</a><a href="/guias/emergencias-y-policia-turistica">Emergencias</a></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Modo MZA</span><span>Fuentes oficiales · Actualización editorial visible en cada ficha</span></div>
    </footer>
  );
}
