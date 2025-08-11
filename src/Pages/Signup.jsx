import React, { useContext, useRef } from "react";
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const val = useContext(myContext);
  const navi = useNavigate();

  const usref = useRef();
  const fnameref = useRef();
  const lnameref = useRef();
  const mailref = useRef();
  const mobileref = useRef();
  const passref = useRef();
  const cpassref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    val.setUser((cur) => [
      ...cur,
      {
        fname: fnameref.current.value,
        lname: lnameref.current.value,
        usname: usref.current.value,
        mail: mailref.current.value,
        mobile: mobileref.current.value,
        password: passref.current.value,
        cpassword: cpassref.current.value,
      },
    ]);
    navi("/");
  };

  // ✅ Inline styles
  const containerStyle = {
    backgroundColor: "#e6f0ff", // light blue background
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
    gap: "8px",
  };

  const inputStyle = {
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const labelStyle = {
    fontWeight: "bold",
    color: "#111111ff",
  };

  const buttonStyle = {
    backgroundColor: "#494a4bff",
    color: "white",
    padding: "5px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "5px",
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <h1 style={{textAlign:"center"}}>Sign up</h1>
        <label style={labelStyle}>First name</label>
        <input type="text" ref={fnameref} style={inputStyle} />

        <label style={labelStyle}>Last name</label>
        <input type="text" ref={lnameref} style={inputStyle} />

        <label style={labelStyle}>Username</label>
        <input type="text" ref={usref} style={inputStyle} />

        <label style={labelStyle}>Mail</label>
        <input type="text" ref={mailref} style={inputStyle} />

        <label style={labelStyle}>Mobile</label>
        <input type="text" ref={mobileref} style={inputStyle} />

        <label style={labelStyle}>Password</label>
        <input type="password" ref={passref} style={inputStyle} />

        <label style={labelStyle}>Confirm password</label>
        <input type="password" ref={cpassref} style={inputStyle} />

        <button style={buttonStyle} onClick={handleSubmit}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
