import type { Metadata } from "next";
import { SavedList } from "@/components/saved-list";
import { requireChatGPTUser } from "@/app/chatgpt-auth";
export const metadata:Metadata={title:"Mis favoritos",robots:{index:false,follow:false}};
export const dynamic="force-dynamic";
export default async function Page(){await requireChatGPTUser("/guardados");return <main><section className="shell listing-hero"><span className="overline">Tu lista personal</span><h1>Mis favoritos</h1><p>Lugares, eventos y recorridos asociados a tu perfil para retomarlos desde cualquier dispositivo.</p></section><section className="shell listing-grid"><SavedList/></section></main>}
