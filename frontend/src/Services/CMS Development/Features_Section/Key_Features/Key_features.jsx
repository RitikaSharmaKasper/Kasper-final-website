import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
   {
  title: "Easy Content Updates",
  description:
    "Our CMS platforms allow users to update website content quickly. Businesses can modify text, images, and pages without needing technical knowledge.",
  image: icon,
},
{
  title: "User-Friendly Dashboard",
  description:
    "We design simple dashboards that help teams manage website content easily. Users can control pages, media, and settings from one central panel.",
  image: icon,
},
{
  title: "Custom CMS Solutions",
  description:
    "We develop CMS systems based on your business requirements. Our solutions match your workflow and help you manage content effectively.",
  image: icon,
},
{
  title: "Multi-User Access",
  description:
    "Our CMS allows multiple users to manage content with different roles and permissions, ensuring better collaboration and controlled access.",
  image: icon,
},
{
  title: "Media Management",
  description:
    "Easily upload and manage images, videos, and documents through a centralized media library that keeps all content organized.",
  image: icon,
},
{
  title: "SEO-Friendly Structure",
  description:
    "Our CMS systems are built with search engine friendly structure, helping businesses optimize their website content for better online visibility.",
  image: icon,
},
{
  title: "Secure System",
  description:
    "We implement strong security features to protect website data and prevent unauthorized access to the content management platform.",
  image: icon,
},
{
  title: "Flexible Customization",
  description:
    "Businesses can easily customize layouts, pages, and modules according to changing needs without rebuilding the entire website.",
  image: icon,
},
{
  title: "Scalable Platform",
  description:
    "Our CMS platforms grow with your business, allowing you to add new pages, features, and functionalities as your website expands.",
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