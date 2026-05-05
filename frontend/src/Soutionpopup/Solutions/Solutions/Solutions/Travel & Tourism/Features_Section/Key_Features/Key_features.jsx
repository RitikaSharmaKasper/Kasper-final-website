import React from "react";
import "./key_features.css";
import FeatureCard from "./FeatureCard";
import icon from "../../../../assets/images/icon.svg"; 
const Key_features = () => {

  const featuresList = [
    {
      title: "Dynamic Itinerary Builder",
      description:
       "Create stunning, day-by-day travel plans with drag-and-drop ease. Include flights, hotels, sightseeing, and transport in one digital brochure.",
      image: icon,
    },
    {
      title: "Multi-Vendor API Integration",
      description:
        "Instantly pull live rates and inventory from global airlines, hotels, and local car rentals to offer the most competitive pricing.",
      image: icon,
    },
    {
      title: "Automated Visa & Document Vault",
      description:  "Track visa requirements by country and allow travelers to securely upload passports and documents for automated processing alerts.",
      image: icon,
    },
    {
      title: "Group & Corporate Booking Engine",
      description:
        "Manage large group tours or corporate retreats with specialized tools for room splitting, shared expenses, and bulk ticketing.",
         image: icon,
    },
    {
      title: "Real-Time Travel Alerts & Support",
      description:
       "Keep your travelers informed with automated WhatsApp/SMS updates for flight delays, gate changes, or weather advisories.",
        image: icon,
    },

    {
      title: "Dynamic Packaging Engine:",
      description:
       "Combine flights, hotels, and local activities into a single bundle with automated margin calculations and real-time price updates.",
        image: icon,
    },
    {
      title: "Automated Visa Tracking & Vault",
      description:
       "A secure digital locker for traveler passports and documents with automated alerts for visa expiry or application status changes.",
        image: icon,
    },
    {
      title: "Group & MICE Operations",
      description:
       "Specialized tools for managing large-scale events, including rooming lists, bulk ticketing, and shared expense tracking.",
        image: icon,
    },
    {
      title: "Post-Trip Engagement & Feedback",
      description:
       "Automatically trigger Welcome Home messages and review requests to build loyalty and improve your service rankings.",
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