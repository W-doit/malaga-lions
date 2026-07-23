import { useState } from 'react';
import { ADMIN_CREDENTIALS, BUSINESS, WHATSAPP_SHOP } from '../data/config';
import { useProducts } from '../hooks/useProducts';

const emptyForm = {
  title: '',
  price: '',
  description: '',
  image: '',
  whatsappUrl: '',
};

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(
    () => sessionStorage.getItem('admin-auth') === 'true'
  );
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const { products, addProduct, updateProduct, deleteProduct, resetProducts } = useProducts();

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      sessionStorage.setItem('admin-auth', 'true');
      setLoggedIn(true);
      setError('');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin-auth');
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const priceRaw = form.price.trim();
    const product = {
      title: form.title.trim(),
      price: priceRaw === '' ? null : parseFloat(priceRaw),
      description: form.description.trim(),
      image: form.image.trim(),
      whatsappUrl: form.whatsappUrl.trim(),
    };

    if (!product.title) return;

    if (editingId) {
      updateProduct(editingId, product);
      setEditingId(null);
    } else {
      addProduct(product);
    }
    setForm(emptyForm);
  };

  const startEdit = (product) => {
    setEditingId(product.id);
    setForm({
      title: product.title,
      price: product.price === null || product.price === undefined ? '' : String(product.price),
      description: product.description || '',
      image: product.image || '',
      whatsappUrl: product.whatsappUrl || '',
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  if (!loggedIn) {
    return (
      <section className="page-section admin-login">
        <div className="container container-narrow">
          <h1 className="page-title">Panel de Administración</h1>
          <p className="page-lead">Acceso exclusivo para el propietario</p>

          <form className="admin-form" onSubmit={handleLogin}>
            {error && <p className="form-error">{error}</p>}
            <label>
              Usuario
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
              />
            </label>
            <label>
              Contraseña
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Iniciar sesión
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section admin-panel">
      <div className="container">
        <div className="admin-header">
          <div>
            <h1 className="page-title">Panel de Administración</h1>
            <p className="page-lead">
              Destaca productos en la web. El catálogo completo vive en WhatsApp.
            </p>
          </div>
          <button type="button" className="btn btn-outline" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>

        <div className="admin-hint">
          <p>
            <strong>Cómo añadir un producto nuevo:</strong> créalo en WhatsApp Business → Catálogo →
            producto → Compartir → Copiar enlace. Si el enlace termina con un ID largo y da error,
            cámbialo para que termine con el teléfono:{' '}
            <code>https://wa.me/p/PRODUCTO_ID/{BUSINESS.phoneRaw}</code>. El catálogo completo:{' '}
            <a href={WHATSAPP_SHOP.catalogUrl} target="_blank" rel="noopener noreferrer">
              {WHATSAPP_SHOP.catalogUrl}
            </a>
            .
          </p>
        </div>

        <div className="admin-grid">
          <form className="admin-form admin-product-form" onSubmit={handleSubmit}>
            <h2>{editingId ? 'Editar producto' : 'Añadir producto destacado'}</h2>

            <label>
              Título
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
            </label>

            <label>
              Precio (€) — opcional
              <input
                type="number"
                min="0"
                step="0.01"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                placeholder="Déjalo vacío si el precio está en WhatsApp"
              />
            </label>

            <label>
              Descripción
              <textarea
                rows={3}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                required
              />
            </label>

            <label>
              Enlace del producto en WhatsApp
              <input
                type="url"
                placeholder="https://wa.me/p/…"
                value={form.whatsappUrl}
                onChange={(e) => setForm({ ...form, whatsappUrl: e.target.value })}
              />
              <small>
                Obligatorio para abrir el producto real en WhatsApp. Si está vacío, se envía un
                mensaje genérico.
              </small>
            </label>

            <label>
              URL de imagen — opcional
              <input
                type="url"
                placeholder="https://ejemplo.com/imagen.jpg"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
              <small>Si no hay imagen, el botón sigue abriendo WhatsApp.</small>
            </label>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                {editingId ? 'Guardar cambios' : 'Añadir producto'}
              </button>
              {editingId && (
                <button type="button" className="btn btn-outline" onClick={cancelEdit}>
                  Cancelar
                </button>
              )}
            </div>
          </form>

          <div className="admin-products">
            <div className="admin-products-header">
              <h2>Productos ({products.length})</h2>
              <button type="button" className="btn btn-sm btn-outline" onClick={resetProducts}>
                Restaurar predeterminados
              </button>
            </div>

            {products.length === 0 ? (
              <p className="empty-state">No hay productos. Añade el primero arriba.</p>
            ) : (
              <ul className="admin-product-list">
                {products.map((p) => (
                  <li key={p.id} className="admin-product-item">
                    <div className="admin-product-thumb">
                      {p.image ? (
                        <img src={p.image} alt={p.title} />
                      ) : (
                        <span>📷</span>
                      )}
                    </div>
                    <div className="admin-product-info">
                      <strong>{p.title}</strong>
                      <span>
                        {p.price !== null && p.price !== undefined && p.price !== ''
                          ? `${p.price}€`
                          : 'Precio en WA'}
                      </span>
                      <p>{p.description}</p>
                      {p.whatsappUrl && (
                        <a
                          href={p.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-accent"
                        >
                          Enlace WhatsApp →
                        </a>
                      )}
                    </div>
                    <div className="admin-product-actions">
                      <button type="button" className="btn btn-sm btn-outline" onClick={() => startEdit(p)}>
                        Editar
                      </button>
                      <button type="button" className="btn btn-sm btn-danger" onClick={() => deleteProduct(p.id)}>
                        Eliminar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
