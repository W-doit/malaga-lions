import { Link } from 'react-router-dom';
import { BUSINESS, REVIEWS, getWhatsAppUrl } from '../data/config';

const MagicWandIcon = () => (
  <svg
    className="service-icon-svg"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8 19 13M17.8 6.2 19 5M12.2 11.8 11 13M12.2 6.2 11 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="m9.5 14.5-7.07 7.07a1 1 0 0 0 1.41 1.41L10.91 15.9"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="m13.5 10.5 2 2a1.2 1.2 0 0 0 1.7 0l.8-.8a1.2 1.2 0 0 0 0-1.7l-2-2a1.2 1.2 0 0 0-1.7 0l-.8.8a1.2 1.2 0 0 0 0 1.7Z"
      fill="currentColor"
    />
  </svg>
);

const services = [
  {
    title: 'Creación de Rastas',
    desc: 'Dreadlocks naturales con técnica profesional. Asesoramiento personalizado según tu tipo de cabello.',
    icon: '🦁',
  },
  {
    title: 'Extensiones',
    desc: 'Añade longitud y volumen con extensiones de calidad. Resultados naturales y duraderos.',
    icon: '✨',
  },
  {
    title: 'Arreglos y Mantenimiento',
    desc: 'Retoque de raíces, reparación y cuidado para que tus rastas siempre luzcan perfectas.',
    icon: <MagicWandIcon />,
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-tag">{BUSINESS.tagline}</p>
          <h1 className="hero-title">{BUSINESS.name}</h1>
          <p className="hero-sub">{BUSINESS.services}</p>
          <p className="hero-hashtag">{BUSINESS.hashtag}</p>
          <div className="hero-actions">
            <a href={getWhatsAppUrl()} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Reservar cita
            </a>
            <Link to="/tienda" className="btn btn-outline">
              Ver tienda WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-lead">
            Somos especialistas en rastas en Málaga. Cada trabajo es único, hecho con dedicación y
            respeto por tu estilo.
          </p>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">¿Qué son las rastas?</h2>
          <div className="about-text about-text-centered">
            <p>
              Las rastas (dreadlocks) son mechones de cabello que se entrelazan naturalmente o
              de forma artesanal. Son mucho más que un peinado: representan identidad, cultura y
              estilo personal.
            </p>
            <p>
              En <strong>{BUSINESS.name}</strong> te guiamos en todo el proceso — desde la
              primera consulta hasta el mantenimiento — para que disfrutes de unas rastas sanas,
              bonitas y duraderas.
            </p>
            <a href={getWhatsAppUrl('¡Hola! Me gustaría una consulta sobre rastas.')} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Consulta gratuita
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Opiniones de clientes</h2>
          <p className="section-lead">Reseñas reales de Google Maps</p>
          <div className="reviews-grid">
            {REVIEWS.map((review) => (
              <blockquote key={review.id} className="review-card" lang={review.lang}>
                <div className="review-stars">
                  {'★'.repeat(review.rating)}
                </div>
                <p>"{review.text}"</p>
                <footer>
                  — {review.author}
                  {review.source && <span className="review-source"> · {review.source}</span>}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>¿Listo para tu transformación?</h2>
          <p>Escríbenos por WhatsApp y reserva tu cita hoy</p>
          <a href={getWhatsAppUrl()} className="btn btn-light" target="_blank" rel="noopener noreferrer">
            Contactar ahora
          </a>
        </div>
      </section>
    </>
  );
}
