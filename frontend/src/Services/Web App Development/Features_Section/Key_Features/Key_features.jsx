import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg";
const Key_features = () => {

  const featuresList = [
    {
      title: "Custom Websites",
      description:
        "We design and develop websites that match your business needs. Our custom solutions help companies create unique digital platforms that represent their brand and services.",
      image: icon,
    },
    {
      title: "Responsive Design",
      description:
        "Our websites work smoothly on desktops, tablets, and mobile devices. This ensures visitors get a great experience regardless of the device they use.",
      image: icon,
    },
    {
      title: "Fast Performance",
      description: "We build websites with optimized code and modern technologies so pages load quickly and perform smoothly for users.",
      image: icon,
    },
    {
      title: "Secure Systems",
      description:
        "Our development process includes security best practices to protect websites from threats and keep business data safe.",
      image: icon,
    },
    {
      title: "User-Friendly Design",
      description:
        "Websites are designed with simple navigation and clear layouts so visitors can easily find information and interact with the platform.",
      image: icon,
    },

    {
      title: "Scalable Solutions",
      description:
        "Our web solutions are built to grow with your business, allowing you to add features and expand functionality over time.",
      image: icon,
    },
    {
      title: "SEO Ready",
      description:
        "We develop websites with search engine friendly structure, helping businesses improve visibility on search engines and attract more visitors.",
      image: icon,
    },
    {
      title: "Integration Support",
      description:
        "Our web platforms can integrate with third-party tools such as payment gateways, CRM systems, and marketing platforms.",
      image: icon,
    },
    {
      title: "Easy Management",
      description:
        "We create websites with simple management systems so businesses can update content, images, and information easily.",
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