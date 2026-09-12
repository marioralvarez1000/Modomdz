# Modo MZA

Portal editorial y comercial de Mendoza para descubrir lugares, gastronomía, bodegas, vida nocturna, eventos, actividades gratuitas e itinerarios. Incluye perfiles, favoritos persistentes, actividad personal, formularios de newsletter/comercios/eventos y un panel privado de audiencia.

## Stack

- Next.js 16 + React 19 sobre Vinext/Vite
- Cloudflare Workers
- Cloudflare D1 + Drizzle ORM
- Tailwind CSS 4 y componentes shadcn
- Autenticación administrada por ChatGPT Sites
- Resend para notificaciones operativas (opcional)

## Requisitos

- Node.js 22.13 o posterior
- pnpm 11

## Instalación y desarrollo

```bash
git clone <URL_DEL_REPOSITORIO>
cd modo-mza
corepack enable
pnpm install --frozen-lockfile
cp .env.example .dev.vars
pnpm dev
```

La aplicación queda disponible normalmente en `http://localhost:5173`.

En desarrollo local, el proyecto simula el acceso de usuario. Para iniciar sesión visitá:

```text
http://localhost:5173/signin-with-chatgpt?return_to=/
```

## Base de datos local

Primero generá el artefacto de ejecución:

```bash
pnpm build
```

Después aplicá las migraciones, en orden, sobre D1 local:

```bash
for migration in drizzle/*.sql; do
  node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js \
    d1 execute DB --local --config dist/server/wrangler.json \
    --persist-to .wrangler/state --file "$migration"
done
```

El estado local se guarda en `.wrangler/` y está excluido de Git.

## Variables de entorno

Copiá `.env.example` como `.dev.vars` para desarrollo. Ningún valor real está versionado.

| Variable | Uso | Requerida |
| --- | --- | --- |
| `VISITOR_ALERT_TOKEN` | Protege el resumen privado de audiencia y el disparador de IndexNow | Sí, para esos endpoints |
| `RESEND_API_KEY` | Envío de avisos de formularios mediante Resend | No |
| `NOTIFICATION_TO_EMAIL` | Destino de las notificaciones operativas | No |
| `NOTIFICATION_FROM_EMAIL` | Remitente verificado de Resend | No |

Además, el despliegue debe exponer una base D1 con el binding `DB`.

## Comandos

```bash
pnpm dev          # servidor de desarrollo
pnpm build        # build de producción
pnpm start        # vista local del Worker compilado
pnpm lint         # análisis estático
pnpm db:generate  # genera migraciones Drizzle
```

## Estructura principal

```text
app/          páginas y rutas API
components/   interfaz y componentes reutilizables
db/           esquema y acceso a D1
drizzle/      migraciones SQL
lib/          contenido, perfiles, tracking y utilidades
public/       imágenes, favicon y archivos públicos
scripts/      instalación, build y ejecución local
```

## Despliegue

El proyecto actual está preparado para ChatGPT Sites sobre Cloudflare. La configuración declarativa vive en `.openai/hosting.json`; las variables reales se cargan en el entorno del hosting y nunca en Git.

La autenticación de producción depende de las rutas e identificadores provistos por ChatGPT Sites. Si se migra a otro proveedor de hosting, hay que reemplazar `app/chatgpt-auth.ts` por un proveedor de identidad equivalente y mantener `userId` como clave estable de los datos personales.

Antes de publicar una versión nueva:

1. Ejecutar `pnpm build`.
2. Aplicar las migraciones pendientes de `drizzle/` en la D1 de producción.
3. Configurar las variables del archivo `.env.example` en el proveedor de hosting.
4. Verificar acceso, alta/edición de perfil, favoritos, panel administrador y formularios.

## Seguridad

- `.env*`, `.dev.vars`, claves, tokens y credenciales están ignorados por Git.
- El repositorio sólo contiene placeholders en `.env.example`.
- El sitio no almacena contraseñas: recibe una identidad verificada del proveedor de autenticación.
- Los datos personales se almacenan en D1 y deben operarse conforme a la política publicada en `/privacidad`.
