import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "Customizable Platform",
      description:
       "Microsoft Dynamics CRM can be customized to match your business processes. You can modify dashboards, forms, and views easily.",
      image: icon,
    },
    {
      title: "Activity Tracking",
      description:
        "Track every interaction with customers including emails, calls, meetings, and tasks. Businesses can view a complete history of communication.",
      image: icon,
    },
    {
      title: "Sales Automation",
      description: "Manage leads, opportunities, and sales activities from one platform. This helps teams track sales performance and identify new opportunities.",
      image: icon,
    },
    {
      title: "Marketing Automation",
      description:
        "Integrate CRM with marketing tools to run campaigns, track prospects, and nurture leads. Businesses can identify the right audience.",
         image: icon,
    },
    {
      title: "Customer Service",
      description:
       "Manage customer support requests through multiple channels like website, phone, social media, or portals. Teams can respond quickly.",
        image: icon,
    },

    {
      title: "Unified Data",
      description:
       "All customer information is stored in one system, giving teams complete visibility of interactions, transactions, and business relationships.",
        image: icon,
    },
    {
      title: "Workflow Automation",
      description:
       "Automate routine tasks, notifications, and approvals to reduce manual work and improve team productivity.",
        image: icon,
    },
    {
      title: "Real-Time Insights",
      description:
       "Access dashboards and reports that show sales performance, customer activity, and business trends in real time.",
        image: icon,
    },
    {
      title: "Secure Platform",
      description:
       "Microsoft Dynamics CRM ensures strong data protection and secure access to customer information across the organization.",
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