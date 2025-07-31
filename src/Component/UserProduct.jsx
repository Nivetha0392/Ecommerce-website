import React, { useState } from "react";

const userProduct = () => {

    const [products,setProducts]=useState([])

  fetch("https://fakestoreapi.in/products")
    .then((response) => response.json())
    .then((data) => setProducts(data));

  const cardContainerStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "200px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "6px",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={cardContainerStyle}>
      {products.map((item) => (
        <div key={item.id} style={cardStyle}>
          <img src={item.image} alt={item.name} style={imageStyle}  />
          <h3>{item.name}</h3>
          <h4>{item.price}</h4>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <button style={buttonStyle}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default userProduct;