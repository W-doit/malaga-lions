import { Link } from 'react-router-dom';
import { BUSINESS, SOCIAL, getWhatsAppUrl } from '../data/config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-script">{BUSINESS.name}</p>
          <p className="footer-tag">{BUSINESS.tagline}</p>
          <p className="footer-hashtag">{BUSINESS.hashtag}</p>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            {BUSINESS.phone}
          </a>
          <p>{BUSINESS.address}</p>
        </div>

        <div className="footer-col">
          <h4>Redes</h4>
          <a href={SOCIAL.instagram.url} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={SOCIAL.tiktok.url} target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
          <a href={SOCIAL.facebook.url} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>

        <div className="footer-col">
          <h4>Enlaces</h4>
          <Link to="/tienda">Tienda</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {BUSINESS.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
