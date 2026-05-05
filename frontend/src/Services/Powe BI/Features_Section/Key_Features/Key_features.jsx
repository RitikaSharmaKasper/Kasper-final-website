import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "Unified Data Analytics",
      description:
       "Power BI allows businesses to analyze enterprise data from multiple sources in one platform. It supports strong data models, reporting tools, and open connectivity for easy data management.",
      image: icon,
    },
    {
      title: "Data Insights",
      description:
        "Integrate and analyze data from different systems to discover deeper insights. Power BI helps organizations use their data as a strategic advantage.",
      image: icon,
    },
    {
      title: "Manufacturing Management",
      description:  "Dynamics 365 Finance & Operations delivers real-time financial control, compliance, and performance visibility across global operations.",
      image: icon,
    },
    {
      title: "AI Powered Analytics",
      description:
        "Use advanced Microsoft AI capabilities to analyze data, build models, and discover patterns quickly, even without deep technical knowledge.",
         image: icon,
    },
    {
      title: "Content Publishing",
      description:
       "Deployment pipelines help teams publish and manage reports easily, ensuring accurate updates from development to production environments.",
        image: icon,
    },

    {
      title: "Actionable Insights",
      description:
       "Convert data insights into actions by connecting Power BI with business applications and automating workflows.",
        image: icon,
    },
    {
      title: "Real-Time Analytics",
      description:
       "Analyze real-time data streams from various sources such as applications, sensors, or onlineplatforms to make faster decisions.",
        image: icon,
    },
    {
      title: "Interactive Dashboards",
      description:
       "Create visually rich dashboards and reports that help teams understand business performance clearly.",
        image: icon,
    },
    {
      title: "Secure Data Access",
      description:
       "Power BI provides secure data access and controlled permissions to ensure sensitive business information remains protected.",
        image: icon,
    },
    {
      title: "Flexible Integration",
      description:
       "Power BI easily integrates with Microsoft tools, cloud platforms, and business applications to create a complete analytics ecosystem.",
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