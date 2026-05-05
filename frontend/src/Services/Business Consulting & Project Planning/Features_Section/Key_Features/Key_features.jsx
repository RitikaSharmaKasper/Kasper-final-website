import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "Project Planning",
      description:
       "We help businesses define project goals, timelines, and strategies to ensure clear direction and successful execution.",
      image: icon,
    },
    {
      title: "Data Conversion Plans",
      description:
        "Plan and manage data migration and conversion during system implementation to ensure accuracy and smooth transition.",
      image: icon,
    },
    {
      title: "Budget Planning",
      description:  "Create and manage project budgets effectively to control costs and ensure proper resource allocation.",
      image: icon,
    },
    {
      title: "Vendor Management",
      description:
        "Track and evaluate vendor performance to ensure quality delivery and strong supplier relationships.",
         image: icon,
    },
    {
      title: "Project Reports",
      description:
       "Generate clear and structured reports to monitor project progress, performance, and key outcomes.",
        image: icon,
    },

    {
      title: "Project Monitoring",
      description:
       "Continuously track project activities to ensure tasks are completed on time and aligned with business goals.",
        image: icon,
    },
    {
      title: "Issue Resolution",
      description:
       "Identify and resolve project challenges quickly to avoid delays and maintain smooth workflow.",
        image: icon,
    },
    {
      title: "Resource Planning",
      description:
       "Allocate resources efficiently to ensure optimal use of time, budget, and workforce.",
        image: icon,
    },
    {
      title: "Risk Management",
      description:
       "Identify potential risks early and plan strategies to minimize impact on project execution.",
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