import React, { useState, useContext } from "react";
import "./home.scss";
import { picData } from "./picData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { AppContext } from "../../context/context";
import Products from "../../components/products/Products";


const Home = () => {
  const { items } = useContext(AppContext)
  const [currentImage, setCurrentImage] = useState(0);

 



  const nextSlide = () => {
    setCurrentImage(currentImage >= 4 ? 0 : currentImage + 1);
  };
  const prevSlide = () => {
    setCurrentImage(currentImage <= 0 ? 4 : currentImage - 1);
  };


  







  return (
    <div className="home">
      <div className="top">
        {/* <img 
        className='backgroundImg'
        src="images/5.jpg"
        
        
        /> */}

        {picData.map((slide, index) => {
          return (
            <div
              className={index === currentImage ? "active" : "slide"}
              key={index}>
              {index === currentImage && (
                <img src={slide.image} className="backgroundImg" />
              )}
            </div>
          );
        })}
        <div className="arrowLeft">
          <FaArrowAltCircleLeft onClick={prevSlide} />
        </div>
        <div className="arrowRight">
          <FaArrowAltCircleRight onClick={nextSlide} />
        </div>
      </div>

      <div className="center">
        <Products  items={items} />

      </div>

      <div className="down">

      </div>
    </div>
  );
};

export default Home;
