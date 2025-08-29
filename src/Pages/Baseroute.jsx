import { BrowserRouter } from "react-router-dom";
import App from "../App";

function Baseroute() {
  return (
    <BrowserRouter basename="/Ecommerce-website">
      <App/>
    </BrowserRouter>
  );
}

export default Baseroute;
