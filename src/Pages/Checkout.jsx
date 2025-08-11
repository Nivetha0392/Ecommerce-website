import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { myContext } from '../App';
import { motion } from 'framer-motion';

const Checkout = () => {
  const navi = useNavigate();
  const { cartItems, setOrderDetails } = useContext(myContext); // global state

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    payment: '',
  });

  const [showAnimation, setShowAnimation] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      userDetails: formData,
      orderItems: cartItems,
    };

    setOrderDetails(orderData); // ✅ Set only in context

    setShowAnimation(true);

    setTimeout(() => {
      setShowAnimation(false);
      navi('/Ordersummary'); // ✅ Navigate without localStorage or state
    }, 3000);
  };

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '40px',
        backgroundColor: '#f0f5f7ff',
        minHeight: '100vh'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          padding: '30px',
          width: '100%',
          maxWidth: '500px'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '10px', color: '#333' }}>Checkout</h2>
          <form onSubmit={handleSubmit}>
            <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
            <TextareaField label="Address" name="address" value={formData.address} onChange={handleChange} />
            <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
            <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} pattern="[0-9]{10}" onChange={handleChange} />
            <SelectField name="payment" value={formData.payment} onChange={handleChange} />

            <button type="submit" style={buttonStyle}>
              Place Order
            </button>
          </form>
        </div>
      </div>

      {showAnimation && (
        <div style={overlayStyle}>
          <div style={animationBoxStyle}>
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              width="80"
              height="80"
              viewBox="0 0 52 52"
            >
              <motion.circle
                cx="26"
                cy="26"
                r="25"
                fill="none"
                stroke="#035f18ff"
                strokeWidth="2"
              />
              <motion.path
                fill="none"
                stroke="#035f18ff"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 27l7 7 16-16"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.svg>
            <h2 style={{ color: '#035f18ff', marginTop: '20px' }}>Order Confirmed!</h2>
            <p>Your order will deliver soon...</p>
          </div>
        </div>
      )}
    </>
  );
};

// Reusable input component
const InputField = ({ label, name, value, onChange, type = 'text', pattern }) => (
  <div style={{ marginBottom: '16px' }}>
    <label style={{ fontWeight: 'bold' }}>{label}:</label><br />
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      pattern={pattern}
      required
      style={inputStyle}
    />
  </div>
);

const TextareaField = ({ label, name, value, onChange }) => (
  <div style={{ marginBottom: '16px' }}>
    <label style={{ fontWeight: 'bold' }}>{label}:</label><br />
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows="3"
      required
      style={inputStyle}
    ></textarea>
  </div>
);

const SelectField = ({ name, value, onChange }) => (
  <div style={{ marginBottom: '20px' }}>
    <label style={{ fontWeight: 'bold' }}>Payment Method:</label><br />
    <select
      name={name}
      value={value}
      onChange={onChange}
      required
      style={inputStyle}
    >
      <option value="">Select</option>
      <option value="cod">Cash on Delivery</option>
      <option value="upi">UPI</option>
      <option value="card">Credit Card</option>
    </select>
  </div>
);

// Reusable styles
const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '6px',
};

const buttonStyle = {
  width: '100%',
  backgroundColor: '#28a745',
  color: 'white',
  padding: '12px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
};

const overlayStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const animationBoxStyle = {
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: '12px',
  textAlign: 'center',
};

export default Checkout;
