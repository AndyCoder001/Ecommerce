// src/pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(index)} style={styles.button}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <Link to="/checkout" style={styles.checkoutButton}>Proceed to Checkout</Link>}
    </div>
  );
};

const styles = {
  button: {
    marginLeft: '10px',
    backgroundColor: '#ff4d4d',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    color: 'white',
  },
  checkoutButton: {
    marginTop: '20px',
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    textDecoration: 'none',
  },
};

export default Cart;
