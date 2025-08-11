import React, { useContext } from 'react';
import { myContext } from '../App';

const Placedorders = () => {
  
  const { orderDetails } = useContext(myContext);
  const DtoINR = 80;

  if (!orderDetails || !orderDetails.orderItems || orderDetails.orderItems.length === 0) {
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>Order Summary</h2>
        <p style={styles.emptyMessage}>No order details available.</p>
      </div>
    );
  }

  const { orderItems, userDetails } = orderDetails;
  const totalAmount = orderItems.reduce((acc, item) => acc + item.price * DtoINR, 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Order Summary</h2>

      {/* User Details */}
      {userDetails && (
        <div style={styles.section}>
          <h3 style={styles.subheading}>Customer Details</h3>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Address:</strong> {userDetails.address}</p>
          <p><strong>Phone:</strong> {userDetails.phone}</p>
        </div>
      )}

      {/* Ordered Items */}
      <div style={styles.section}>
        <h3 style={styles.subheading}>Ordered Items</h3>
        <ul style={styles.itemList}>
          {orderItems.map((item, index) => (
            <li key={index} style={styles.item}>
              <img
                src={item.thumbnail || item.image}
                alt={item.title}
                style={styles.image}
              />
              <div>
                <h4 style={styles.itemTitle}>{item.title}</h4>
                <p style={styles.price}>Rs. {(item.price * DtoINR).toFixed(0)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Total Amount */}
      <div style={styles.total}>
        <h3>Total Amount: Rs.{totalAmount.toFixed(0)}</h3>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  subheading: {
    color: '#444',
    borderBottom: '2px solid #ccc',
    paddingBottom: '5px',
    marginBottom: '10px',
  },
  section: {
    marginBottom: '30px',
  },
  itemList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '6px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  },
  image: {
    width: '60px',
    height: '60px',
    marginRight: '15px',
    borderRadius: '4px',
    objectFit: 'cover',
  },
  itemTitle: {
    margin: '0 0 5px',
    fontSize: '16px',
  },
  price: {
    margin: 0,
    color: '#666',
  },
  total: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#000',
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#777',
    marginTop: '20px',
  },
};

export default Placedorders;
