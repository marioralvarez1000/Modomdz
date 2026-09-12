"use client";

type TrackData = { contentSlug?:string; category?:string; zone?:string; value?:string };
const allowed = new Set(["page_view","content_view","content_click","search","filter","save","unsave","map_click","share","source_click","newsletter_signup","sponsor_form_submit","event_submission","itinerary_select","outbound_click"]);

function id(key:string) {
  let value = localStorage.getItem(key);
  if (!value) { value = crypto.randomUUID(); localStorage.setItem(key,value); }
  return value;
}

export function track(eventName:string,data:TrackData={}) {
  if (!allowed.has(eventName) || typeof window === "undefined") return;
  try {
    if (localStorage.getItem("modo-mza-analytics-consent") !== "accepted") return;
    if (localStorage.getItem("modo-mza-analytics-disabled") === "true") return;
    const now = Date.now();
    let sessionId = sessionStorage.getItem("modo-mza-session");
    const last = Number(sessionStorage.getItem("modo-mza-last") || 0);
    if (!sessionId || now-last > 30*60*1000) { sessionId=crypto.randomUUID(); sessionStorage.setItem("modo-mza-session",sessionId); }
    sessionStorage.setItem("modo-mza-last",String(now));
    const params = new URLSearchParams(location.search);
    const payload = JSON.stringify({eventName,path:location.pathname,...data,visitorId:id("modo-mza-visitor"),sessionId,referrer:document.referrer,utmSource:params.get("utm_source"),utmMedium:params.get("utm_medium"),utmCampaign:params.get("utm_campaign"),deviceType:innerWidth<640?"mobile":innerWidth<1024?"tablet":"desktop"});
    if (navigator.sendBeacon) navigator.sendBeacon("/api/track",new Blob([payload],{type:"application/json"}));
    else fetch("/api/track",{method:"POST",headers:{"content-type":"application/json"},body:payload,keepalive:true}).catch(()=>{});
  } catch {
    // Analytics must never block links, buttons or navigation.
  }
}
