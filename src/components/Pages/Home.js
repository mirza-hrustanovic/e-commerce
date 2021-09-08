import React from "react";
import { NavLink } from "react-router-dom";
import men from "../Images/men.jpg";
import women from "../Images/women.jpg";
import menShoes from "../Images/menShoes.jpg";
import womenShoes from "../Images/womenShoes.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="first-image">
        <div className="women-link-img">
          <NavLink exact to="/women">
            Women
          </NavLink>
        </div>
        <NavLink exact to="/women">
          <img src={women} alt="women" height="600px" width="450px" />
        </NavLink>
        <div className="women-shoes">
          <NavLink exact to="/women">
            <img src={womenShoes} alt="women" height="350px" width="250px" />
          </NavLink>
        </div>
        <div className="sale-woman-link-img">
          <NavLink exact to="/women">
            Sale(Women)
          </NavLink>
        </div>
      </div>
      <div className="second-image">
        <div className="men-link-img">
          <NavLink exact to="/men">
            Men
          </NavLink>
        </div>
        <NavLink exact to="/men">
          <img src={men} alt="men" height="600px" width="450px" />
        </NavLink>
        <div className="sale-men-link-img">
          <NavLink exact to="/men">
            Sale(Men)
          </NavLink>
        </div>
        <div className="men-shoes">
          <NavLink exact to="/men">
            <img src={menShoes} alt="men" height="350px" width="250px" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Home;
