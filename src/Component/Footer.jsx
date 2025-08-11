import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Left: Logo or Site Name */}
        <div style={styles.column}>
          <h2 style={{ margin: 0 }}>🛒 ShopperStop</h2>
          <p style={{ fontSize: '18px', color: 'white' }}>Quality products. Trusted service.</p>
        </div>

        {/* Middle: Links */}
        <div style={styles.column}>
          <h4>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/" style={styles.link}>Home</a></li>
            <li><a href="/products" style={styles.link}>Products</a></li>
            <li><a href="/contact" style={styles.link}>Contact</a></li>
            <li><a href="/about" style={styles.link}>About Us</a></li>
          </ul>
        </div>

        {/* Right: Social Icons */}
        <div style={styles.column}>
          <h4>Follow Us</h4>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="#" style={styles.icon}><FaFacebookF /></a>
            <a href="#" style={styles.icon}><FaTwitter /></a>
            <a href="#" style={styles.icon}><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        <p>© {new Date().getFullYear()} ShopNow. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#494a4bff',
    paddingTop: '20px',
    marginTop: '40px',
    borderTop: '1px solid #ddd',
    color: 'white'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px 20px',
    color: 'white'
  },
  column: {
    flex: '1 1 200px',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '14px',
    lineHeight: '1.8',
  },
  icon: {
    color: 'white',
    fontSize: '18px',
    textDecoration: 'none',
  },
  bottom: {
    textAlign: 'center',
    padding: '5px',
    backgroundColor: '#b9b7b7ff',
    fontSize: '14px',
    color: '#555',
    borderTop: '1px solid #ccc',
  }
};

export default Footer;