import React from 'react'
import "./Reviews.css";
import ReviewCard from './ReviewCard';
import {reviews} from  "../lib/reviewsdata.js"
const Reviews = () => {
const columns=[[],[],[],[],[]];
reviews.forEach((review,index)=>{
    columns[index%5].push(review);

});
  return (
   
    <div className="Main-review-div">
<div className="review-heading">
 <p className="heading-p">Feedback & Reviews</p>
</div>

 <div className='review-container'>

   {columns.map((col,i)=>(
    <div className={`review-column ${i%2===0 ? "scroll-up":"scroll-down"}`}>
     key={i}   





{[...col,...col].map((item,index)=>(
<ReviewCard key={`${item.id}-${index}`} review={item}/>
))}</div>
   ))}




 </div>

    </div>
  )
}

export default Reviews