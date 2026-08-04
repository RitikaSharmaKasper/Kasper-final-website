   import React from "react";
import "./ReviewCard.css"

const ReviewCard = ({review}) => {
return (

<div className="review-card">

<p className="review-text">
{review.text}
</p>

<div className="review-user">



<span>@ {review.name}</span>
<img 
  src={review.image} 
  alt={review.name} 
  style={{
    width: '55px',
    padding:'2px',
    height: '55px',
    borderRadius: '50%',
    objectFit: 'cover',

backgroundColor: '#E0E0E0',
  opacity:'4' ,

  }}
/>
</div>

</div>

);
};

export default ReviewCard;