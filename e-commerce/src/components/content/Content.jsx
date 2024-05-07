import React, { useState } from "react";
import "./css/main.css";
import shirt from "../../images/163975.jpeg";
import Smallshirt from "../../images/shirt.png";
import adidas from "../../images/adidas.svg";
import goldStar from "../../images/goldStar.svg";
import emptyStar from "../../images/emptyStar.svg";
import man from "../../images/man.png";
import plus from "../../images/plus.svg";
import minus from "../../images/minus.svg";
import leftArrow from "../../images/leftArrow.svg";
import rightArrow from "../../images/rightArrow.svg";
import Card from "./Card";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useParams } from "react-router-dom";

function Content(props) {
  const {
    cartItems,
    getStoreQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemsFromCart,
  } = useShoppingCart();

  const { id } = useParams();
  console.log(cartItems);
  // const increase = () => {
  //   increaseCartQuantity(id)
  //   setCounter(counter + 1)
  // }
  return (
    <div className="content">
      <div className="container">
        {/* {data.map((e) =>  */}
        <div className="images">
          <img src={shirt} alt="" width={500} />
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <img src={leftArrow} alt="" width={15} />
            <img src={Smallshirt} alt="" width={100} />
            <img src={Smallshirt} alt="" width={100} />
            <img src={Smallshirt} alt="" width={100} />
            <img src={Smallshirt} alt="" width={100} />
            <img src={rightArrow} alt="" width={15} />
          </div>
        </div>
        <div className="info">
          <div className="title">
            {" "}
            <img src={adidas} alt="" />
            <p className="description">
              Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
              adipiscing elit.
            </p>
            <div
              style={{ color: "#A7A9AC", fontSize: "16px", fontWeight: "600" }}
            >
              Men
            </div>
          </div>
          <div className="rate">
            <span style={{ display: "flex", gap: "10px" }}>
              <img src={goldStar} alt="" />
              <img src={goldStar} alt="" />
              <img src={goldStar} alt="" />
              <img src={goldStar} alt="" />
              <img src={emptyStar} alt="" />
            </span>
            <span style={{ fontSize: "16px", fontWeight: "600" }}>
              4.9 of 5
            </span>
            <span
              style={{ color: "#A7A9AC", fontSize: "16px", fontWeight: "500" }}
            >
              22 Rates
            </span>
          </div>
          <div className="price">
            <span
              style={{ fontSize: "30px", color: "#542e90", fontWeight: "700" }}
            >
              9,999 <span style={{ fontSize: "20px" }}>LE</span>
            </span>
            <span
              style={{
                color: "#A7A9AC",
                fontSize: "16px",
                fontWeight: "600",
                textDecoration: "line-through",
              }}
            >
              9,999 LE
            </span>
            <span className="off">30% Off</span>
          </div>
          <div className="size">
            <h3 style={{ fontSize: "18px", fontWeight: "800" }}>Size</h3>
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>
            <span>X Large</span>
            <span>XX Large</span>
          </div>
          <div className="color">
            <h3>Color</h3>
            <span>
              <img src={man} alt="" />
            </span>
            <span>
              <img src={man} alt="" />
            </span>
          </div>
          <div className="quantity">
            <h3>Quantity</h3>
            <div className="counter">
              <button
                className="minus"
                onClick={() =>  decreaseCartQuantity(id)}
              >
                <img src={minus} alt="" width={12} />
              </button>
              <div className="num">{getStoreQuantity(id)}</div>
              <button className="plus" onClick={() => increaseCartQuantity(id)}>
                <img src={plus} alt="" width={12} />
              </button>
            </div>
            <div className="buttons">
              <button
                className="addtoCart"
                onClick={() => increaseCartQuantity(id)}
              >
                Add To Cart
              </button>
              <button className="pickup" onClick={() => removeItemsFromCart(id)}>Remove From Store</button>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
      <div className="products">
        <div className="container">
          <h2
            style={{ fontSize: "28px", color: "#542e90", fontWeight: "bold" }}
          >
            Similar Products
          </h2>
          <p
            style={{
              fontSize: "22px",
              fontWeight: "300",
              color: "#575756",
              margin: "5px 0 40px",
            }}
          >
            You may like these products also
          </p>
          <div className="cards-container">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
