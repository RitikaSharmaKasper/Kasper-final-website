import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
   
  {
    title: "CAPA Management",
    description:
      "Manage non-conformances and deviations with corrective and preventive actions, helping businesses improve quality and avoid repeated issues.",
    image: icon,
  },
  {
    title: "Batch Records",
    description:
      "Capture complete production and packaging details with electronic records and e-signatures for better tracking and compliance.",
    image: icon,
  },
  {
    title: "Recall Management",
    description:
      "Handle product recalls efficiently with full traceability, ensuring quick response and minimal business impact.",
    image: icon,
  },
  {
    title: "eSignature Control",
    description:
      "Enable secure approvals with multiple sign-off levels, ensuring compliance and controlled authorization across processes.",
    image: icon,
  },
  {
    title: "System Validation",
    description:
      "Support validation processes with on-site verification and compliance checks to meet industry and regulatory requirements.",
    image: icon,
  },
  {
    title: "Deviation Control",
    description:
      "Track and manage deviations, ensuring proper monitoring and corrective actions for quality improvement.",
    image: icon,
  },
  {
    title: "Sample Management",
    description:
      "Manage sample data and communication between labs and systems for accurate testing and reporting.",
    image: icon,
  },
  {
    title: "Environmental Monitoring",
    description:
      "Monitor environmental conditions to ensure compliance with required standards and maintain product quality.",
    image: icon,
  },
  {
    title: "Quality Reporting",
    description:
      "Generate regulatory and quality reports to meet industry standards and maintain compliance documentation.",
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