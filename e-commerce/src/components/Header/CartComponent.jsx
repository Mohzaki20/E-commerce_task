import React from "react";
import shopping from "../../images/shopping.svg";
import "./css/main.css"
function CartComponent() {
  return (
    <>
      {" "}
      <img src={shopping} alt="" />
      <span>Cart</span>
      <div className="badge">5</div>
    </>
  );
}

export default CartComponent;
