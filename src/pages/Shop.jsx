import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

export default function Shop() {
  const { products } = useProducts();

  return (
    <section className="page-section">
      <div className="container">
        <h1 className="page-title">Tienda</h1>
        <p className="page-lead">
          Productos y servicios disponibles. Para realizar tu pedido, pulsa el botón de WhatsApp en
          cada producto.
        </p>

        {products.length === 0 ? (
          <div className="empty-state">
            <p>No hay productos disponibles en este momento.</p>
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
