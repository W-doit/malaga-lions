export const BUSINESS = {
  name: 'Rastas Málaga Lions',
  tagline: 'DREAD MAKER',
  services: 'RASTAS · Extensiones · ARREGLOS',
  hashtag: '#peluqueriadeleones',
  phone: '+34 696 39 56 59',
  phoneRaw: '34696395659',
  address: 'C. las Navas, 32, 29002 Málaga',
  whatsappMessage: '¡Hola! Me gustaría información sobre vuestros servicios de rastas.',
};

export const SOCIAL = {
  tiktok: {
    handle: '@Rastas_Málaga_Lions',
    url: 'https://www.tiktok.com/@Rastas_Málaga_Lions',
  },
  instagram: {
    handle: '@Rastas_extensiones_Málaga',
    url: 'https://www.instagram.com/Rastas_extensiones_Malaga/',
  },
  facebook: {
    handle: 'Rastas Málaga Lions',
    url: 'https://www.facebook.com/RastasMalagaLions/',
  },
};

export const MAPS = {
  url: 'https://maps.app.goo.gl/GVFee8XccE9MBmwg6',
  embed:
    'https://maps.google.com/maps?q=C.+las+Navas,+32,+29002+M%C3%A1laga,+Espa%C3%B1a&hl=es&z=16&output=embed',
};

export const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'LionsMalaga2024',
};

export const DEFAULT_PRODUCTS = [
  {
    id: '1',
    title: 'Extensiones de Rastas',
    price: 45,
    description:
      'Extensiones naturales de alta calidad. Consulta precio según longitud y cantidad.',
    image: '',
  },
  {
    id: '2',
    title: 'Arreglo de Raíces',
    price: 35,
    description:
      'Retoque profesional de raíces para mantener tus rastas impecables.',
    image: '',
  },
  {
    id: '3',
    title: 'Kit de Mantenimiento',
    price: 18,
    description:
      'Spray hidratante, gorro de ducha y aceite natural para el cuidado diario.',
    image: '',
  },
];

export const REVIEWS = [
  {
    id: 1,
    author: 'Laura M.',
    rating: 5,
    text: 'Increíble trabajo con mis rastas. Muy profesionales, el local es acogedor y el resultado superó mis expectativas. ¡Totalmente recomendable!',
  },
  {
    id: 2,
    author: 'Carlos R.',
    rating: 5,
    text: 'Llevaba tiempo buscando un buen dread maker en Málaga y aquí lo encontré. Trato cercano, mucha paciencia y un acabado perfecto.',
  },
  {
    id: 3,
    author: 'Sofía G.',
    rating: 5,
    text: 'Me hicieron unas extensiones preciosas. Explican todo el proceso y cuidan cada detalle. Volveré sin duda.',
  },
  {
    id: 4,
    author: 'David P.',
    rating: 5,
    text: 'Excelente servicio de arreglos. Mis rastas quedaron como nuevas. Muy buen precio y ambiente relajado.',
  },
  {
    id: 5,
    author: 'Ana V.',
    rating: 5,
    text: 'Profesionales de verdad. Se nota la pasión por lo que hacen. El mejor sitio de rastas de la zona.',
  },
];

export function getWhatsAppUrl(message = BUSINESS.whatsappMessage) {
  return `https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function getOrderWhatsAppUrl(productTitle, price) {
  const message = `¡Hola! Me interesa pedir: ${productTitle}${price ? ` (${price}€)` : ''}. ¿Podéis darme más información?`;
  return getWhatsAppUrl(message);
}
