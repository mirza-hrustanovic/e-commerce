import React from "react";
import ProductsWomen from "../products/ProductsWomen";
import "./Women.css";
import { NavLink } from "react-router-dom";

const Women = () => {
  const itemsList = ProductsWomen.map((item) => (
    <div className="products" key={item.id}>
      <div>
        <NavLink to={"/women/" + item.id}>
          <img
            src={item.thumb.pic1}
            className="card__image"
            height="350px"
            width="330px"
            alt=""
          ></img>

          <h2>{item.productName}</h2>
          <p>{item.price}</p>
        </NavLink>
      </div>
    </div>
  ));
  return <div className="content">{itemsList}</div>;
};
export default Women;
