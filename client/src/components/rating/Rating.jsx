import React, {useState, useEffect} from 'react';
import "./rating.scss"
import {FaStar} from "react-icons/fa";


const getLocalStorageRating = () => {
    let rating = localStorage.getItem("rating")
    if(rating) {
      return JSON.parse(localStorage.getItem("rating"))
    }else {
      return []
    }
  }


const Rating = () => {
    const [rating, setRating] = useState(getLocalStorageRating)
    const [stars, setStars] =useState(["✰","✰","✰","✰","✰"]);
    const [hover, setHover] = useState(null)


    useEffect(() => {
     localStorage.setItem("rating", JSON.stringify(rating))

    }, [rating])



  return (
    <div className='rating'>
        {stars.map((star, index) => { 
            const  ratingValue = index + 1;
           return(
            <label className="label">
                <input 
                type="radio"
                value={ratingValue}
                onClick={() =>setRating(ratingValue)}
                
                />
                   <FaStar 
                    className='star'
                    color={ratingValue <= (hover || rating) ? "black" : "grey"}
                    size={25}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseOut={() => setHover(null)}
                    
                    
                    />


            </label>

           )
        })}
    
    </div>
  )
}

export default Rating