import { getUser } from "@/lib/auth";

export const ADMIN_EMAIL="gonzix@gmail.com";

export async function isAdmin(){
  const user=await getUser();
  return Boolean(user&&user.email.toLowerCase()===ADMIN_EMAIL);
}

export function csvCell(value:unknown){
  let text=String(value??"");
  if (/^[=+\-@]/.test(text)) text=`'${text}`;
  return `"${text.replaceAll('"','""')}"`;
}
