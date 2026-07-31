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
    width: '52px',
    padding:'3px',
    height: '52px',
    borderRadius: '5%',
    objectFit: 'cover',

backgroundColor: '#E0E0E0',
  opacity:'1' ,

  }}
/>
</div>

</div>

);
};

export default ReviewCard;