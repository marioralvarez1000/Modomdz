"use client";

import { ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

const KEY="modo-mza-analytics-disabled";

export function AnalyticsExclusion(){
  const [excluded,setExcluded]=useState(true);
  useEffect(()=>{
    const current=localStorage.getItem(KEY);
    if(current===null){localStorage.setItem(KEY,"true");return;}
    queueMicrotask(()=>setExcluded(current==="true"));
  },[]);
  function toggle(){const next=!excluded;localStorage.setItem(KEY,String(next));setExcluded(next);}
  return <section className="analytics-exclusion"><ShieldCheck size={24}/><div><b>{excluded?"Este dispositivo no cuenta en las métricas":"Este dispositivo está contando en las métricas"}</b><span>{excluded?"Tus próximas visitas al portal quedarán excluidas.":"Las próximas visitas de este navegador se registrarán normalmente."}</span></div><button type="button" onClick={toggle}>{excluded?"Volver a incluir":"Excluir dispositivo"}</button></section>;
}
