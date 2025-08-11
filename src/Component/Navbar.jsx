import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // ✅ Inline Styles
  const navStyle = {
    backgroundColor: '#494a4bff', 
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  };

  const titleStyle = {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '16px',
  };

 

  return (
    <div style={navStyle}>
      <h1 style={titleStyle}>🛒ShopperStop</h1>
      <ul style={ulStyle}>
        <li><Link to='/Home' style={linkStyle}>Home</Link></li>
        <li><Link to='/About' style={linkStyle}>About</Link></li>
        <li><Link to='/Contact' style={linkStyle}>Contact</Link></li>
        <li><Link to='/Setting' style={linkStyle}>Setting</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;