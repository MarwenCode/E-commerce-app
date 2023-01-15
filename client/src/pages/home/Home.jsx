import React, { useState, useContext, useEffect } from "react";
import "./home.scss";
import { picData } from "./picData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { AppContext } from "../../context/context";
import Products from "../../components/products/Products";
import Footer from "../footer/Footer";

const Home = () => {
    const { items } = useContext(AppContext);
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage(currentImage >= 4 ? 0 : currentImage + 1);
  };
  const prevSlide = () => {
    setCurrentImage(currentImage <= 0 ? 4 : currentImage - 1);
  };

  // useEffect(() => {
  //   const autoSlider = () => {
  //     setInterval(nextSlide, 10000);
  //   };
  //   autoSlider();
  // }, [currentImage]);

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

        <div className="content">
          <button>Shop now</button>
          <p>
            "Upgrade your mobile experience with our latest smartphone,
            featuring a sleek design, powerful camera, and lightning-fast
            processing for smooth multitasking. Don't miss out on this
            limited-time offer and order yours today!"
          </p>
          
        </div>
        {/* <div className="arrowLeft">
          <FaArrowAltCircleLeft onClick={prevSlide} />
        </div>
        <div className="arrowRight">
          <FaArrowAltCircleRight onClick={nextSlide} />
        </div> */}
      </div>
      <div className="search">{/* <Search /> */}</div>

      <div className="center">
        <Products items={items} />
      </div>
      <div className="offers">
      
      </div>

      <div className="down">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
