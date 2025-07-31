import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Setting from "./Pages/Setting";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Contact from "./Pages/Contact";
import { createContext, useState } from "react";


export const myContext=createContext()

const App = () => {
  const[user,setUser]=useState([])
  return (
  <div id="main-container">
     <myContext.Provider value={{user,setUser}}>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>
    </Router>
   </myContext.Provider>
  </div>
  );
};

export default App;


