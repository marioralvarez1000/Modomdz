"use client";

import { useEffect, useState } from "react";
import { track } from "@/lib/track-client";

const KEY="modo-mza-analytics-consent";

export function PrivacyConsent(){
  const [visible,setVisible]=useState(false);
  useEffect(()=>{queueMicrotask(()=>setVisible(localStorage.getItem(KEY)===null))},[]);
  if(!visible)return null;
  function choose(value:"accepted"|"necessary"){
    localStorage.setItem(KEY,value);
    if(value==="accepted") track("page_view");
    window.dispatchEvent(new Event("modo-mza-consent"));
    setVisible(false);
  }
  return <aside className="privacy-consent" aria-label="Preferencias de privacidad">
    <div><b>Tu privacidad, sin vueltas</b><p>Usamos almacenamiento necesario para el acceso y, sólo si aceptás, medición anónima para mejorar Modo MZA. No usamos cookies publicitarias.</p><a href="/privacidad">Ver política de privacidad</a></div>
    <div className="consent-actions"><button className="consent-secondary" onClick={()=>choose("necessary")}>Sólo lo necesario</button><button className="consent-primary" onClick={()=>choose("accepted")}>Aceptar medición</button></div>
  </aside>;
}
