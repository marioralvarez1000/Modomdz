"use client";
import { FormEvent,useState } from "react";
import { ArrowRight,CheckCircle2 } from "lucide-react";
import { track } from "@/lib/track-client";

export function EventSubmissionForm(){
  const [status,setStatus]=useState<"idle"|"loading"|"ok"|"error">("idle");
  async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setStatus("loading");const form=new FormData(e.currentTarget);const payload=Object.fromEntries(form.entries());const response=await fetch("/api/event-submission",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(payload)});if(response.ok){setStatus("ok");track("event_submission");}else setStatus("error");}
  if(status==="ok")return <div className="submission-success"><CheckCircle2/><h2>Recibimos el evento</h2><p>Vamos a verificar fecha, lugar, costo y fuente antes de incorporarlo a la agenda.</p></div>;
  return <form className="simple-card event-form" onSubmit={submit}>
    <div className="form-grid"><label>Nombre del evento<input name="eventName" required maxLength={140}/></label><label>Organizador<input name="organizer" required maxLength={120}/></label><label>Email de contacto<input name="email" required type="email" maxLength={160}/></label><label>Teléfono, opcional<input name="phone" maxLength={40}/></label><label>Fecha y hora<input name="eventDate" required type="datetime-local"/></label><label>Lugar<input name="venue" required maxLength={180}/></label><label>Costo o “gratis”<input name="cost" maxLength={80}/></label><label>Publicación oficial o fuente<input name="sourceUrl" type="url" placeholder="https://…" maxLength={500}/></label></div>
    <label>Información adicional<textarea name="message" maxLength={1200} placeholder="Inscripción, cupos, edades, accesibilidad u otra información útil."/></label>
    <label className="consent-check"><input type="checkbox" name="consent" value="yes" required/> Acepto que Modo MZA trate estos datos para verificar la propuesta, según la <a href="/privacidad">política de privacidad</a>.</label>
    <button disabled={status==="loading"}>{status==="loading"?"Enviando…":<>Enviar para revisión <ArrowRight size={17}/></>}</button>
    <p className="form-note">Publicar una propuesta no garantiza su inclusión. Modo MZA revisa la información y señala por separado cualquier contenido patrocinado.</p>
    {status==="error"&&<p className="form-error">No pudimos enviarlo. Revisá los datos obligatorios e intentá nuevamente.</p>}
  </form>;
}
