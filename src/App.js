import "./App.css";
import Navbar from "./components/Navbar";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import PriceSel from "./components/PriceSel";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { ReactComponent as BGimage } from "./bg.svg";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="main-image">
          <BGimage />
        </div>
        <h1 className="heading">Everyday rinse and reload</h1>
        <p className="description">
          Achieve your dream skin goal with this complete package of skincare
          produts that will rejuvenate your day.
        </p>
        <div className="rating">
          <div className="stars">
            <StarIcon fontSize="small" />
            <StarIcon fontSize="small" />
            <StarIcon fontSize="small" />
            <StarIcon fontSize="small" />
            <StarHalfIcon fontSize="small" />
          </div>
          <span className="starNum">4.5</span>
          <p className="review">click to read reviews {" >"}</p>
        </div>
        <h1 className="price">
          ₹899
          <span>₹1299</span>
        </h1>
        <PriceSel />
        <br />
        <button>
          <ShoppingCartOutlinedIcon className="card-icon" fontSize="small" />
          ADD TO CART
        </button>
      </div>
    </>
  );
}

export default App;
