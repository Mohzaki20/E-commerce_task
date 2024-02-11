import React from "react";
import youth from "../../images/youth.png";
import adidas from "../../images/adidas.svg";
import goldStar from "../../images/goldStar.svg";
import emptyStar from "../../images/emptyStar.svg";
import "./css/main.css"
function Card() {
  return (
    <div className="card">
      <img src={youth} alt="" style={{width:"100%"}}/>
      <p style={{fontSize:"14px",fontWeight:"800"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      <div className="card-price">
      <div style={{fontSize:"20px",color:"#542e90",fontWeight:"bold"}}>9,999 <span style={{fontSize:"14px"}}>LE</span></div>
      <img src={adidas} alt="" width={56}/>
      </div>
      <div style={{display:"flex",justifyContent:"space-around",margin:"10px 0 20px"}}>
            <span style={{ display: "flex", gap: "10px" }}>
              <img src={goldStar} alt="" width={16}/>
              <img src={goldStar} alt="" width={16}/>
              <img src={goldStar} alt="" width={16}/>
              <img src={goldStar} alt="" width={16}/>
              <img src={emptyStar} alt="" width={16}/>
            </span>
            <span style={{ fontSize: "16px", fontWeight: "600" }}>
              4.9 of 5
            </span>
          </div>
          <div style={{fontSize:"10px",textAlign:"center"}}>Pickup From: <span style={{fontSize:"12px",fontWeight:"900"}}>Genena Mall</span></div>
    </div>
  );
}

export default Card;
