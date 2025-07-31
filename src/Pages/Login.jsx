import React, { useContext, useRef, useState } from "react";
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navi = useNavigate();
  const [msg, setMsg] = useState("");

  const val = useContext(myContext);

  const usref = useRef();
  const passref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    let found = false;

    val.user.forEach((cur) => {
      if (
        cur.usname === usref.current.value &&
        cur.password === passref.current.value
      ) {
        found = true;
        navi("/Home");
      }
    });

    if (!found) {
      setMsg("Invalid username or password");
    }
  };

  // ✅ Inline styles (matching Signup design)
  const containerStyle = {
    backgroundColor: "#e6f0ff",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formStyle = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const labelStyle = {
    fontWeight: "bold",
    color: "#003366",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const msgStyle = {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  };

  const linkStyle = {
    color: "#007bff",
    textAlign: "center",
    cursor: "pointer",
    marginTop: "10px",
    textDecoration: "underline",
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <label style={labelStyle}>Username</label>
        <input type="text" ref={usref} style={inputStyle} />

        <label style={labelStyle}>Password</label>
        <input type="password" ref={passref} style={inputStyle} />

        <button onClick={handleSubmit} style={buttonStyle}>
          Login
        </button>

        {msg && <p style={msgStyle}>{msg}</p>}

        <p style={linkStyle} onClick={() => navi("/Signup")}>
          Create new user account
        </p>
      </form>
    </div>
  );
};

export default Login;