import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [

  {
    title: "End-to-End Expertise",
    description:
      "We provide complete support across Microsoft products including productivity tools, ERP, CRM, and cloud platforms, ensuring proper licensing and usage.",
    image: icon,
  },
  {
    title: "Compliance First",
    description:
      "Our approach ensures licenses match users, devices, and workloads, helping businesses stay compliant and prepared for audits.",
    image: icon,
  },
  {
    title: "Cost Optimization",
    description:
      "We help reduce licensing costs by selecting the right plans, applying benefits, and improving procurement strategies.",
    image: icon,
  },
  {
    title: "User Licensing",
    description:
      "User-based licensing allows employees to access software across multiple devices, making it ideal for modern work environments.",
    image: icon,
  },
  {
    title: "Device Licensing",
    description:
      "Device-based licensing is suitable for shared systems or kiosks where multiple users access the same device.",
    image: icon,
  },
  {
    title: "Flexible Licensing",
    description:
      "Choose between subscription-based or perpetual licenses based on business needs and operational requirements.",
    image: icon,
  },
  {
    title: "Server Licensing",
    description:
      "Manage server and client access licenses (CALs) effectively for on-premise systems and enterprise environments.",
    image: icon,
  },
  {
    title: "Scalable Plans",
    description:
      "Licensing solutions are designed to grow with your business, supporting expansion and increasing user requirements.",
    image: icon,
  },
  {
    title: "License Management",
    description:
      "We help monitor and manage licenses to ensure efficient usage and avoid unnecessary costs.",
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