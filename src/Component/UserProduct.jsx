import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../App';

const UserProduct = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(myContext); // This MUST be defined in App
    
   const DtoINR = 80; // to change dollar to INR price

   const [addedItems, setAddedItems] = useState([]); // track added items

    const handleAddToCart = (product) => {  // Handle add to cart and mark as added
    addToCart(product);
    setAddedItems((prev) => [...prev, product.id])}


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products)) // NOTE: it's `data.products`
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            margin: '10px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            width: '200px',
            textAlign: 'center',
          }}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: '100%', height: '120px', objectFit: 'cover' }}
          />
          <h4>{product.title}</h4>
          <p>Rs. {(product.price *  DtoINR).toFixed(0)}</p>
          <button onClick={() => handleAddToCart(product)}
            disabled={addedItems.includes(product.id)}
            style={{
              padding: '8px',
              backgroundColor: addedItems.includes(product.id) ? 'green' : '#494a4bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: addedItems.includes(product.id) ? 'default' : 'pointer',
              marginTop: '10px',
            }}>
               {addedItems.includes(product.id) ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserProduct;