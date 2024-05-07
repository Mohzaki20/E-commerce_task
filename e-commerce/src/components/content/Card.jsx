import React from "react";
import youth from "../../images/youth.png";
import adidas from "../../images/adidas.svg";
import goldStar from "../../images/goldStar.svg";
import emptyStar from "../../images/emptyStar.svg";
import "./css/main.css";
import { Link } from "react-router-dom";
function Card({ name, id, imgUrl }) {
  // console.log(imgUrl);
  return (
    <div className="card">
      <img src={youth} alt="img" style={{ width: "100%" }} />
      <p
        style={{
          fontSize: "16px",
          fontWeight: "900",
          margin: 5,
          letterSpacing: 1.5,
        }}
      >
        {name}
      </p>
      <div className="card-price">
        <div style={{ fontSize: "20px", color: "#542e90", fontWeight: "bold" }}>
          9,999 <span style={{ fontSize: "14px" }}>LE</span>
        </div>
        <img src={adidas} alt="" width={56} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "10px 0 20px",
        }}
      >
        <span style={{ display: "flex", gap: "10px" }}>
          <img src={goldStar} alt="" width={16} />
          <img src={goldStar} alt="" width={16} />
          <img src={goldStar} alt="" width={16} />
          <img src={goldStar} alt="" width={16} />
          <img src={emptyStar} alt="" width={16} />
        </span>
        <span style={{ fontSize: "16px", fontWeight: "600" }}>4.9 of 5</span>
      </div>
      <div style={{ fontSize: "10px", textAlign: "center" }}>
        Pickup From:{" "}
        <span style={{ fontSize: "12px", fontWeight: "900" }}>Genena Mall</span>
        <Link to={`/details/${id}`} className="details-btn">
          More Details
        </Link>
      </div>
    </div>
  );
}

export default Card;
