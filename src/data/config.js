export const BUSINESS = {
  name: 'Rastas Málaga Lions',
  tagline: 'DREAD MAKER',
  services: 'RASTAS · Extensiones · ARREGLOS',
  servicesList: ['Creación de rastas', 'Extensiones de rastas', 'Arreglos y mantenimiento'],
  hashtag: '#peluqueriadeleones',
  phone: '+34 696 39 56 59',
  phoneRaw: '34696395659',
  streetAddress: 'C. las Navas, 32',
  addressLocality: 'Carretera de Cádiz',
  city: 'Málaga',
  postalCode: '29002',
  region: 'Andalucía',
  country: 'España',
  countryCode: 'ES',
  address: 'C. las Navas, 32, Carretera de Cádiz, 29002 Málaga',
  addressFull: 'C. las Navas, 32, Carretera de Cádiz, 29002 Málaga, España',
  geo: { lat: 36.7019789, lng: -4.4367505 },
  reviewCount: 6,
  whatsappMessage: '¡Hola! Me gustaría información sobre vuestros servicios de rastas.',
};

export const SOCIAL = {
  tiktok: {
    handle: '@Rastas_Málaga_Lions',
    url: 'https://www.tiktok.com/@Rastas_M%C3%A1laga_Lions',
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
    author: 'Saúl Bouda',
    rating: 5,
    text: 'Llevo acudiendo casi 2 años a esta gran profesional, llegué con apenas unos centímetros de mi pelo y ella consiguió hacerme unas rastas preciosas mezclando distintos tonos de color. Gracias a sus consejos, cuidados y mantenimientos, en este tiempo ha conseguido que tenga unas rastas naturales perfectas y sanas que han permitido retirar las extensiones ya que mi pelo ha crecido 25cm teniendo en cuenta que me ha ayudado su maravilloso aceite de canela macerado por ella misma... la recomiendo al 100%',
    source: 'Google Maps',
  },
  {
    id: 2,
    author: 'Irene Moyano',
    rating: 5,
    text: 'Yessica es una súper profesional de las rastas, llevo 7 años con mis rastas y nunca encontré a una profesional como ella, llegué con mis rastis para reconstrucción de raíces completa y en pocas horas lo realizó completo con un acabado impecable tanto en la repartición como en el grosor, mis rastas son finas y las dejo firmes y limpias. Además que como persona es un encanto, me sentí cómoda y en confianza. También me dió muy buenos consejos y opciones para mejorar y decorar las rastas, vamos en conclusión estoy encantada. Calidad-precio merecido, un acabado PERFECTO. Gracias guapa!',
    source: 'Google Maps',
  },
  {
    id: 3,
    author: 'Sibo Rugwiza Kanobana',
    rating: 5,
    text: 'Yessica hace una magia maravillosa. Llevo mucho tiempo con rastas, pero el cariño, la atención y la habilidad técnica que Yessica pone en su trabajo es algo muy difícil de encontrar. Se lo recomendaría a cualquiera. ¡Gracias, Yessica!',
    source: 'Google Maps',
  },
  {
    id: 4,
    author: 'Rebeca Dobre',
    rating: 5,
    text: 'La mejor poniendo rastas, la recomiendo al 100%. Buen servicio, trabajo 10/10 y a un buen precio. Te recibe muy bien, muy amable, trabaja con todo tipo de pelo con mucha profesionalidad y mucho cariño.',
    source: 'Google Maps',
  },
  {
    id: 5,
    author: 'Francisco Quintano Diaz',
    rating: 5,
    text: 'Gracias por ponerme ese cafelito nada más llegar. Eres la mejor, te mando un abrazo muy fuerte preciosa 😘😘😘',
    source: 'Google Maps',
  },
  {
    id: 6,
    author: 'Ania Jaroszuk',
    rating: 5,
    text: 'Yessica is a wonderful, beautiful person who cares about your comfort and well-being. She did my first dreadlocks. She is a perfectionist. She determines exactly what you expect and the effects are amazing. She has a very large selection of decorations and makes great styles. After the work is finished, she advises how to care for the dreadlocks to keep them in good condition. Thank you very much Yessica and I hope we will meet again. One love ❤️',
    source: 'Google Maps',
    lang: 'en',
  },
];

export function getWhatsAppUrl(message = BUSINESS.whatsappMessage) {
  return `https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function getOrderWhatsAppUrl(productTitle, price) {
  const message = `¡Hola! Me interesa pedir: ${productTitle}${price ? ` (${price}€)` : ''}. ¿Podéis darme más información?`;
  return getWhatsAppUrl(message);
}
