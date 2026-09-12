import { env } from "cloudflare:workers";

const DEFAULT_TO="contacto@modomza.com";

export async function sendOperationalEmail(subject:string,html:string){
  try{
    const runtime=env as unknown as Record<string,unknown>;
    const apiKey=typeof runtime.RESEND_API_KEY==="string"?runtime.RESEND_API_KEY:"";
    if(!apiKey)return;
    const to=typeof runtime.NOTIFICATION_TO_EMAIL==="string"?runtime.NOTIFICATION_TO_EMAIL:DEFAULT_TO;
    const from=typeof runtime.NOTIFICATION_FROM_EMAIL==="string"?runtime.NOTIFICATION_FROM_EMAIL:"Modo MZA <notificaciones@modomza.com.ar>";
    await fetch("https://api.resend.com/emails",{method:"POST",headers:{authorization:`Bearer ${apiKey}`,"content-type":"application/json"},body:JSON.stringify({from,to:[to],subject,html})});
  }catch{
    // Una notificación nunca debe bloquear el formulario público.
  }
}

export function safeHtml(value:string){return value.replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[char]||char));}
