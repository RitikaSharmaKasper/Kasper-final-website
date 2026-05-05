import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
      {
      title: "Android Development",
      description:
       "We develop high-performance Android applications that help businesses reach a large mobile audience and deliver smooth user experiences.",
      image: icon,
    },
    {
      title: "iOS Development",
      description:
        "Our iOS apps are designed for reliability, performance, and usability, helping businesses connect with Apple device users effectively.",
      image: icon,
    },
    {
      title: "Cross-Platform Apps",
      description:  "We build applications that work across multiple platforms, allowing businesses to reach both Android and iOS users with a single solution.",
      image: icon,
    },
    {
      title: "User-Friendly Design",
      description:
        "Our mobile apps focus on simple and intuitive interfaces, ensuring users can easily navigate features and complete tasks smoothly.",
         image: icon,
    },
    {
      title: "Secure Applications",
      description:
       "We implement strong security practices to protect user data and ensure safe transactions and interactions within the mobile app.",
        image: icon,
    },

    {
      title: "Fast Performance",
      description:
       "Our apps are optimized for speed and smooth operation, providing users with a reliable and responsive experience.",
        image: icon,
    },
    {
      title: "API Integration",
      description:
       "Mobile applications can connect with other systems such as payment gateways, CRM platforms, and databases for seamless operations.",
        image: icon,
    },
    {
      title: "Scalable Architecture",
      description:
       "Our mobile apps are built with scalable architecture, allowing businesses to add new features as their requirements grow.",
        image: icon,
    },
    {
      title: "App Maintenance",
      description:
       "We provide ongoing support and updates to ensure the mobile app continues to perform efficiently and remains compatible with new technologies.",
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