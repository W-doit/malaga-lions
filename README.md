# Rastas Málaga Lions — Sitio Web

Sitio web en React para **Rastas Málaga Lions**, especialistas en rastas, extensiones y arreglos en Málaga.

## Iniciar

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

## Panel de administración

- URL: `/admin`
- Usuario: `admin`
- Contraseña: `LionsMalaga2024`

Desde el panel puedes añadir, editar y eliminar productos. Los cambios se guardan en el navegador (localStorage).

## Estructura

- **Inicio** — Servicios, información sobre rastas y reseñas
- **Tienda** — Productos con pedido por WhatsApp
- **Redes** — Enlaces a Instagram, TikTok y Facebook
- **Contacto** — Dirección, teléfono y mapa de Google
- **Admin** — Gestión de productos (acceso protegido)

## Contacto del negocio

- WhatsApp: +34 696 39 56 59
- Instagram: [@Rastas_extensiones_Málaga](https://www.instagram.com/Rastas_extensiones_Malaga/)
- TikTok: [@Rastas_Málaga_Lions](https://www.tiktok.com/@Rastas_Málaga_Lions)
- Facebook: [Rastas Málaga Lions](https://www.facebook.com/RastasMalagaLions/)
- Mapa: [Google Maps](https://maps.app.goo.gl/GVFee8XccE9MBmwg6)

## SEO y AEO (optimización para buscadores e IA)

El sitio incluye:

- **JSON-LD** (`HairSalon` + `WebSite`) — datos estructurados para Google e IA
- **Open Graph / Twitter** — vistas previas al compartir en WhatsApp y redes
- **`/robots.txt`** — permite crawlers de Google, GPTBot, Claude, etc.
- **`/sitemap.xml`** — mapa del sitio
- **`/llms.txt`** — resumen del negocio para agentes de IA

Al desplegar, crea un archivo `.env` con tu dominio:

```bash
VITE_SITE_URL=https://tu-dominio.com
```

Luego `npm run build`. Sin esto, las meta tags usan rutas relativas (funciona, pero Open Graph funciona mejor con URL absoluta).

## GitHub Pages

Sí, puedes desplegar gratis en GitHub Pages. El repo ya incluye un workflow automático.

**URL del sitio:** [https://w-doit.github.io/malaga-lions/](https://w-doit.github.io/malaga-lions/)

### Pasos (solo una vez)

1. Sube el código a GitHub (`main` branch)
2. En el repo → **Settings** → **Pages**
3. En **Build and deployment** → Source: **GitHub Actions**
4. Haz push a `main` (o ejecuta el workflow manualmente en **Actions**)

Cada push a `main` vuelve a publicar el sitio automáticamente.

### Probar el build de GitHub Pages en local

```bash
# Windows PowerShell
$env:VITE_BASE_PATH="/malaga-lions/"
$env:VITE_SITE_URL="https://w-doit.github.io/malaga-lions"
npm run build
npm run preview
```

## Despliegue manual

```bash
npm run build
```

Los archivos estáticos quedan en la carpeta `dist/`.
