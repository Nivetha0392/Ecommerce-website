import React, { useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { myContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Viewcart = () => {
  const { cartItems, removeFromCart } = useContext(myContext);
  const [showCart, setShowCart] = useState(false);
  const DtoINR = 80;

const navi=useNavigate(); //navigate for checkout form

  // Calculate total
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * DtoINR, 0);

  return (
    <div
      style={{
        backgroundColor: '#babfc0ff',
        padding: '5px 10px',
        borderRadius: '5px',
        position: 'relative',
        cursor: 'pointer',
      }}
      onClick={() => setShowCart(!showCart)}
    >
      <FaShoppingCart size={22} />
      <span
        style={{
          position: 'absolute',
          top: -6,
          right: -6,
          background: 'green',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 6px',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        {cartItems?.length || 0}
      </span>

      {showCart && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: '35px',
            width: '280px',
            background: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            borderRadius: '6px',
            padding: '10px',
            zIndex: 1000,
          }}
        >
          <h4 style={{ marginBottom: '10px' }}>Cart Items</h4>
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, maxHeight: '200px', overflowY: 'auto' }}>
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      borderBottom: '1px solid #ddd',
                      padding: '6px 0',
                      gap: '8px',
                    }}
                  >
                    <img
                      src={item.thumbnail || item.image}
                      alt={item.title}
                      style={{
                        width: '50px',
                        height: '50px',
                        objectFit: 'cover',
                        borderRadius: '5px',
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.title}</div>
                      <div style={{ fontSize: '13px', color: 'grey' }}>
                        Rs.{(item.price * DtoINR).toFixed(0)}
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromCart(item.id);
                      }}
                      style={{
                        padding: '4px 8px',
                        fontSize: '12px',
                        backgroundColor: '#d30606ff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              {/* Checkout section  */}
              <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>
                  Total:Rs.{totalAmount.toFixed(0)}
                </p>
                <button
                  style={{
                    padding: '8px 16px',
                    fontSize: '14px',
                    backgroundColor: '#028802',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); // stop closing dropdown
                   navi('/Checkout');
                  }}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Viewcart;
