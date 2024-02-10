import React from "react";
import "./css/main.css";
import searchIcon from "../../images/searchIcon.svg";
import adidas from "../../images/adidas.svg";
import heart from "../../images/heart.svg";
import shopping from "../../images/shopping.svg";
import user from "../../images/user.svg";
import CartComponent from "./CartComponent";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="search">
          <img src={searchIcon} alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img src={adidas} alt="" />
        <ul className="icons">
          <li>
            <CartComponent />
          </li>
          <li>
            <img src={heart} alt="" />
            <span>Wish List</span>
          </li>
          <li>
            <img src={user} alt="" />
            <span>Login</span>
          </li>
        </ul>
      </div>
      <div className="navbar">
        <div className="container">
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Unisex</li>
            <li>Kids</li>
            <li>Best Sellers</li>
            <li>New Arrivals</li>
            <li>Offers</li>
          </ul>
        </div>
      </div>
      <div className="path">
        <div className="container">
          Men / Clothing / Tops / Adidas / Adidas Black T-Shirt
        </div>
      </div>
    </div>
  );
}

export default Header;
