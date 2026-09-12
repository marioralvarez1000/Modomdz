"use client";
import { track } from "@/lib/track-client";
export function SourceLink({href,slug,children}:{href:string;slug:string;children:React.ReactNode}){return <a href={href} target="_blank" rel="noreferrer" onClick={()=>track("source_click",{contentSlug:slug})}>{children}</a>}
