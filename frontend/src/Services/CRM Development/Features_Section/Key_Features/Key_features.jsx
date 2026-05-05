import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
{
      title: "Lead Tracking",
      description:
       "Track leads from different sources and manage them in one system. This helps sales teams organize prospects and follow-up quickly.",
      image: icon,
    },
    {
      title: "Contact Management",
      description:
        "Store and manage customer information such as contact details, communication history, and preferences. This helps teams understand clients better.",
      image: icon,
    },
    {
      title: "Sales Pipeline",
      description:  "Track your complete sales pipeline from inquiry to deal closure, manage each stage efficiently and improve overall conversion rates.",
      image: icon,
    },
    {
      title: "Task Automation",
      description:
        "Automate follow-ups, reminders, and updates to save time and help sales teams focus on high-value customer interactions.",
         image: icon,
    },
    {
      title: "Activity History",
      description:
       "Maintain a detailed record of emails, calls, meetings, and customer interactions, ensuring complete visibility for your entire team.",
        image: icon,
    },

    {
      title: "Team Collaboration",
      description:
       "Sales and support teams can collaborate in one platform by sharing updates, notes, and task information related to customers and deals.",
        image: icon,
    },
    {
      title: "Custom Workflows",
      description:
       "We develop CRM systems with customized workflows that helps businesses to manage operations according to their needs.",
        image: icon,
    },
    {
      title: "Performance Reports",
      description:
       "Get detailed insights about sales performance, lead conversion, and team productivity through easy-to-understand reports.",
        image: icon,
    },
    {
      title: "Secure Data",
      description:
       "Customer data is stored safely using modern security standards, protecting sensitive business information from unauthorized access.",
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