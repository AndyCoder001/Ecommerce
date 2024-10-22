import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = ({ cartCount }) => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <h2>MyStore</h2>
      </div>
      <div style={styles.navItems}>
        <Link to="/" style={styles.link}>Products</Link>
        <Link to="/cart" style={styles.link}>Cart ({cartCount})</Link>
        <Link to="/checkout" style={styles.link}>Checkout</Link>
      </div>
    </nav>
  );
};

const styles = {
    
  nav: {
    padding: '10px 20px',
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: '24px',
  },
  navItems: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Navbar;
