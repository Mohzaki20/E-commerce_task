import React, { useContext } from "react";
import shopping from "../../images/shopping.svg";
import StoreContext from "../../App";
import "./css/main.css";
import { useShoppingCart } from "../../context/ShoppingCartContext";

function CartComponent() {
  const {cartItems} = useShoppingCart()
  return (
    <>
      <img src={shopping} alt="" />
      <span>Cart</span>
      <div className="badge">{cartItems.length}</div>
    </>
  );
}

export default CartComponent;
