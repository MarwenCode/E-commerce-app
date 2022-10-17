import React, { useState } from "react";
import { AppContext } from "../../context/context";
import Product from "../product/Product";
import "./products.scss";

const Products = ({ items }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const radios = ["Apple", "Sumsung", "Huawei"];

  return (
    <>
      <div className="searchItem">
        <div className="items">
          <h3 className="title">Search for your brand</h3>
          {radios.map((brand) => (
            <label>
              <input
              className="checkInput"
                type="radio"
                id={brand}
                checked={brand === selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.id)}
              >
              
          
              </input>
              <span className="asBtn" 
           >
                {brand}
              </span>
           
            </label>
              
          ))}
          {selectedBrand && (
            <button className="all" onClick={() => setSelectedBrand("")}>
              All
            </button>
          )}
        </div>
      </div>
      <div className="products">
        {items
          .filter((item) => item.brand.includes(selectedBrand))

          .map((item, index) => (
            <Product item={item} key={index} />
          ))}
      </div>
    </>
  );
};

export default Products;
