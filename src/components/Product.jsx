// src/components/Product.jsx
import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div style={styles.product}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)} style={styles.button}>
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  product: {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#007bff',
    border: 'none',
    color: 'white',
    padding: '10px 15px',
    cursor: 'pointer',
  },
};

export default Product;
