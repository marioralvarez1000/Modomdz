import type { Metadata } from "next";
import { CalendarPlus } from "lucide-react";
import { EventSubmissionForm } from "@/components/event-submission-form";
import { PageTracker } from "@/components/page-tracker";

export const metadata:Metadata={title:"Enviar un evento",description:"Proponé una actividad pública para la agenda de Modo MZA."};
export default function Page(){return <main><PageTracker/><section className="shell simple-page submission-page"><span className="overline"><CalendarPlus size={15}/> Agenda colaborativa</span><h1>Sumá un evento a la agenda</h1><p>Si organizás una actividad abierta al público en Mendoza, envianos los datos. La revisamos antes de publicarla para que la comunidad encuentre información clara y vigente.</p><EventSubmissionForm/></section></main>}
