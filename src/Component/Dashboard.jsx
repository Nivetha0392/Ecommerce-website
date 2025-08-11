import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import Viewcart from "./Viewcart";
import UserProduct from "./UserProduct";

const Dashboard = () => {
  return (
    <div>
      {/* nav-container */}
      <div>
        <Navbar />
      </div>

      <div>
        {/* search-container */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#ecf3fa4f",
            position: "relative",
          }} >
          <div>
            <SearchBar />
          </div>

          <div>
            <Viewcart />
          </div>
        </div>

        {/* Product Section */}
        <div>
          <UserProduct />
        </div>
      </div>

      {/* footer container */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
