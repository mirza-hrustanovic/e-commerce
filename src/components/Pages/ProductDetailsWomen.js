import "./ProductDetailsWomen.css";
import { useParams } from "react-router";
import ProductsWomen from "../products/ProductsWomen";

import Cart from "./Cart";
import { useState } from "react";

const ProductDetailsWomen = () => {
  const productId = useParams();
  const productDetails = ProductsWomen.filter((x) => x.id == productId.id);
  const product = productDetails[0];

  const [cart, SetCart] = useState([]);
  console.log(cart);
  const addToCart = () => {
    SetCart(cart);
  };

  return (
    <>
      <div className="container">
        <div className="image">
          <img
            key={product.id}
            src={product.thumb.pic1}
            alt={product.productName}
            height="400px"
          ></img>
          <div className="thumb">
            <img src={product.thumb.pic1} alt={product.productName}></img>
            <img src={product.thumb.pic2} alt={product.productName}></img>
            <img src={product.thumb.pic3} alt={product.productName}></img>
            <img src={product.thumb.pic4} alt={product.productName}></img>
          </div>
        </div>

        <div className="details">
          <h1 className="dh1">{product.productName}</h1>
          <h3 className="dh3">{product.price}</h3>
          <h3 className="dh3">{product.description}</h3>
          <button className="dbut" onClick={() => addToCart(cart)}>
            Add to cart
          </button>
        </div>
        <div className="cart">
          <Cart></Cart>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default ProductDetailsWomen;
