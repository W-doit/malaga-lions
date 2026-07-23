import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';
import { WHATSAPP_SHOP } from '../data/config';

export default function Shop() {
  const { products } = useProducts();

  return (
    <section className="page-section">
      <div className="container">
        <h1 className="page-title">Tienda</h1>
        <p className="page-lead">
          La tienda oficial está en WhatsApp Business. Abre el catálogo completo o elige un producto
          de abajo.
        </p>

        <div className="shop-catalog-banner">
          <div>
            <h2>Catálogo de WhatsApp</h2>
            <p>
              Aquí verás todos los productos actualizados: fotos, precios y pedidos. Cuando Yessica
              añade algo nuevo en WhatsApp, aparece ahí al instante.
            </p>
          </div>
          <a
            href={WHATSAPP_SHOP.catalogUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir catálogo en WhatsApp
          </a>
        </div>

        <h2 className="shop-subtitle">Productos destacados</h2>

        {products.length === 0 ? (
          <div className="empty-state">
            <p>No hay productos destacados. Abre el catálogo completo arriba.</p>
            <a
              href={WHATSAPP_SHOP.catalogUrl}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver catálogo
            </a>
          </div>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
