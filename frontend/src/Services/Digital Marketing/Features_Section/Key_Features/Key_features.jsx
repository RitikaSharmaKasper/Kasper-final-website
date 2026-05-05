import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "Search Optimization",
      description:
       "We optimize websites to improve rankings on search engines, helping businesses reach more potential customers through organic search.",
      image: icon,
    },
    {
      title: "Social Marketing",
      description:
        "Our social media strategies help businesses connect with audiences, build brand awareness, and promote products or services.",
      image: icon,
    },
    {
      title: "Content Strategy",
      description:  "We create engaging content that informs audiences, strengthens brand identity, and helps businesses communicate effectively with customers.",
      image: icon,
    },
    {
      title: "Paid Campaigns",
      description:
        "Targeted advertising campaigns help businesses reach the right audience and generate leads quickly through paid promotions.",
         image: icon,
    },
    {
      title: "Audience Targeting",
      description:
       "We identify the right audience based on interests, location, and behavior to ensure marketing campaigns reach potential customers effectively.",
        image: icon,
    },

    {
      title: "Performance Tracking",
      description:
       "Our digital marketing strategies include analytics and reporting that help businesses measure campaign performance and improve results.",
        image: icon,
    },
    {
      title: "Brand Promotion",
      description:
       "We help businesses build strong brand recognition online through consistent messaging and strategic marketing activities.",
        image: icon,
    },
    {
      title: "Lead Generation",
      description:
       "Our campaigns are designed to attract potential customers and convert website visitors into valuable business leads.",
        image: icon,
    },
    {
      title: "Marketing Automation",
      description:
       "Automation tools help businesses manage campaigns, schedule content, and communicate with customers more efficiently.",
        image: icon,
    },
  ];

  return (
    <section className="features-section">
      <div className="features_content">

        <h2 className="features-heading">Key Features</h2>

        <div className="features-wrapper">
          {featuresList.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Key_features;