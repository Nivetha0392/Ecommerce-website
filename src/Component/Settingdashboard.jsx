import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settingdashboard = () => {
  const navi = useNavigate();
  const usref = useRef();
  const passref = useRef();
  const [error, setError] = useState('');

  const containerStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#dddadaff',
    color: 'black',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '95%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#d9534f',
    color: 'white',
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#6c757d',
  };

  const handleAdminAccess = () => {
    const username = usref.current.value;
    const password = passref.current.value;

    if (username === 'admin123' && password === 'admin@123') {
      setError('');
      navi('/Admindashboard');
    } else {
      setError('Invalid admin credentials');
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Settings</h2>

      <input
        type="text"
        placeholder="Enter Admin Username"
        ref={usref}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Enter Admin Password"
        ref={passref}
        style={inputStyle}
      />
      <button style={secondaryButtonStyle} onClick={handleAdminAccess}>
        Admin Panel
      </button>

       <button style={buttonStyle} onClick={() => navi("/")}>
        Logout
      </button>


      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Settingdashboard;
