import { Link } from 'react-router-dom';
import { BUSINESS, REVIEWS, getWhatsAppUrl } from '../data/config';

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
    icon: '🔧',
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
              Ver tienda
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
