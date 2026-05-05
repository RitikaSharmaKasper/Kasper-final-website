import React from "react";

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="feature-card-item">
      
      <div className="feature-icon-box">
        <img src={image} alt={title} />
      </div>

      <h3 className="feature-card-title">{title}</h3>
      
      <p className="feature-card-description">
        {description}
      </p>

    </div>
  );
};

export default FeatureCard;