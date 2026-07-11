import { getOrderWhatsAppUrl } from '../data/config';

export default function ProductCard({ product }) {
  const hasImage = product.image && product.image.trim() !== '';

  return (
    <article className="product-card">
      <div className="product-image">
        {hasImage ? (
          <img src={product.image} alt={product.title} loading="lazy" />
        ) : (
          <div className="product-placeholder">
            <span>📷</span>
            <p>Imagen próximamente</p>
          </div>
        )}
      </div>
      <div className="product-body">
        <h3>{product.title}</h3>
        <p className="product-price">{product.price}€</p>
        <p className="product-desc">{product.description}</p>
        <a
          href={getOrderWhatsAppUrl(product.title, product.price)}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </article>
  );
}
