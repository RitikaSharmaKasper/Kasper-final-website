import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "Integrated Modules",
      description:
       "Finance, accounting, and operational modules work together in one system, allowing businesses to manage different departments smoothly and keep data connected across the organization.",
      image: icon,
    },
    {
      title: "Automated Reporting",
      description:
        "Generate financial and operational reports automatically. Businesses can track performance,analyze data quickly, and make informed decisions using real-time insights.",
      image: icon,
    },
    {
      title: "Budget Planning",
      description:  "Plan and manage budgets with flexible configuration options. Businesses can monitor expenses, forecast financial performance, and maintain better financial control.",
      image: icon,
    },
    {
      title: "Asset Management",
      description:
        "Manage company equipment, machinery, and organizational assets effectively. Track asset usage, maintenance schedules, and lifecycle information in one system.",
         image: icon,
    },
    {
      title: "Credit Control",
      description:
       "Manage customer credit limits and collections efficiently. This helps businesses reduce financial risks and improve cash flow management.",
        image: icon,
    },

    {
      title: "Inventory Control",
      description:
       "Track inventory levels and manage stock across multiple warehouses, ensuring accurate inventory records and efficient product management.",
        image: icon,
    },
    {
      title: "Procurement Management",
      description:
      " Monitor suppliers and manage procurement activities easily. Businesses can track vendorperformance and streamline purchasing processes.",
        image: icon,
    },
    {
      title: "Cloud Platform",
      description:
       "Access business data securely from anywhere with Microsoft’s cloud platform, helping teams collaborate and manage operations more efficiently.",
        image: icon,
    },
    {
      title: "Project Management",
      description:
       "Manage project tasks, timesheets, approvals, and progress in one platform, helping teams track project performance and maintain transparency.",
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