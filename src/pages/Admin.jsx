import { useState } from 'react';
import { ADMIN_CREDENTIALS } from '../data/config';
import { useProducts } from '../hooks/useProducts';

const emptyForm = { title: '', price: '', description: '', image: '' };

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
    const product = {
      title: form.title.trim(),
      price: parseFloat(form.price) || 0,
      description: form.description.trim(),
      image: form.image.trim(),
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
      price: String(product.price),
      description: product.description,
      image: product.image,
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
            <p className="page-lead">Gestiona los productos de la tienda</p>
          </div>
          <button type="button" className="btn btn-outline" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>

        <div className="admin-grid">
          <form className="admin-form admin-product-form" onSubmit={handleSubmit}>
            <h2>{editingId ? 'Editar producto' : 'Añadir producto'}</h2>

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
              Precio (€)
              <input
                type="number"
                min="0"
                step="0.01"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                required
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
              URL de imagen
              <input
                type="url"
                placeholder="https://ejemplo.com/imagen.jpg"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
              <small>Pega un enlace directo a la imagen (ej. de Instagram o Google Drive)</small>
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
                      <span>{p.price}€</span>
                      <p>{p.description}</p>
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
