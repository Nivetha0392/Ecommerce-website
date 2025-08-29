import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Setting from "./Pages/Setting";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Contact from "./Pages/Contact";
import Checkout from "./Pages/Checkout";
import Admindashboard from "./Pages/Admindashboard";
import Ordersummary from "./Pages/Ordersummary";
import './App.css'
import { createContext, useState } from "react";

export const myContext=createContext()

const App = () => {
  const[user,setUser]=useState([])
  const [cartItems, setCartItems] = useState([]);
  const [orderDetails, setOrderDetails] = useState({});  

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };
  
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };
 
  return (
    <div id="main-container">
      <myContext.Provider value={{user,setUser, cartItems, addToCart,removeFromCart, orderDetails, setOrderDetails}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/Admindashboard" element={<Admindashboard/>} />  
          <Route path="/Ordersummary" element={<Ordersummary/>} />   
        </Routes>
      </myContext.Provider>
    </div>
  );
};

export default App;
