import React from "react";

const localstorage = () => {
  function start() {
    // localStorage.setItem('name','nivetha')
    // console.log(localStorage.getItem('name'))

    sessionStorage.setItem("name", "none");
    console.log(sessionStorage.getItem("name"));
  }

  return (
    <div>
      <button onClick={start}>click</button>
    </div>
  );
};

export default localstorage;
