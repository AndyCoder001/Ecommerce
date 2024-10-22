// src/pages/Products.jsx
import React from 'react';
import ProductList from '../components/ProductList';

const Products = ({ addToCart }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Our Products</h2>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default Products;
