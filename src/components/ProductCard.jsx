import { getOrderWhatsAppUrl, getAssetUrl } from '../data/config';

export default function ProductCard({ product }) {
  const hasImage = product.image && product.image.trim() !== '';
  const orderUrl =
    product.whatsappUrl?.trim() ||
    getOrderWhatsAppUrl(product.title, product.price);
  const hasPrice = product.price !== null && product.price !== '' && !Number.isNaN(Number(product.price));

  return (
    <article className="product-card">
      <div className="product-image">
        {hasImage ? (
          <img src={getAssetUrl(product.image)} alt={product.title} loading="lazy" />
        ) : (
          <div className="product-placeholder">
            <span>📷</span>
            <p>Ver en WhatsApp</p>
          </div>
        )}
      </div>
      <div className="product-body">
        <h3>{product.title}</h3>
        {hasPrice ? (
          <p className="product-price">{product.price}€</p>
        ) : (
          <p className="product-price product-price-muted">Precio en WhatsApp</p>
        )}
        <p className="product-desc">{product.description}</p>
        <a
          href={orderUrl}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {product.whatsappUrl ? 'Ver en WhatsApp' : 'Pedir por WhatsApp'}
        </a>
      </div>
    </article>
  );
}
