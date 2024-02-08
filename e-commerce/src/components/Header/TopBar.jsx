import React from "react";
import "./css/main.css"
import menu from "../../images/Group770.svg"
import logo from "../../images/Group769.svg"
import leftArrow from "../../images/leftArrow.svg"
import rightArrow from "../../images/rightArrow.svg"
import phone from "../../images/phone.svg"
import tracker from "../../images/cart.svg"
import location from "../../images/map.svg"
export default function TopBar() {
  return (
    <div className="top-bar">

    <div className="container">
      <div className="logo">
        <img src={menu} alt="menu" />
        <img src={logo} alt="logo" />
      </div>
      <div className="offer">
        <img src={leftArrow} alt="arrow" />
        <span>
          Valentine’s Day Offers! Buy Two Get One Free Shop Now {"  "}
          <span className="shopNow">Shop now</span>
        </span>
        <img src={rightArrow} alt="arrow" />
      </div>
      <ul className="items">
        <li>
          <img src={phone} alt="" />
          <span>Contact us</span>
        </li>
        <li>
          <img src={tracker} alt="" />
          <span>Track Order</span>
        </li>
        <li>
          <img src={location} alt="" />
          <span>Find a store</span>
        </li>
      </ul>
    </div>
    </div>

  );
}
