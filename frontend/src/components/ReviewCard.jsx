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
<img src={review.image} alt={review.name} />
</div>

</div>

);
};

export default ReviewCard;