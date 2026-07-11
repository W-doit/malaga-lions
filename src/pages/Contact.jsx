import { BUSINESS, MAPS, getWhatsAppUrl } from '../data/config';

export default function Contact() {
  return (
    <section className="page-section">
      <div className="container">
        <h1 className="page-title">Contacto</h1>
        <p className="page-lead">Visítanos en Málaga o escríbenos por WhatsApp</p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-block">
              <h3>📍 Dirección</h3>
              <p>{BUSINESS.address}</p>
              <a href={MAPS.url} target="_blank" rel="noopener noreferrer" className="link-accent">
                Abrir en Google Maps →
              </a>
            </div>

            <div className="contact-block">
              <h3>📱 Teléfono / WhatsApp</h3>
              <p>{BUSINESS.phone}</p>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Escribir por WhatsApp
              </a>
            </div>

            <div className="contact-block">
              <h3>🕐 Horario</h3>
              <p>Lunes a Sábado — con cita previa</p>
              <p className="contact-note">Escríbenos para confirmar disponibilidad</p>
            </div>

            <div className="contact-block">
              <h3>💈 Servicios</h3>
              <p>{BUSINESS.services}</p>
            </div>
          </div>

          <div className="map-wrapper">
            <iframe
              title="Ubicación Rastas Málaga Lions"
              src={MAPS.embed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
