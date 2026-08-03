import { useState, useEffect } from 'react';
import { DEFAULT_PRODUCTS } from '../data/config';

const STORAGE_KEY = 'rastas-malaga-products-v7';

function loadProducts() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    /* ignore */
  }
  return DEFAULT_PRODUCTS;
}

export function useProducts() {
  const [products, setProducts] = useState(loadProducts);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts((prev) => [
      ...prev,
      { ...product, id: Date.now().toString() },
    ]);
  };

  const updateProduct = (id, updates) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const resetProducts = () => {
    setProducts(DEFAULT_PRODUCTS);
  };

  return { products, addProduct, updateProduct, deleteProduct, resetProducts };
}
