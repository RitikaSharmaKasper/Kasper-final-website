import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "System Integration",
      description:
       "Connect different business applications such as ERP, CRM, and third-party tools to ensure smooth data flow and better coordination.",
      image: icon,
    },
    {
      title: "User Interface Design",
      description:
        "Design simple and clear interfaces that help users easily interact with systems and perform tasks without confusion.",
      image: icon,
    },
    {
      title: "API Integration",
      description:  "Integrate systems using APIs to enable real-time data exchange between applications and platforms.",
      image: icon,
    },
    {
      title: "Data Synchronization",
      description:
        "Ensure data is updated across all systems automatically, reducing errors and maintaining consistency.",
         image: icon,
    },
    {
      title: "Cross-Platform Access",
      description:
       "Enable systems to work across multiple platforms such as web, mobile, and cloud for better accessibility.",
        image: icon,
    },

    {
      title: "Workflow Integration",
      description:
       "Connect business processes across systems to automate tasks and improve operational efficiency.",
        image: icon,
    },
    {
      title: "Secure Integration",
      description:
       "Implement secure integration methods to protect data during system communication.",
        image: icon,
    },
    {
      title: "Scalable Integration",
      description:
       "Dynamics 365 Finance & Operations delivers real-time financial control, compliance, and performance visibility across global operations.",
        image: icon,
    },
    {
      title: "Custom Interfaces",
      description:
       "Design interfaces based on business needs to match workflows and improve usability.",
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