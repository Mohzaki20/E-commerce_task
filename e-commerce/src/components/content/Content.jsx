import React, { useEffect, useState } from "react";
import "./css/main.css";
import shirt from "../../images/163975.jpeg";
import Smallshirt from "../../images/shirt.png";
import adidas from "../../images/adidas.svg";
import goldStar from "../../images/goldStar.svg";
import emptyStar from "../../images/emptyStar.svg";
import man from "../../images/man.png";

function Content() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div className="content">
      <div className="container">
        {/* {data.map((e) =>  */}
        <div className="images">
          <img src={shirt} alt="" width={500} />
          <div>
            <img src={Smallshirt} alt="" width={100} />
            <img src={Smallshirt} alt="" width={100} />
            <img src={Smallshirt} alt="" width={100} />
            <img src={Smallshirt} alt="" width={100} />
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
            <span style={{ color: "#A7A9AC", fontSize: "16px", fontWeight: "600",textDecoration:"line-through" }}>9,999 LE</span>
            <span className="off">30% Off</span>
          </div>
          <div className="size">
            <h3 style={{fontSize:"18px",fontWeight:"800"}}>Size</h3>
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
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default Content;
