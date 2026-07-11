import { BUSINESS, SOCIAL, MAPS } from '../data/config.js';

export const SEO = {
  title: 'Rastas Málaga Lions | Dread Maker — Rastas, Extensiones y Arreglos en Málaga',
  description:
    'Rastas Málaga Lions — Especialistas en dreadlocks, extensiones de rastas y arreglos en Málaga. C. las Navas, 32. Reserva por WhatsApp. #peluqueriadeleones',
  keywords:
    'rastas Málaga, dreadlocks Málaga, extensiones rastas, arreglo rastas, dread maker, Rastas Málaga Lions, peluquería rastas',
  locale: 'es_ES',
  image: '/hero.png',
  imageAlt: 'Rastas Málaga Lions — Dread Maker en Málaga',
};

export const SITE_ROUTES = ['/', '/tienda', '/redes', '/contacto'];

export function getSiteUrl(env = import.meta.env) {
  const url = env.VITE_SITE_URL || '';
  return url.replace(/\/$/, '');
}

export function getAbsoluteUrl(path, siteUrl = getSiteUrl()) {
  const base = siteUrl || '';
  if (!base) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getJsonLd(siteUrl = getSiteUrl()) {
  const businessUrl = getAbsoluteUrl('/', siteUrl);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HairSalon',
        '@id': `${businessUrl}#business`,
        name: BUSINESS.name,
        alternateName: 'RASTAS Extensiones ARREGLOS Rastas Málaga Lions',
        description: SEO.description,
        url: businessUrl,
        telephone: BUSINESS.phone,
        image: getAbsoluteUrl(SEO.image, siteUrl),
        logo: getAbsoluteUrl('/lion-card.png', siteUrl),
        address: {
          '@type': 'PostalAddress',
          streetAddress: BUSINESS.streetAddress,
          addressLocality: BUSINESS.city,
          postalCode: BUSINESS.postalCode,
          addressRegion: BUSINESS.region,
          addressCountry: BUSINESS.countryCode,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: BUSINESS.geo.lat,
          longitude: BUSINESS.geo.lng,
        },
        hasMap: MAPS.url,
        sameAs: [SOCIAL.instagram.url, SOCIAL.tiktok.url, SOCIAL.facebook.url, MAPS.url],
        priceRange: '€€',
        knowsAbout: [
          'dreadlocks',
          'rastas',
          'extensiones de rastas',
          'arreglo de rastas',
          'mantenimiento de dreadlocks',
        ],
        areaServed: {
          '@type': 'City',
          name: 'Málaga',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '20:00',
        },
        potentialAction: {
          '@type': 'CommunicateAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `https://wa.me/${BUSINESS.phoneRaw}`,
            actionPlatform: [
              'http://schema.org/MobileWebPlatform',
              'http://schema.org/DesktopWebPlatform',
            ],
          },
          name: 'Contactar por WhatsApp',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: String(BUSINESS.reviewCount),
          bestRating: '5',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${businessUrl}#website`,
        url: businessUrl,
        name: BUSINESS.name,
        description: SEO.description,
        inLanguage: 'es-ES',
        publisher: { '@id': `${businessUrl}#business` },
      },
    ],
  };
}

export function getMetaTagsHtml(siteUrl = getSiteUrl()) {
  const pageUrl = getAbsoluteUrl('/', siteUrl);
  const imageUrl = getAbsoluteUrl(SEO.image, siteUrl);

  return `
    <meta name="description" content="${SEO.description}" />
    <meta name="keywords" content="${SEO.keywords}" />
    <meta name="author" content="${BUSINESS.name}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${pageUrl}" />

    <meta property="og:type" content="website" />
    <meta property="og:locale" content="${SEO.locale}" />
    <meta property="og:site_name" content="${BUSINESS.name}" />
    <meta property="og:title" content="${SEO.title}" />
    <meta property="og:description" content="${SEO.description}" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:alt" content="${SEO.imageAlt}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${SEO.title}" />
    <meta name="twitter:description" content="${SEO.description}" />
    <meta name="twitter:image" content="${imageUrl}" />

    <meta name="geo.region" content="ES-MA" />
    <meta name="geo.placename" content="Málaga" />
    <meta name="geo.position" content="${BUSINESS.geo.lat};${BUSINESS.geo.lng}" />
    <meta name="ICBM" content="${BUSINESS.geo.lat}, ${BUSINESS.geo.lng}" />
  `.trim();
}

export function getLlmsTxt(siteUrl = getSiteUrl()) {
  const url = siteUrl || 'https://your-domain.com';

  return `# ${BUSINESS.name}

> ${BUSINESS.tagline} — Especialistas en rastas, extensiones y arreglos en Málaga, España.

## Información del negocio

- Nombre: ${BUSINESS.name}
- Servicios: ${BUSINESS.services}
- Dirección: ${BUSINESS.addressFull}
- Teléfono / WhatsApp: ${BUSINESS.phone}
- Hashtag: ${BUSINESS.hashtag}
- Sitio web: ${url}
- Google Maps: ${MAPS.url}

## Servicios principales

- Creación de dreadlocks (rastas)
- Extensiones de rastas
- Arreglos y mantenimiento de rastas
- Reconstrucción de raíces
- Decoración de rastas

## Redes sociales

- Instagram: ${SOCIAL.instagram.url} (${SOCIAL.instagram.handle})
- TikTok: ${SOCIAL.tiktok.url} (${SOCIAL.tiktok.handle})
- Facebook: ${SOCIAL.facebook.url}

## Cómo reservar

Los pedidos y citas se gestionan por WhatsApp: https://wa.me/${BUSINESS.phoneRaw}

## Páginas del sitio

- Inicio: ${url}/
- Tienda: ${url}/tienda
- Redes sociales: ${url}/redes
- Contacto y mapa: ${url}/contacto
`;
}

export function getSitemapXml(siteUrl = getSiteUrl()) {
  const base = siteUrl || 'https://your-domain.com';
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = SITE_ROUTES.map(
    (path) => `  <url>
    <loc>${base}${path === '/' ? '/' : path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function getRobotsTxt(siteUrl = getSiteUrl()) {
  const sitemap = siteUrl ? `${siteUrl}/sitemap.xml` : '/sitemap.xml';

  return `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

Sitemap: ${sitemap}
`;
}
