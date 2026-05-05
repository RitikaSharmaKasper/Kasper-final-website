import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "Financial Management",
      description:
       "Manage accounting, cash flow, invoices, and financial reporting in one system, helping businesses maintain accurate records and better control over finances.",
      image: icon,
    },
    {
      title: "Manufacturing",
      description:
        "Plan and manage production processes, track materials, and control manufacturing operations to ensure smooth workflow and efficient resource usage.",
      image: icon,
    },
    {
      title: "Business Operations",
      description:  "Manage sales, purchasing, inventory, and daily operations in one platform, improving coordination between different business functions.",
      image: icon,
    },
    {
      title: "Reporting Tools",
      description:
        "Generate real-time reports and dashboards to monitor financial performance and business activities for better decision making.",
         image: icon,
    },
    {
      title: "Inventory Control",
      description:
       "Track stock levels, manage warehouses, and monitor product movement to ensure accurate inventory management.",
        image: icon,
    },

    {
      title: "Sales Management",
      description:
       "Manage customer orders, track sales activities, and monitor revenue to improve sales performance.",
        image: icon,
    },
    {
      title: "Supply Chain",
      description:
       "Control procurement and supplier activities to ensure smooth product flow and efficient supply chain management.",
        image: icon,
    },
    {
      title: "Cloud Access",
      description:
       "Access business data securely from anywhere, helping teams collaborate and manage operations remotely.",
        image: icon,
    },
    {
      title: "System Integration",
      description:
       "Integrate Business Central with other Microsoft tools and business applications to create a connected digital ecosystem.",
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