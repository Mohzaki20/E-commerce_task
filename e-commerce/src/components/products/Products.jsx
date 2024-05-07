import React from "react";
import Card from "../content/Card";
import storeItems from "../../data/storeItems.json";
function Products() {
  return (
    <div className="product">
      <div className="container" style={{display:"flex",flexWrap:"wrap",gap:8}}>
        {storeItems.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
