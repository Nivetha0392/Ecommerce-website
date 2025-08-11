import React, { useState } from "react";
import Adminorders from "../Component/Adminorders";
import { useNavigate } from "react-router-dom";

const Admindashboard = () => {
  const navi = useNavigate();
  const [activePage, setActivePage] = useState("Dashboard");

  const styles = {
    layout: {
      display: "flex",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5",
    },
    sidebar: {
      width: "220px",
      backgroundColor: "#494a4bff", // Match previous admin header color
      color: "#fff",
      padding: "20px 10px",
    },
    navItem: {
      padding: "12px 20px",
      cursor: "pointer",
      borderRadius: "6px",
      marginBottom: "10px",
      fontWeight: "500",
    },
    navItemActive: {
      backgroundColor: "#616263", // lighter shade on active
    },
    header: {
      backgroundColor: "#494a4bff",
      color: "white",
      padding: "15px 25px",
      borderBottom: "1px solid #ddd",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "20px",
      fontWeight: "bold",
    },
    contentArea: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    content: {
      padding: "30px",
    },
    logoutButton: {
      backgroundColor: "#d9534f",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "8px 14px",
      cursor: "pointer",
    },
  };

  const pages = ["Dashboard", "Users", "Settings"];

  return (
    <div style={styles.layout}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Admin</h2>
        {pages.map((page) => (
          <div
            key={page}
            style={{
              ...styles.navItem,
              ...(activePage === page ? styles.navItemActive : {}),
            }}
            onClick={() => setActivePage(page)}
          >
            {page}
          </div>
        ))}
      </div>

      {/* Main Area */}
      <div style={styles.contentArea}>
        <div style={styles.header}>
          <span>{activePage}</span>
          <button style={styles.logoutButton} onClick={() => navi("/")}>
            Logout
          </button>
        </div>

        <div style={styles.content}>
          <h2>Welcome to the {activePage} page!</h2>
          <Adminorders />
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
