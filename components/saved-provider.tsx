"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Viewer = { email:string; displayName:string; profileComplete:boolean } | null;
type SavedContext = { saved: string[]; viewer:Viewer; isSaved: (slug:string)=>boolean; toggle:(slug:string)=>Promise<void> };
const Context = createContext<SavedContext>({saved:[],viewer:null,isSaved:()=>false,toggle:async()=>{}});

export function SavedProvider({children,viewer}:{children:React.ReactNode;viewer:Viewer}) {
  const [saved,setSaved] = useState<string[]>([]);
  useEffect(()=>{
    if(!viewer) return;
    let active=true;
    fetch("/api/saved",{cache:"no-store"}).then(response=>response.ok?response.json():Promise.reject()).then(data=>{
      if(active&&Array.isArray(data.saved)) setSaved(data.saved);
    }).catch(()=>{});
    return()=>{active=false};
  },[viewer]);
  const value = useMemo(()=>({saved,viewer,isSaved:(slug:string)=>saved.includes(slug),toggle:async(slug:string)=>{
    if(!viewer) return;
    if(!viewer.profileComplete){location.assign(`/registro?returnTo=${encodeURIComponent(location.pathname)}`);return;}
    const removing=saved.includes(slug);
    setSaved(current=>removing?current.filter(x=>x!==slug):[slug,...current]);
    const response=await fetch("/api/saved",{method:removing?"DELETE":"POST",headers:{"content-type":"application/json"},body:JSON.stringify({slug})}).catch(()=>null);
    if(!response?.ok) setSaved(current=>removing?[slug,...current]:current.filter(x=>x!==slug));
  }}),[saved,viewer]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export const useSaved = () => useContext(Context);
