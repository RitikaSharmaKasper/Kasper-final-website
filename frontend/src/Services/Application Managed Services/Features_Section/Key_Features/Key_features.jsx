import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
   
  {
    title: "System Monitoring",
    description:
      "We continuously monitor your applications to detect issues early and ensure smooth performance without unexpected downtime.",
    image: icon,
  },
  {
    title: "Performance Optimization",
    description:
      "Improve application speed and efficiency by identifying and resolving performance issues regularly.",
    image: icon,
  },
  {
    title: "Issue Resolution",
    description:
      "Quickly identify and fix application errors to maintain business continuity and avoid disruptions.",
    image: icon,
  },
  {
    title: "Regular Updates",
    description:
      "Keep your applications updated with the latest features, security patches, and improvements.",
    image: icon,
  },
  {
    title: "Security Management",
    description:
      "Protect applications from threats by implementing strong security measures and monitoring system vulnerabilities.",
    image: icon,
  },
  {
    title: "Backup Support",
    description:
      "Ensure regular data backups and recovery options to protect important business information.",
    image: icon,
  },
  {
    title: "User Support",
    description:
      "Provide ongoing support to users for resolving queries and ensuring smooth application usage.",
    image: icon,
  },
  {
    title: "System Maintenance",
    description:
      "Perform regular maintenance activities to keep applications stable and reliable.",
    image: icon,
  },
  {
    title: "Scalability Support",
    description:
      "Support business growth by managing system upgrades and expanding application capabilities when needed.",
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