import React from 'react'
import "./MovingCards.css"
import card1 from "../assets/images2/card1.png";

import card2 from  "../assets/images2/card2.jpg";

import card3 from "../assets/images2/card3.jpg";

import card4 from "../assets/images2/card4.jpg";
import card5 from "../assets/images2/card5.jpg";
import card6  from  "../assets/images2/card6.png";
import card7 from "../assets/images2/card7.png";
import card8  from "../assets/images2/card8.png";
import card9 from "../assets/images2/card9.svg";
import card10 from "../assets/images2/card10.svg"

import card11 from "../assets/images2/card11.svg"
const MovingCards = () => {
  return (
    <div className="card-maindiv">


      <div className="center-text">
        <p>100+ Successful Projects Completed</p>
      </div>

      <div className="cards-wrapper">

        <div className="card-row scroll-left">
          <img src={card1} />
          <img src={card2} />
          <img src={card3} />
          <img src={card4} />
          <img src={card5} />
    
          <img src={card1} />
          <img src={card2} />
          <img src={card3} />
          <img src={card4} />
          <img src={card5} />
        </div>

        <div className="card-row scroll-right">
          <img src={card6} />
          <img src={card7} />
          <img src={card8} />
          <img src={card1} />
          <img src={card2} />
       
              <img src={card6} />
          <img src={card7} />
          <img src={card8} />
          <img src={card1} />
          <img src={card2} />
        </div>

        <div className="card-row scroll-left">
         
          <img src={card5} />
          <img src={card1} />
       
          <img src={card9} />
          <img src={card10} />
               <img src={card11} />
         <img src={card11} />
          <img src={card10} />
       
          <img src={card9} />
          <img src={card5} />
               <img src={card3} />
          
           
        </div>

      </div>

    </div>
  )
}

export default MovingCards