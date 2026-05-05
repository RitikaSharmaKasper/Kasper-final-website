import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "Low-Code Development",
      description:
       "Power Platform allows businesses to build applications quickly using low-code tools, reducing development time and making solution creation easier.",
      image: icon,
    },
    {
      title: "App Creation",
      description:
        "Develop custom business applications that help automate processes and manage daily operations efficiently.",
      image: icon,
    },
    {
      title: "Workflow Automation",
      description:  "Automate repetitive tasks and business processes using Power Automate to save time and improve productivity.",
      image: icon,
    },
    {
      title: "Data Integration",
      description:
        "Connect data from multiple systems and applications to create a unified and centralized business environment.",
         image: icon,
    },
    {
      title: "Data Analytics",
      description:
       "Use Power BI integration to analyze business data and create interactive dashboards for better insights.",
        image: icon,
    },

    {
      title: "Process Optimization",
      description:
       "Automate approvals, notifications, and workflows to simplify business operations and reduce manual work.",
        image: icon,
    },
    {
      title: "Custom Solutions",
      description:
       "Build tailored applications that match specific business requirements and operational workflows.",
        image: icon,
    },
    {
      title: "Secure Platform",
      description:
       "Power Platform provides strong security features to protect data and ensure controlled access across the organization.",
        image: icon,
    },
    {
      title: "Microsoft Integration",
      description:
       "Seamlessly integrate with Microsoft tools like Dynamics 365, Office 365, and Azure to create a connected digital ecosystem.",
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