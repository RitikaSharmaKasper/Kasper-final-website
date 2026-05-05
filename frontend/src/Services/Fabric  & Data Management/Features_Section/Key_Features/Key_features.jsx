import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "Unified Data Platform",
      description:
       "Microsoft Fabric connects different data sources in one platform, allowing businesses to manage and analyze enterprise data efficiently.",
      image: icon,
    },
    {
      title: "Data Integration",
      description:
        "Combine data from multiple systems, applications, and databases to create a centralized and organized data environment.",
      image: icon,
    },
    {
      title: "Real-Time Analytics",
      description:  "Analyze live data streams and monitor business performance to make faster and more informed decisions.",
      image: icon,
    },
    {
      title: "Data Engineering",
      description:
        "Process and transform large datasets using advanced data engineering tools that improve data accuracy and usability.",
         image: icon,
    },
    {
      title: "Data Warehousing",
      description:
       "Store and manage structured data in a centralized warehouse for better reporting and analytics.",
        image: icon,
    },

    {
      title: "Advanced Analytics",
      description:
       "Use built-in analytics tools to discover trends, patterns, and insights from business data.",
        image: icon,
    },
    {
      title: "AI Integration",
      description:
       "Apply artificial intelligence capabilities to analyze data and generate smarter insights forbusiness strategies.",
        image: icon,
    },
    {
      title: "Secure Data Management",
      description:
       "Protect sensitive information with strong security features and controlled data access.",
        image: icon,
    },
    {
      title: "Cloud-Based Platform",
      description:
       "Access data and analytics tools securely from anywhere using Microsoft’s cloud infrastructure.",
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