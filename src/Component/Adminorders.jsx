// src/Pages/Adminorders.js
import React, { useContext } from 'react';
import { myContext } from '../App';

const Adminorders = () => {
  const { orderDetails } = useContext(myContext);
  const userDetails = orderDetails?.userDetails;
  const orderItems = orderDetails?.orderItems || [];
  const DtoINR = 80;

  if (!userDetails || orderItems.length === 0) {
    return <p style={{ padding: '30px', fontWeight: 'bold' }}>No order details available.</p>;
  }

  const totalAmount = orderItems.reduce((acc, item) => acc + item.price * DtoINR, 0);

  return (
    <div style={{ padding: '30px' }}>
      <h2>Admin Order Summary</h2>

      <table
        border="1"
        cellPadding="10"
        style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}
      >
        <thead style={{ backgroundColor: '#f0f0f0' }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Payment</th>
            <th>Ordered Items</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userDetails.name}</td>
            <td>{userDetails.email}</td>
            <td>{userDetails.phone}</td>
            <td>{userDetails.address}</td>
            <td>{userDetails.payment}</td>
            <td>
              {orderItems.map((item, index) => (
                <div key={index} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img
                    src={item.thumbnail || item.image}
                    alt={item.title}
                    width="40"
                    style={{ borderRadius: '4px' }}
                  />
                  <span>{item.title} - ₹{(item.price * DtoINR).toFixed(0)}</span>
                </div>
              ))}
            </td>
            <td><strong>₹{totalAmount.toFixed(0)}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Adminorders;
