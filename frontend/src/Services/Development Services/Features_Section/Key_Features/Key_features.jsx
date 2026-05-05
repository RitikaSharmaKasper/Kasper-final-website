import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [

  {
    title: "Integration Deployment",
    description:
      "We develop solutions that integrate with existing systems and ensure smooth deployment, helping businesses connect tools and manage operations efficiently.",
    image: icon,
  },
  {
    title: "Cloud Approach",
    description:
      "Our development follows a cloud-first approach, allowing businesses to access applications from anywhere with better flexibility and scalability.",
    image: icon,
  },
  {
    title: "Modern Architecture",
    description:
      "We use modern architectural strategies to build secure, flexible, and high-performing applications that support long-term business needs.",
    image: icon,
  },
  {
    title: "Scalable Solutions",
    description:
      "Applications are designed to grow with your business, allowing easy expansion of features and users.",
    image: icon,
  },
  {
    title: "Custom Development",
    description:
      "We build software tailored to your business requirements, ensuring solutions match your workflow and operations.",
    image: icon,
  },
  {
    title: "Performance Focus",
    description:
      "Our applications are optimized for speed and reliability to deliver smooth user experience.",
    image: icon,
  },
  {
    title: "Secure Development",
    description:
      "We follow best security practices to protect applications and business data from threats.",
    image: icon,
  },
  {
    title: "API Integration",
    description:
      "Our solutions connect easily with third-party systems and tools to improve functionality.",
    image: icon,
  },
  {
    title: "Continuous Support",
    description:
      "We provide ongoing support and updates to ensure your applications perform efficiently.",
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