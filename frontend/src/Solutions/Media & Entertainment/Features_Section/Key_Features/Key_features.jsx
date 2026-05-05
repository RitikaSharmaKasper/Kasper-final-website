import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "AI-Powered Content Tagging",
      description:
       "Automatically scan video and audio files to generate metadata, tags, and descriptions, making your entire media library instantly searchable.",
      image: icon,
    },
    {
      title: "Digital Rights Management (DRM)",
      description:
        "Securely manage licenses, copyrights, and distribution agreements with automated alerts for expiring contracts.",
      image: icon,
    },
    {
      title: "Real-Time Streaming Analytics",
      description:  "Monitor live viewer counts, drop-off rates, and regional heatmaps to understand exactly how your audience interacts with your content.",
      image: icon,
    },
    {
      title: "Multi-Platform Distribution Engine",
      description:
        "Upload once and auto-format your content for YouTube, Netflix, Instagram, and Television standards simultaneously.",
         image: icon,
    },
    {
      title: "Collaborative Post-Production Suite",
      description:
       "A cloud-based review system where editors and directors can leave time-stamped comments directly on video frames.",
        image: icon,
    },

    {
      title: "Automated Royalty & Payout Calculator",
      description:
       "Calculate earnings for actors, musicians, and creators based on views, streams, or ticket sales with built-in tax compliance..",
        image: icon,
    },
    {
      title: "Smart Casting & Talent Database",
      description:
      " Maintain a digital directory of artists, their portfolios, and availability, integrated with a secure audition-to-contract workflow.",
        image: icon,
    },
    {
      title: "Fan Engagement & Loyalty Portals",
      description:
       "Build dedicated spaces for Superfans with early access content, virtual meet-and-greets, and exclusive merchandise stores.",
        image: icon,
    },
    {
      title: "Predictive Trend Analysis",
      description:
       ": Use AI to analyze social media signals and predict which genres or topics are likely to go viral in the coming quarter.",
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