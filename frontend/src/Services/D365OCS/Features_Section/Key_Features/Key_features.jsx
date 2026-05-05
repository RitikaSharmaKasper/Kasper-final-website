import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg";
const Key_features = () => {
  const featuresList = [
    {
      title: "Asset Tracking",
      description:
        "Track and manage biological and operational assets efficiently, ensuring complete visibility and control across the organization.",
      image: icon,
    },
    {
      title: "Transport Management",
      description:
        "Manage transportation activities, monitor movement, and ensure timely delivery with better route and logistics planning.",
      image: icon,
    },
    {
      title: "Financial Control",
      description:
        "Handle financial operations, track expenses, and manage budgets effectively to maintain strong financial management.",
      image: icon,
    },
    {
      title: "Supply Chain",
      description:
        "Improve supply chain processes by managing inventory, suppliers, and product flow across different stages.",
      image: icon,
    },
    {
      title: "Quality Control",
      description:
        "Ensure product and process quality by monitoring standards and maintaining consistency across operations.",
      image: icon,
    },
    {
      title: "Compliance Management",
      description:
        "Maintain compliance with industry regulations and standards, helping businesses meet required guidelines.",
      image: icon,
    },
    {
      title: "Warehouse Control",
      description:
        "Manage warehouse operations, track stock levels, and ensure efficient storage and distribution of goods.",
      image: icon,
    },
    {
      title: "CRM Integration",
      description:
        "Built in CRM helps manage customer data, interactions, and relationships in one system.",
      image: icon,
    },
    {
      title: "Standard Management",
      description:
        "Support regulatory standards such as Health Canada compliance to ensure safe and reliable operations.",
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
