import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "System Upgradet",
      description:
       "Upgrade your existing Microsoft Dynamics system to the latest version with improved features,performance, and security.",
      image: icon,
    },
    {
      title: "Cloud Migration",
      description:
        "Move your system from on-premise to cloud for better accessibility, flexibility, and scalability.",
      image: icon,
    },
    {
      title: "Data Migration",
      description:  "Transfer business data safely and accurately without loss, ensuring continuity during system migration.",
      image: icon,
    },
    {
      title: "Platform Modernization",
      description:
        "Modernize legacy systems to improve efficiency, usability, and compatibility with new technologies.",
         image: icon,
    },
    {
      title: "Minimal Downtime",
      description:
       "Ensure smooth migration with minimal disruption so your business operations continue without delays.",
        image: icon,
    },

    {
      title: "Integration Support",
      description:
       "Maintain and rebuild integrations with other business systems during the upgrade process.",
        image: icon,
    },
    {
      title: "Testing and Validation",
      description:
       "Thorough testing ensures that the upgraded system works correctly and meets business requirements..",
        image: icon,
    },
    {
      title: "Security Enhancement",
      description:
       "Upgrade improves system security and protects sensitive business data with modern standards.",
        image: icon,
    },
    {
      title: "Ongoing Support",
      description:
       "Provide post-migration support to ensure system stability and smooth performance after upgrade.",
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