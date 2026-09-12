"use client";
import { useEffect } from "react";
import { track } from "@/lib/track-client";
export function PageTracker({eventName="page_view",contentSlug,category,zone}:{eventName?:string;contentSlug?:string;category?:string;zone?:string}) { useEffect(()=>{track(eventName,{contentSlug,category,zone});},[eventName,contentSlug,category,zone]); return null; }
