import React, { useState, useEffect, useRef } from "react";
import { AppContext } from "../../context/context";
import Product from "../product/Product";
import { bestSellers } from "./bestSellers";
import { motion } from "framer-motion";
import "./products.scss";

const Products = ({ items }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const radios = ["Apple", "Sumsung", "Huawei"];

  //framer motion bestseller
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

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
                onChange={(e) => setSelectedBrand(e.target.id)}></input>
              <span className="asBtn">{brand}</span>
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

      <div className="bestSellers">
        <h1>Best Sellers </h1>
        <motion.div className="carousel">
          <motion.div
            className="inner-carousel"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            ref={carousel}
            whileTap={{ cursor: "grabbing" }}>
            {bestSellers.map((best) => (
              <motion.div className="item">
                <img className="img" src={best.image} />
              </motion.div>
            ))}
          </motion.div>
          {/* <div className="center">
                <span className="brand">{best.brand}</span>
                <span className="price">{best.price}</span>
              </div> */}
        </motion.div>
      </div>
    </>
  );
};

export default Products;
